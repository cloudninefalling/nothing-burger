import { Link } from "react-router-dom";

import burgerBunTop from "../../assets/burger-parts/burger-bun-top.png";
import burgerBunBot from "../../assets/burger-parts/burger-bun-bot.png";
import questionMark from "../../assets/excl-question.png";

export default function Header() {
  return (
    <header className="bg-color-secondary fixed z-50 mt-1 box-border flex w-full max-w-[1366px] items-center gap-4 rounded-xl px-4 py-1 text-color-background shadow-lg">
      <Link
        to={"/"}
        className="flex items-center gap-4 transition-all hover:opacity-80"
      >
        <div className="hover: flex aspect-square flex-col items-center">
          <div
            className="size-10 bg-[image:var(--image-url)] bg-contain bg-center bg-no-repeat"
            style={{
              "--image-url": `url(${burgerBunTop})`,
              zIndex: 5,
            }}
          />
          <div
            className="mt-[-1.2rem] size-10 bg-[image:var(--image-url)] bg-contain bg-center bg-no-repeat"
            style={{
              "--image-url": `url(${questionMark})`,
              zIndex: 4,
            }}
          />
          <div
            className="mt-[-1.8rem] size-10 bg-[image:var(--image-url)] bg-contain bg-center bg-no-repeat"
            style={{
              "--image-url": `url(${burgerBunBot})`,
              zIndex: 3,
            }}
          />
        </div>

        <p className="text-4xl font-bold uppercase italic">
          <span
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextFillColor: "transparent",
            }}
          >
            nothing
          </span>
          burger!
        </p>
      </Link>
    </header>
  );
}

// todo define styles for text
