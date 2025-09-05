import { createSlice } from "@reduxjs/toolkit";

const DeleteSlice = createSlice({
  name: "DeleteProduct",
  initialState: {
    items: [],
  },
  reducers: {
    addDelee: (state, action) => {
      state.items.push(action.payload);
    },
    removeDelee :(state, action)=>{
      state.items= state.items.filter((x)=> x.id !== action.payload)
    }
  },
});
export const { addDelee, removeDelee} = DeleteSlice.actions;
export default DeleteSlice.reducer;
