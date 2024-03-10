import "./IngredientCarousel.css";

import { ingredientsMap } from "../../utils/constants";
import { useState } from "react";

type TProps = {
  ingredients: TIngredients;
  pos: string;
  setBurger: React.Dispatch<React.SetStateAction<TBurger>>;
};

// todo set up dif vers for sauces, patties, ingredients

export default function IngredientCarousel({
  ingredients,
  pos,
  setBurger,
}: TProps) {
  const [current, setCurrent] = useState(0);

  // setBurger((prev: TBurger) => {
  //   const newBurger: TBurger = {
  //     top: pos === "top" ? ingredients[current] : prev.top,
  //     ingredients: pos === "mid" ? ingredients[current] : prev.ingredients,
  //     bot: pos === "bot" ? ingredients[current] : prev.bot,
  //   };

  //   return newBurger;
  // });

  const shiftCurrent = (delta: number) => {
    if (current + delta < 0) {
      setCurrent(ingredients.length - 1);
      return;
    }

    if (current + delta > ingredients.length - 1) {
      setCurrent(0);
      return;
    }

    setCurrent(current + delta);
  };

  return (
    <div className="ingredient-carousel">
      <button
        className="ingredient-carousel__button ingredient-carousel__button_left"
        type="button"
        onClick={() => shiftCurrent(-1)}
      />
      <div
        className="ingredient-carousel__item"
        style={{
          backgroundImage: `url(${ingredientsMap.get(ingredients[current])})`,
        }}
      />
      <button
        className="ingredient-carousel__button ingredient-carousel__button_right"
        type="button"
        onClick={() => shiftCurrent(1)}
      />
    </div>
  );
}
