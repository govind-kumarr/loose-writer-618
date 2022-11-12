import * as types from "./actionTypes";
import axios from "axios";

//Add Request

const addProductRequest=()=>{
    return{
        type:types.ADD_PRODUCT_REQUEST
    }
}
const addProductSuccess=()=>{
    return{
        type:types.ADD_PRODUCT_SUCCESS,
    }
}

const addProductFailure=()=>{
    return{
        type:types.ADD_PRODUCT_FAILURE
    }
}
//<---addProduct--->
const addProduct=(addpayload)=>(dispatch)=>{
    dispatch(addProductRequest())
    return axios({
        method:"post",
        url:`/products`,
        baseURL:`https://onemgfree-api-server.onrender.com`,
        data:addpayload
    }).then(r=>{
        //console.log(r.data,"in action add");
        return dispatch(addProductSuccess())
    }).catch(e=>{
        console.log(e,"error");
        dispatch(addProductFailure())
    })
}

// GET Request

const getProductsRequest=()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST
    }
}

const getProductsSuccess=(getpayload)=>{
    return{
        type:types.GET_PRODUCTS_SUCCESS,
        getpayload
    }
}

const getProductsFailure=()=>{
    return{
        type:types.GET_PRODUCTS_FAILURE
    }
}
//<---GetProducts--->
const getProducts=(dispatch)=>{
    dispatch(getProductsRequest());
    return axios.get(`https://onemgfree-api-server.onrender.com/products`)
    .then(r=>{
        console.log(r.data,"getProducts in action")
        return dispatch(getProductsSuccess(r.data))
    })
    .catch(e=>{
        dispatch(getProductsFailure())
    })
}

// Delete Request 

const deleteProductRequest=()=>{
    return{
        type:types.DELETE_PRODUCT_REQUEST
    }
}

const deleteProductSuccess=()=>{
    return{
        type:types.DELETE_PRODUCT_SUCCESS,
    }
}

const deleteProductFailure=()=>{
    return{
        type:types.GET_PRODUCTS_FAILURE
    }
}

//<---Delete prod---->

const deleteproduct=(id)=>(dispatch)=>{
    deleteProductRequest();
    return axios.delete(`https://onemgfree-api-server.onrender.com/products/${id}`)
    .then((r)=>{
        console.log(r.data,"After delete in action");
        return deleteProductSuccess();
    })
    .catch(e=>{
        deleteProductFailure();
    })
    
}

export {
    addProduct,addProductRequest,addProductSuccess,addProductFailure,
    getProducts,getProductsRequest,getProductsSuccess,getProductsFailure,
    deleteproduct,deleteProductRequest,deleteProductSuccess,deleteProductFailure,
}