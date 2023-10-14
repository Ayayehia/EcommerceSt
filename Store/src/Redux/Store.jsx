import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/FilterProductSlice"
import cartReducer from "./Slices/CartSlice"
import paymentReducer from "./Slices/CheckOutSlice"
import WishListReducer from "./Slices/WishListSlice"
export const Store = configureStore({
    reducer:{product:productReducer,
    cart:cartReducer,
    payment:paymentReducer,
wishlist:WishListReducer}
    
})