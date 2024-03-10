import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="header__logo" />
      <p className="header__text">
        <span className="header__text header__span">nothing</span>&nbsp;burger
      </p>
    </header>
  );
}

// todo define styles for header__text, __span
