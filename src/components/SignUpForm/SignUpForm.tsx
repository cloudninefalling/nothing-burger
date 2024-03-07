import "./SignUpForm.css";
export default function SignUpForm() {
  return (
    <section className="signup">
      <h2 className="signup__title">
        Create an&nbsp;account and&nbsp;order&nbsp;now!
      </h2>
      <form className="signup__form" id="signup__form">
        <input
          className="signup__input"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="signup__input"
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="signup__button" type="submit" form="signup__form">
          Sign Up
        </button>
      </form>
    </section>
  );
}
