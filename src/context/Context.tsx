import React, { ReactNode, createContext, useState } from "react";
import * as Utils from "../utils";
// import * as Type from "../models/Types";
import * as ContextType from "./ContextType";

export const Context = createContext<ContextType.ContextType>(
  ContextType.ContextValue
);

export const ContextProvider: React.FC<ContextType.ProviderProps> = ({
  children,
}) => {
  const [temp, setTemp] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        temp,
        setTemp,
      }}
    >
      {children}
    </Context.Provider>
  );
};
