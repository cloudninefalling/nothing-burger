import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../features/currentUserSlice";

type Inputs = {
  username: string;
  password: string;
};

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
    <section className="flex flex-col items-center px-14 py-20">
      <h2 className="text-4xl font-bold">
        Create an&nbsp;account and&nbsp;order&nbsp;now!
      </h2>
      <form
        className="mt-10 flex w-3/5 flex-col items-center pb-6"
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
          className=" bg-transparent my-2 w-full min-w-72 border-b-2 border-b-color-text text-center text-3xl placeholder:capitalize"
          type="text"
          placeholder="username"
          id="username"
          name="username"
          autoComplete="off"
        />
        <p className="mb-4 min-h-5 text-xl font-semibold text-color-error">
          {errors.username?.message || ""}
        </p>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="bg-transparent my-2 w-full min-w-72 border-b-2 border-b-color-text text-center text-3xl placeholder:capitalize"
          type="password"
          placeholder="password"
          id="password"
          name="password"
          autoComplete="off"
        />
        <p className="mb-4 min-h-5 text-xl font-semibold text-color-error">
          {errors.password?.message || ""}
        </p>

        <button
          className="border-b-2 text-2xl font-bold uppercase"
          type="submit"
          form="signup__form"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
