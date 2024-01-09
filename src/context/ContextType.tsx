import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface ContextType {
  temp: boolean;
  setTemp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextValue = {
  temp: false,
  setTemp: () => {},
};
