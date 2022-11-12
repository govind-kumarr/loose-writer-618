import * as types from "./actionTypes"
const initData={
    isLoading:false,
    isError:false,
    products:[]
}

const reducer=(oldState=initData,action)=>{
    //console.log(action,"action")
    const {type,getpayload}=action;
    //console.log(payload,"pyaload in reducer")
    switch(type){

        case types.ADD_PRODUCT_REQUEST:
            return {
                ...oldState,isLoading:true
            }
        case types.ADD_PRODUCT_SUCCESS:
            return{
                ...oldState,isLoading:false
            }
        case types.ADD_PRODUCT_FAILURE:
            return{
                ...oldState,isError:true
            }
        // GET Request

        case types.GET_PRODUCTS_REQUEST:
            return{
                ...oldState,isLoading:true,isError:false
            }
        case types.GET_PRODUCTS_SUCCESS:
            return{
                ...oldState,products:getpayload,isLoading:false,isError:false
            }
        case types.GET_PRODUCTS_FAILURE:
            return{
                ...oldState,isError:true,isLoading:false,products:[]
            }
        
        // Delete Request

        case types.DELETE_PRODUCT_REQUEST:
            return{
                ...oldState,isLoading:true
            }
        case types.DELETE_PRODUCT_SUCCESS:
            return{
                ...oldState,isLoading:false
            }
        
        case types.DELETE_PRODUCT_FAILURE:
            return{
                ...oldState,isLoading:false,isError:true
            }

        default:
            return oldState;
    }
}
export {reducer};