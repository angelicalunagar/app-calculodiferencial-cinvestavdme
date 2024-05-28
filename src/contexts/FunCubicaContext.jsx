import { createContext, useState } from "react";

export const FunCubicaContext = createContext();

export const FunCubicaContextProvider = ({ children }) => {
  const [a, setA] = useState(2);
  const [b, setB] = useState(5);
  const [c, setC] = useState(1);
  const [d, setD] = useState(-2);

  return (
    <FunCubicaContext.Provider
      value={{ a, setA, b, setB, c, setC, d, setD }}
    >
      {children}        
    </FunCubicaContext.Provider>
  );
};
