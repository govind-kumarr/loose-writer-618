import React from "react";
import { createContext, useState } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [id, setId] = useState(0);
  const handle = (x) => {
    setId(x);
  };
  return (
    <AddressContext.Provider value={{ id, setId, handle }}>
      {children}
    </AddressContext.Provider>
  );
};
