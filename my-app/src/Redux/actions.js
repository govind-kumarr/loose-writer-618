import {
  ADD_ADDRESS,
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
import axios from "axios";

export const get_data = (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("https://mock-test-8th-json-server.herokuapp.com/api/Cart")
    .then((payload) => {
      dispatch({ type: ADD_TO_CART, payload: payload.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR });
    });
};

export const Products_data_func = (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`https://mock-test-8th-json-server.herokuapp.com/api/Featured`)
    .then((response) => {
      dispatch({ type: GET_PRODUCTS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: ERROR });
    });
};

export const add_to_cart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const login_func = (payload) => {
  localStorage.setItem("token", payload);
  return { type: LOGED_IN, payload };
};

export const logout_func = () => {
  localStorage.removeItem("token");
  return { type: LOGED_OUT };
};

export const loading = () => {
  return { type: LOADING };
};

export const error = () => {
  return { type: ERROR };
};

export const filter_data = (dispatch, filter) => {
  dispatch({ type: LOADING });
  if (filter === "lth") {
    dispatch({ type: HIGH_TO_LOW });
  }
  if (filter === "htl") {
    dispatch({ type: LOW_TO_HIGH });
  }

  if (filter === "relevance") {
    dispatch({ type: RELEVANCE });
  }

  if (filter === "rating") {
    dispatch({ type: RATING });
  }

  if (filter === "review") {
    dispatch({ type: REVIEW });
  }
};

export const Login_func = (dispatch) => {
  console.log("dispatch:", dispatch);
  dispatch({ type: LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then((response) => {
      console.log("response:", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGED_IN, payload: response.data.token });
    })
    .catch((error) => {
      dispatch({ type: ERROR });
    });
};

export const Logout = () => {
  localStorage.removeItem("token");
  return { type: LOGED_OUT };
};
