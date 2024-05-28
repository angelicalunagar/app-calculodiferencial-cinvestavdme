import { createContext, useState } from "react";

export const BoardZoomContext = createContext();

export const BoardZoomContextProvider = ({ children }) => {
  const [brdZ, setBrdZ] = useState(null);
  const [idsZ, setIdsZ] = useState({});

  return (
    <BoardZoomContext.Provider value={{ brdZ, setBrdZ, idsZ, setIdsZ}}>
      {children}
    </BoardZoomContext.Provider>
  );
};


