import { createSlice } from "@reduxjs/toolkit";

const WishSlice = createSlice({
  name: "wishProducts",
  initialState: {
    items: [],
  },
  reducers: {
    addWish: (state, action) => {
      state.items.push(action.payload);
    },
    removeWish :(state, action)=>{
      state.items= state.items.filter((x)=> x.id !== action.payload)
    }
  },
});
export const { addWish, removeWish} = WishSlice.actions;
export default WishSlice.reducer;
