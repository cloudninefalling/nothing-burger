import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/currentUserSlice";

export default function Header() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <header className="header">
      <Link to={"/"} className="header__logo" />
      <p>current user: {currentUser.username}</p>
    </header>
  );
}
