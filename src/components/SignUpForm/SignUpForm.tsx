import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

import "./SignUpForm.css";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../features/currentUserSlice";
export default function SignUpForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
    dispatch(setCurrentUser({ username, password }));
  };

  // todo swap contents of window with SUCCESS MY FRIEND!!!!

  return (
    <section className="signup">
      <h2 className="signup__title">
        Create an&nbsp;account and&nbsp;order&nbsp;now!
      </h2>
      <form
        className="signup__form"
        id="signup__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
            minLength: {
              value: 2,
              message: "Username must be at least 2 characters",
            },
          })}
          className="signup__input"
          type="text"
          placeholder="username"
          id="username"
          name="username"
          autoComplete="off"
        />
        <p className="signup__error">{errors.username?.message || ""}</p>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="signup__input"
          type="password"
          placeholder="password"
          id="password"
          name="password"
          autoComplete="off"
        />
        <p className="signup__error">{errors.password?.message || ""}</p>

        <button className="signup__button" type="submit" form="signup__form">
          Sign Up
        </button>
      </form>
    </section>
  );
}
