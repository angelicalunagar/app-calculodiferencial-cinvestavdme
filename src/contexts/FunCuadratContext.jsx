import { createContext, useState } from "react";

export const FunCuadratContext = createContext();

export const FunCuadratContextProvider = ({ children }) => {
  const [a, setA] = useState(-1);
  const [b, setB] = useState(150);
  const [c, setC] = useState(0);


  return (
    <FunCuadratContext.Provider
      value={{ a, setA, b, setB, c, setC }}
    >
      {children}
    </FunCuadratContext.Provider>
  );
};
