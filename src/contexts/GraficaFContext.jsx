import { createContext, useState } from "react";

export const GraficaFContext = createContext();

export const GraficaFContextProvider = ({ children }) => {
  const [dibujarGrafica, setDibujarGrafica] = useState(false);
  const [dibPuntoM, setDibPuntoM] = useState(false);
  const [intervaloDib, setIntervaloDib] = useState(false);

  return (
    <GraficaFContext.Provider
      value={{
        dibujarGrafica,
        setDibujarGrafica,
        dibPuntoM,
        setDibPuntoM,
        intervaloDib,
        setIntervaloDib,
      }}
    >
      {children}
    </GraficaFContext.Provider>
  );
};
