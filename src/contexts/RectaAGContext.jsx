import { createContext, useState } from "react";

export const RectaAGContext = createContext();

export const RectaAGContextProvider = ({ children }) => {
  const [dibujarRecta, setDibujarRecta] = useState(false);
  
  return (
    <RectaAGContext.Provider value={{ dibujarRecta, setDibujarRecta }}>
      {children}
    </RectaAGContext.Provider>
  );
};