import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Redux/cartSlice";
import categorySlice from "../Redux/categorySlice";
import searchSlice from '../Redux/searchSlice'
const store = configureStore({
    reducer:{
      cart : cartSlice,
      category: categorySlice,
      search : searchSlice,
    }
})

export default store