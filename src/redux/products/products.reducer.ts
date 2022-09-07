import { productsTypes } from "./products.types";

export interface productsState {
    products: [],
    product:{}
  }

const initialState:productsState = {
    products:[],
    product:[]
}

function productsReducer (state = initialState, action:any) {
    switch (action.type) {
        case productsTypes.SET_PRODUCTS_START:
            return {
                ...state,
                products:action.payload
            }
        case productsTypes.SET_PRODUCT_START:
            return {
                ...state,
                product:action.payload
            }
        default:
            return state;
    }
}

export default productsReducer