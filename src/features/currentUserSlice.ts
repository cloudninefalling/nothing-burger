import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TState = {
  currentUser: TUser
}

const initialState: TUser = {
  username: "",
  password: "",
  id: -1,
}

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<TUser>) => {
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