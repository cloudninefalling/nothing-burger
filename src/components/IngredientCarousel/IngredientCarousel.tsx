import { ingredientsMap } from "../../utils/constants";
import { useState } from "react";
import { TIngredients } from "../../types/global";

type TProps = {
  ingredients: TIngredients;
  // pos: string;
  // setBurger: React.Dispatch<React.SetStateAction<TBurger>>;
};

// todo set up dif vers for sauces, patties, ingredients

export default function IngredientCarousel({
  ingredients,
  // pos,
  // setBurger,
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
    <div className="mx-auto flex w-full justify-between gap-5">
      <button
        className="hover:bg-color-secondary aspect-square w-12 cursor-pointer bg-color-primary transition-all"
        type="button"
        onClick={() => shiftCurrent(-1)}
      />
      <div
        className="aspect-video w-1/2 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ingredientsMap.get(ingredients[current])})`,
        }}
      />
      <button
        className="hover:bg-color-secondary aspect-square w-12 cursor-pointer bg-color-primary transition-all"
        type="button"
        onClick={() => shiftCurrent(1)}
      />
    </div>
  );
}
