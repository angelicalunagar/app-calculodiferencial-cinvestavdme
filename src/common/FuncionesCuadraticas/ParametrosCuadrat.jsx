//ParametrosCuadrat.jsx
import React, { useContext, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

const ParametrosCuadrat = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      const a = board.create(
        "slider",
        [
          [0, 4],
          [3, 4],
          [-2, 4, -1],
        ],
        { name: "a" }
      );

      const b = board.create(
        "slider",
        [
          [0, 4],
          [3, 4],
          [-2, 4, -150],
        ],
        { name: "b" }
      );


      const c = board.create(
        "slider",
        [
          [0, 4],
          [3, 4],
          [-2, 4, 0],
        ],
        { name: "c" }
      );

  
      const graph = board.createElement("functiongraph", [
        (x) => a * x ** 2 + b*x,
      ]);

      setIds((prevIds) => ({
        ...prevIds,
        idA: a.id,
        idB: b.id,
        idC: c.id,
        idGraph: graph.id,
      }));
    }

  }, [brd[boardId]]);

  return <div style={{ backgroundColor: "white" }}></div>;
};

export default ParametrosCuadrat;
