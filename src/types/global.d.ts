  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import React from "react"

declare module "react" {
  interface CSSProperties {
    "--image-url"?: string | number;
  }
}

type TUser = {
  username: string, 
  id?: number, 
  password: string,
}

type TOrderItem = {
  name: string,
  amount: number
}

type TOrder = {
  clientId: number,
  items: TOrderItem[]
}

type TBurger = {
  top: TIngredient,
  ingredients: TIngredients | TIngredient,
  bot: TIngredient,
};

type TIngredients = TIngredient[];

type TIngredient =
  "bun-top" |
  "bun-bot" |
  "patty-beef"|
  "patty-chicken"|
  "cheese" |
  "egg" |
  "bacon" |
  "onions" |
  "tomatoes" |
  "pickles" |
  "lettuce" |
  "jalapenos" |
  "ketchup" |
  "mustard" |
  "mayo"
