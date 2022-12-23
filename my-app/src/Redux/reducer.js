import {
  ADD_TO_CART,
  ERROR,
  GET_PRODUCTS,
  HIGH_TO_LOW,
  LOADING,
  LOGED_IN,
  LOGED_OUT,
  LOW_TO_HIGH,
  RATING,
  RELEVANCE,
  REVIEW,
} from "./aciton_type";

import data from "../db.json"
console.log('data:', data)


let initState = {
  isLoading: false,
  isError: false,
  cartData: [],
  Addresses: [],
  Product_data: [],
  Fitered_data: [],
  token: localStorage.getItem("token") || "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case LOGED_IN: {
      return { ...state, isLoading: false, token: payload };
    }
    case LOGED_OUT: {
      return {
        ...state,
        isLoading: false,
        token: "",
      };
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        Product_data: payload,
        Fitered_data: payload,
      };
    }
    case HIGH_TO_LOW: {
      return {
        ...state,
        isLoading: false,
        Fitered_data: state.Product_data.filter((el) => el).sort(
          (a, b) => a.price - b.price
        ),
      };
    }
    case LOW_TO_HIGH: {
      return {
        ...state,
        isLoading: false,
        Fitered_data: state.Product_data.filter((el) => el).sort(
          (a, b) => b.price - a.price
        ),
      };
    }
    case RELEVANCE: {
      return {
        ...state,
        isLoading: false,
        Fitered_data: [...state.Product_data],
      };
    }
    case RATING: {
      return {
        ...state,
        isLoading: false,
        Fitered_data: state.Product_data.filter((el) => el).sort(
          (a, b) => b.star - a.star
        ),
      };
    }
    case REVIEW: {
      return {
        ...state,
        isLoading: false,
        Fitered_data: state.Product_data.filter((el) => el).sort(
          (a, b) => b.review - a.review
        ),
      };
    }
    default: {
      return state;
    }
  }
};
