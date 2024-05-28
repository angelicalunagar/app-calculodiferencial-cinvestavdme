import { createContext, useState } from "react";

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {
  const [brd, setBrd] = useState(null);
  const [ids, setIds] = useState({
    
  });

  return (
    <BoardContext.Provider value={{ brd, setBrd, ids, setIds }}>
      {children}
    </BoardContext.Provider>
  );
};


