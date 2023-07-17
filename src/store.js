import { configureStore } from "@reduxjs/toolkit";
import cartReducer from ".//feature/cart/cartSlice";
import modelReducer from "./feature/model/modelSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modelReducer,
    }
});