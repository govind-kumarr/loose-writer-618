import * as types from "./actionType";
import axios from "axios"

const getProductsRequest = () =>{
    return{
        type: types.GET_PRODUCTS_RECORD_REQUEST
    }
}


const getProducts = (params ={}) => (dispatch) => {
    dispatch(getProductsRequest());

    return axios.get("https://onemgfree-api-server.onrender.com/products", 
    {params: {
        category:params.category,
        type: params.type,
        _page: params.page,
        _limit: params.limit,
        _sort: params.sort,
        _order: params.order
      }})
    .then(r=> {
        console.log(r)
        dispatch({
            type:types.GET_PRODUCTS_RECORD_SUCCESS,
            payload:r
        })
    })
    .catch(e=>{
        dispatch({type:types.GET_PRODUCTS_RECORD_FAILURE})
    })
}

export {getProducts}