import * as types from "./actionTypes"
const initData={
    isLoading:false,
    isError:false,
    products:[]
}

const reducer=(oldState=initData,action)=>{
    console.log(action,"action")
    const {type,getpayload,postpayload,simplepayload}=action;
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
            console.log("request,")
            return{
                ...oldState,isLoading:true,isError:false
            }
        case types.GET_PRODUCTS_SUCCESS:
            console.log("succcess");
            console.log(getpayload,"after success in reducer")
            return{
                ...oldState,products:getpayload.reverse(),isLoading:false,isError:false
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

        //Edit or patch Request

        case types.EDIT_PRODUCT_REQUEST:
            return{
                ...oldState,isLoading:true
            }
        
        case types.EDIT_PRODUCT_SUCCESS:
            return{
                ...oldState,isLoading:false
            }
        
        case types.EDIT_PRODUCT_FAILURE:
            return{
                ...oldState,isLoading:false,isError:true
            }

        case "postRequest":
            return{
                ...oldState,products:postpayload
            }
        case "simpleGETProduct":
            return{
                ...oldState,products:simplepayload
            }
        default:
            return oldState;
    }
}
export {reducer};