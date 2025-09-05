import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../axios/ApiClient";

export const getCategory = createAsyncThunk(
  "category/fech",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await apiClient.get(`/products/category-list`);
      console.log(res);
      
      return res.data;
    } catch (error) {
      return rejectedWithValue(error.mesaage || "not found");
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default categorySlice.reducer;
