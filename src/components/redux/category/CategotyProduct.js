
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../axios/ApiClient"; 

export const getProsuct = createAsyncThunk(
  "product/fetch",
  async (category, { rejectWithValue }) => {
    try {
      const res = await apiClient.get(`/products/category/${category}`);
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.message || "not found");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
    category:"laptops"
  },
  reducers: {
    setCategoty:(state, action)=>{
        state.category=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProsuct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProsuct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProsuct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {setCategoty} = productSlice.actions
export default productSlice.reducer;
