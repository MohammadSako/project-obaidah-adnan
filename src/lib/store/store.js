import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: { cart: productSlice.reducer },
});
export default store;
