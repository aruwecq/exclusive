import { configureStore } from "@reduxjs/toolkit";
import productReduser from "./category/CategotyProduct";
import  categoryReduser  from "./category/CategorySlice";
import WishReduser from "./product/WishListSlice";
import DeleteReduser from "./delete/DeleteSlice"
export const myStore = configureStore({
  reducer: {
    category: categoryReduser,
    product: productReduser,
    favorite : WishReduser,
    delete : DeleteReduser,
  },
});
