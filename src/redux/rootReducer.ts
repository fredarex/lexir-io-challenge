import { combineReducers } from "redux";
import productsReducer from "./products/products.reducer";

export const reducers = combineReducers({
    products: productsReducer
});

