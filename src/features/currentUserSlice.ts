import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TCurrentUser = {
  username: string, 
  id?: number, 
  password: string,
}

type TState = {
  currentUser: TCurrentUser
}

const initialState: TCurrentUser = {
  username: "initial",
  password: "initial",
  id: -1,
}

//todo delete initial from initState

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<TCurrentUser>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.id = Date.now();
    },
    clearCurrentUser: (state) => {
      state.username = "";
      state.password = "";
      state.id = -1;
    }

  }
})

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;

export const selectCurrentUser = (state: TState) => state.currentUser;

export default currentUserSlice.reducer;