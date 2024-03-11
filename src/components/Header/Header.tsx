import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed z-50 box-border flex w-full max-w-[1366px] gap-4 border-b-2 border-solid border-b-color-accent bg-color-text px-14 py-3 text-color-background ">
      <Link to={"/"} className="aspect-square w-12 bg-color-accent" />
      <p className="">
        <span className="">nothing</span>&nbsp;burger
      </p>
    </header>
  );
}

// todo define styles for text
