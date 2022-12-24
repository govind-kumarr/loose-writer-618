import * as types from "./actionType";
import axios from "axios"

const getProductsRequest = () => {
    return {
        type: types.GET_PRODUCTS_RECORD_REQUEST
    }
}


const getProducts = (params = {}) => (dispatch) => {
    dispatch(getProductsRequest());
    
    // https://mockzilla.com/app/6eb4fa5f-f256-4cc2-beb0-938a8215e3ee/136
    return axios.get("https://onemgfree-api-server.onrender.com/products",
        {
            params: {
                category: params.category,
                type: params.type,
                _page: params.page,
                _limit: params.limit,
                _sort: params.sort,
                _order: params.order
            }
        })
        .then(r => {
            console.log("data => ", r)
            dispatch({
                type: types.GET_PRODUCTS_RECORD_SUCCESS,
                payload: r
            })
        })
        .catch(e => {
            console.log("action.js error :-: ", e)
            dispatch({ type: types.GET_PRODUCTS_RECORD_FAILURE })
        })
}

export { getProducts }