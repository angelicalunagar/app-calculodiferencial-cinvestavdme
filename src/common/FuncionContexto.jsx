// FuncionContexto.js
import React, { createContext, useState } from 'react';

export const FuncionContext = createContext();

const FuncionContextProvider = ({ children }) => {
  const [selectedFunc, setSelectedFunc] = useState("a*x");
  return (
    <FuncionContext.Provider value={{ selectedFunc, setSelectedFunc}}>
      {children}
    </FuncionContext.Provider>
  );
};

export default FuncionContextProvider;
