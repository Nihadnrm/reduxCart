import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishlistSlice"
import cartSlice from "./slices/cartSlice"

const store=configureStore({
    reducer:{
        productSlice,
        wishlistSlice,
        cartSlice
    }
})

export default store