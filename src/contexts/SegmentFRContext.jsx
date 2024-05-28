import { createContext, useState } from "react";

export const SegmentFRContext = createContext();

export const SegmentFRContextProvider = ({ children }) => {
  const [segDibujado, setSegDibujado] = useState(false);
  const [dibPuntoM, setDibPuntoM] = useState(false);

  return (
    <SegmentFRContext.Provider value={{ segDibujado, setSegDibujado, dibPuntoM, setDibPuntoM }}>
      {children}
    </SegmentFRContext.Provider>
  );
};


