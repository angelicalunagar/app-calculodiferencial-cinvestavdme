import { createContext, useState } from "react";

export const BoardsContext = createContext();

export const BoardsContextProvider = ({ children }) => {
  const [brd, setBrd] = useState({});
  const [ids, setIds] = useState({});

  const addBoard = (boardId, board) => {
    setBrd(prevBrd => ({
      ...prevBrd,
      [boardId]: board
    }));
  };

  return (
    <BoardsContext.Provider value={{ brd, addBoard, ids, setIds }}>
      {children}
    </BoardsContext.Provider>
  );
};
