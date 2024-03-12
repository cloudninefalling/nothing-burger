import { ReactElement, useState } from "react";
import IngredientCarousel from "../IngredientCarousel/IngredientCarousel";
import { sauces, veggies, eggsAndDairy, meat } from "../../utils/constants";
import { TBurger } from "../../types/global";

export default function BurgerBuilder() {
  const [burger, setBurger] = useState<TBurger>({
    top: "bun-top",
    ingredients: ["patty-beef"],
    bot: "bun-bot",
  });

  const [layerList, setLayerList] = useState<ReactElement[]>([
    <IngredientCarousel
      key={0}
      ingredients={meat}
      pos="mid"
      setBurger={setBurger}
    />,
  ]);

  const renderButtons = () => (
    // todo move to component
    <div className="flex gap-3">
      <button
        type="button"
        className={`cursor-pointer rounded-md border-none bg-color-primary p-2 font-semibold capitalize transition-all ${
          layerList.length > 3 ? "hidden" : ""
        }`}
        onClick={() => addLayer(meat)}
      >
        Add Meat
      </button>
      <button
        type="button"
        aria-label="add veggies"
        className={`cursor-pointer rounded-md border-none bg-color-primary p-2 font-semibold capitalize transition-all ${
          layerList.length > 3 ? "hidden" : ""
        }`}
        onClick={() => addLayer(veggies)}
      >
        Add Veggies
      </button>
      <button
        type="button"
        aria-label="add eggs or dairy"
        className={`cursor-pointer rounded-md border-none bg-color-primary p-2 font-semibold capitalize transition-all ${
          layerList.length > 3 ? "hidden" : ""
        }`}
        onClick={() => addLayer(eggsAndDairy)}
      >
        add eggs/dairy
      </button>
      <button
        type="button"
        aria-label="add sauce"
        className={`cursor-pointer rounded-md border-none bg-color-primary p-2 font-semibold capitalize transition-all ${
          layerList.length > 3 ? "hidden" : ""
        }`}
        onClick={() => addLayer(sauces)}
      >
        Add Sauces
      </button>
    </div>
  );

  function addLayer(type: typeof meat) {
    setLayerList(
      layerList.concat(
        <IngredientCarousel
          key={layerList.length}
          ingredients={type}
          pos="mid"
          setBurger={setBurger}
        />,
      ),
    );
  }

  const submitBurger = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(burger);
  };

  return (
    <section className="mt-32 flex flex-col items-center">
      <h2 className="text-6xl font-bold uppercase italic text-color-primary">
        Build-a-Burger!
      </h2>
      <form
        className="mt-16 flex flex-col items-center gap-4"
        onSubmit={submitBurger}
      >
        <IngredientCarousel
          ingredients={["bun-top", "lettuce"]}
          pos="top"
          setBurger={setBurger}
        />
        {layerList}
        <IngredientCarousel
          ingredients={["bun-bot", "lettuce"]}
          pos="bot"
          setBurger={setBurger}
        />
        {renderButtons()}

        <button type="submit">Add Burger</button>
      </form>
      <a
        className="mt-8 text-sm font-semibold transition-all hover:text-color-primary"
        href="http://www.freepik.com"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        burger ingredients designed by pch.vector / Freepik
      </a>
    </section>
  );
}
