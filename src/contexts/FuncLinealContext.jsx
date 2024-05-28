import { createContext, useState } from "react";

export const FuncLinealContext = createContext();

export const FuncLinealContextProvider = ({ children }) => {
  const [intercept, setIntercept] = useState(30);
  const [slope, setSlope] = useState(8.5);

  return (
    <FuncLinealContext.Provider
      value={{ intercept, setIntercept, slope, setSlope }}
    >
      {children}
    </FuncLinealContext.Provider>
  );
};
