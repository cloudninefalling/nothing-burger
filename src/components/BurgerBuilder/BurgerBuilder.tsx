import { ReactElement, useState } from "react";
import IngredientCarousel from "../IngredientCarousel/IngredientCarousel";
import "./BurgerBuilder.css";
import { sauces, veggies, eggsAndDairy, meat } from "../../utils/constants";

export default function BurgerBuilder() {
  const [burger, setBurger] = useState<TBurger>({
    top: "bun-top",
    ingredients: ["patty-beef"],
    bot: "bun-bot",
  });

  console.log(burger);

  const [layerList, setLayerList] = useState<ReactElement[]>([
    <IngredientCarousel
      key={0}
      ingredients={meat}
      pos="mid"
      setBurger={setBurger}
    />,
  ]);

  const buttons = () => (
    // todo move to component
    <div style={{ display: "flex" }}>
      <button
        type="button"
        aria-label="add meat"
        className={`burger-builder__button ${
          layerList.length > 3 ? "burger-builder__button_disabled" : ""
        }`}
        onClick={() => addLayer(meat)}
      />
      <button
        type="button"
        aria-label="add veggies"
        className={`burger-builder__button ${
          layerList.length > 3 ? "burger-builder__button_disabled" : ""
        }`}
        onClick={() => addLayer(veggies)}
      />
      <button
        type="button"
        aria-label="add eggs or dairy"
        className={`burger-builder__button ${
          layerList.length > 3 ? "burger-builder__button_disabled" : ""
        }`}
        onClick={() => addLayer(eggsAndDairy)}
      />
      <button
        type="button"
        aria-label="add sauce"
        className={`burger-builder__button ${
          layerList.length > 3 ? "burger-builder__button_disabled" : ""
        }`}
        onClick={() => addLayer(sauces)}
      />
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
        />
      )
    );
  }

  const submitBurger = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(burger);
  };

  return (
    <section className="burger-builder">
      <h2>Build-a-Burger!</h2>
      <form className="burger-builder__form" onSubmit={submitBurger}>
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
        {buttons()}

        <button type="submit">Add Burger</button>
      </form>
      <a
        className="burger-builder__link"
        href="http://www.freepik.com"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        burger ingredients designed by pch.vector / Freepik
      </a>
    </section>
  );
}
