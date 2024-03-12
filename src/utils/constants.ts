import bunTop from "../assets/burger-parts/burger-bun-top.png";
import lettuce from "../assets/burger-parts/burger-lettuce.png";
import bunBot from "../assets/burger-parts/burger-bun-bot.png"
import bacon from "../assets/burger-parts/burger-bacon.png";
import cheese from "../assets/burger-parts/burger-cheese.png";
import egg from "../assets/burger-parts/burger-egg.png";
import jalapenos from "../assets/burger-parts/burger-jalapenos.png";
import onions from "../assets/burger-parts/burger-onions.png";
import pattyBeef from "../assets/burger-parts/burger-patty-beef.png";
import pattyChicken from "../assets/burger-parts/burger-patty-chicken.png";
import pickles from "../assets/burger-parts/burger-pickles.png";
import tomatoes from "../assets/burger-parts/burger-tomatoes.png";
import ketchup from "../assets/burger-parts/sauce-ketchup.png";
import mayo from "../assets/burger-parts/sauce-mayo.png";
import mustard from "../assets/burger-parts/sauce-mustard.png";
import { TIngredient, TIngredients } from "../types/global";

const ingredientsMap = new Map<TIngredient, string>([
  ["bun-top", bunTop], 
  ["bun-bot", bunBot],
  ["patty-beef", pattyBeef],  
  ["patty-chicken", pattyChicken],  
  ["bacon", bacon],
  ["lettuce", lettuce],
  ["jalapenos", jalapenos],
  ["onions", onions],
  ["pickles", pickles],
  ["tomatoes", tomatoes],
  ["cheese", cheese],
  ["egg", egg],
  ["ketchup", ketchup],
  ["mayo", mayo],
  ["mustard", mustard]
]);

const sauces: TIngredients = ["ketchup", "mayo", "mustard"];
const veggies: TIngredients = ["lettuce", "jalapenos", "onions", "pickles", "tomatoes"];
const eggsAndDairy: TIngredients = ["egg", "cheese"];
const meat: TIngredients = ["patty-beef", "patty-chicken", "bacon"]

  export {ingredientsMap, sauces, veggies, eggsAndDairy, meat};
