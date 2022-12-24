import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import AuthContextProvider from "./Redux/Login_Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
         <ChakraProvider > 
        <BrowserRouter>
          <App />
        </BrowserRouter>
         </ChakraProvider> 
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
