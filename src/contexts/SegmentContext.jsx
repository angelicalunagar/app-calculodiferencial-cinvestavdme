import { createContext, useState } from "react";

export const SegmentContext = createContext();

export const SegmentContextProvider = ({ children }) => {
  const [segDibujado, setSegDibujado] = useState(false);
  const [dibPuntoM, setDibPuntoM] = useState(false);

  return (
    <SegmentContext.Provider value={{ segDibujado, setSegDibujado, dibPuntoM, setDibPuntoM }}>
      {children}
    </SegmentContext.Provider>
  );
};


