import * as types from "./actionType";
import axios from "axios"

const getProductsRequest = () =>{
    return{
        type: types.GET_PRODUCTS_RECORD_REQUEST
    }
}


const getProducts = (queryParams) => (dispatch) => {
    dispatch(getProductsRequest());

    return axios.get("http://localhost:8080/products", queryParams)
    .then(r=> {
        dispatch({
            type:types.GET_PRODUCTS_RECORD_SUCCESS,
            payload:r.data
        })
    })
    .catch(e=>{
        dispatch({type:types.GET_PRODUCTS_RECORD_FAILURE})
    })
}

export {getProducts}