import { Link } from "react-router-dom";
import "./BurgerPromo.css";
export default function BurgerPromo() {
  return (
    <section className="burger-promo">
      <p className="burger-promo__text">Use your</p>
      <p className="burger-promo__text burger-promo__text_big">imagination</p>
      <Link to={"/build-a-burger"} className="burger-promo__burger">
        <div className="burger-promo__burger-image">Make</div>
        <div className="burger-promo__burger-image">Your</div>
        <div className="burger-promo__burger-image">Own</div>
        <div className="burger-promo__burger-image">Burger</div>
      </Link>
    </section>
  );
}
