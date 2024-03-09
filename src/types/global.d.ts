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