import { createContext, useState } from "react";

export const Fun4toGradoContext = createContext();

export const Fun4toGradoContextProvider = ({ children }) => {
  const [a, setA] = useState(2);
  const [b, setB] = useState(5);
  const [c, setC] = useState(1);
  const [d, setD] = useState(-2);
  const [e, setE] = useState(-2);

  return (
    <Fun4toGradoContext.Provider
      value={{ a, setA, b, setB, c, setC, d, setD, e, setE }}
    >
      {children}        
    </Fun4toGradoContext.Provider>
  );
};
