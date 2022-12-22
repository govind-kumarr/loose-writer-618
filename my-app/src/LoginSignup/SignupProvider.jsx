import React from "react";
import { createContext, useState } from "react";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [Clicked, setClicked] = useState(false);
  const toggle = (t) => {
    setClicked(t ? false : true);
  };
  return (
    <SignupContext.Provider value={{ Clicked, setClicked, toggle }}>
      {children}
    </SignupContext.Provider>
  );
};
