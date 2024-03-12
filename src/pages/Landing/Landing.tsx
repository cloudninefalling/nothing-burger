import About from "../../components/About/About";
import BurgerPromo from "../../components/BurgerPromo/BurgerPromo";
import Lead from "../../components/Lead/Lead";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function Landing() {
  return (
    <>
      <Lead />
      <div className="flex w-11/12 justify-center gap-2">
        <About />
        <BurgerPromo />
      </div>
      <SignUpForm />
    </>
  );
}
