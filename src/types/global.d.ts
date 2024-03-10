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
  "bun-mid" |
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
