
// productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk action for fetching products
export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: [],
  filteredProducts: [],
  filterId:[],
};
// JSON.parse(sessionStorage.getItem("savedFilteredProducts")) || []
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterByCategory(state, action) {
      try {
        const filtered =  state.data.filter(
          (product) => product.category === action.payload
        );
        
        
      state.filteredProducts=[... filtered];
       
      } catch (err) {
        return err;
      }
    },
    filterById(state,action){
  const filterById = state.data.filter((prod)=>prod.id==action.payload)
return state.filterId=[...filterById]
    }
  },
  extraReducers: (builder) => {
    // Handle the fetchProducts async thunk results
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { filterByCategory,filterById } = productSlice.actions;
export default productSlice.reducer;
