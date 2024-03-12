import { Link } from "react-router-dom";
import burgerBunTop from "../../assets/burger-parts/burger-bun-top.png";
import burgerBunBot from "../../assets/burger-parts/burger-bun-bot.png";
import burgerPattyBeef from "../../assets/burger-parts/burger-patty-beef.png";
import burgerLettuce from "../../assets/burger-parts/burger-lettuce.png";

const wordsToImgs: { [key: string]: string } = {
  Make: burgerBunTop,
  Your: burgerPattyBeef,
  Own: burgerLettuce,
  Burger: burgerBunBot,
};

export default function BurgerPromo() {
  const textDivs = Object.keys(wordsToImgs).map((word: string, i: number) => (
    <div
      key={word}
      style={{
        "--image-url": `url(${wordsToImgs[word]})`,
        zIndex: 5 - i,
      }}
      className="-my-[4.2rem] mx-auto flex h-52 w-9/12 bg-[image:var(--image-url)] bg-contain bg-center bg-no-repeat"
    >
      <p
        className=" mx-auto my-auto bg-clip-text pt-8 text-center  text-5xl font-bold uppercase italic text-color-accent"
        style={{
          textShadow: "3px 3px 0 #000",
        }}
      >
        {word}
      </p>
    </div>
  ));

  return (
    <section className="px-15 bg-color-secondary flex w-2/5 flex-col items-center rounded-2xl py-8 text-color-text shadow-[inset_0_0px_5px_rgba(0,0,0,0.3)]">
      <p className="text-3xl font-semibold uppercase">Use your</p>
      <p
        style={{
          textShadow: "3px 3px 0 #000, 5px 5px 0 #fff",
        }}
        className="bg-clip-text text-center text-5xl font-extrabold  uppercase italic text-color-accent"
      >
        imagination
      </p>

      <Link
        to={"/build-a-burger"}
        className=" mt-6 flex w-[85%] flex-col overflow-hidden rounded-xl bg-color-background p-12 align-middle shadow-lg transition-all hover:w-[88%] hover:shadow-xl"
      >
        {textDivs}
      </Link>
    </section>
  );
}

// todo style divs as images w/ text
