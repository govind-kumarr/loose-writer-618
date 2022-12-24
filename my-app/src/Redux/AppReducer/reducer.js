import * as types from "./actionType"

const initialState = {
    productsRecord: [],
    isLoading: false,
    isError: false
}

const reducer = (oldState = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case types.GET_PRODUCTS_RECORD_REQUEST:
            return {
                ...oldState,
                isLoading: true,
                isError:false
            };
        case types.GET_PRODUCTS_RECORD_SUCCESS:
            return {
                ...oldState,
                isLoading: false,
                productsRecord: payload,
                isError:false
            };
        case types.GET_PRODUCTS_RECORD_FAILURE:
            return {
                ...oldState,
                isLoading: false,
                isError: payload
            };
        default:
            return oldState
    }
};

export { reducer }