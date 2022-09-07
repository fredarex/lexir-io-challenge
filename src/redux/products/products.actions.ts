import axios from "axios";
import { productsTypes } from "./products.types";

export type productsAction = {
    type: "FETCH_PRODUCTS_START"
}
export const fetchProductsStart = () => {
    return async(dispatch: (arg0: { type: string, payload:any} ) => void) => {
        try {
            dispatch({
                type:productsTypes.FETCH_PRODUCTS_START,
                payload:''
            });

        const {data}:any = await axios.get('http://localhost:3000/api/products');    
        if(data) {
        dispatch({
                type: productsTypes.SET_PRODUCTS_START,
                payload:data
            });      
        const eventSource = new EventSource('http://localhost:3000/api/products');
        eventSource.onmessage = function (event) {
            console.log(event.data);
        }

        }

        }catch(err) {
            console.log(err);
        }
    }
}

export  const fetchProductStart = () => {
    return async(dispatch: (arg0: { type: string, payload:any} ) => void) => {
        try {
            dispatch({
                type:productsTypes.FETCH_PRODUCT_START,
                payload:''
            });

        const {data}:any = await axios.get('http://localhost:3000/api/products/1');    
        if(data) {
            console.log(data)
        dispatch({
                type: productsTypes.SET_PRODUCT_START,
                payload:data.data
            });      
        const eventSource = new EventSource('http://localhost:3000/api/products/1');
        eventSource.onmessage = function (event) {
            console.log(event.data);
        }

        }

        }catch(err) {
            console.log(err);
        }
    }
}



