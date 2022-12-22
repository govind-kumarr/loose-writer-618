import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_func, logout_func } from "./actions";

export const AuthContext = createContext();

export const Login_Auth = ({ children }) => {
  const { isAuth } = useSelector((state) => {
    return state;
  });

  const [isvisible, setvisible] = useState(false);
  const [show, setShow] = useState(true);
  const [Otpvisible, setOtpVisible] = useState(false);

  const dispatch = useDispatch();

  const toggleAuth = (s) => {
    if (s) {
      dispatch(login_func());
    } else {
      dispatch(logout_func());
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        toggleAuth,
        isvisible,
        setvisible,
        show,
        setShow,
        Otpvisible,
        setOtpVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Login_Auth;
