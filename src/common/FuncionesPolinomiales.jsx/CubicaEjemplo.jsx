//GraficoArrastrePuntosFL.jsx
import React, { useContext, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

const CubicaEjemplo = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      console.log(board);

      const grafCubica = board.create(
        "functiongraph",
        [
          function (x) {
            return 2* x * x*x +5*x*x+x- 2;
          },
        ],
        {
          strokeWidth: 1, // Grosor mínimo del segmento
        }
      );

      setIds((prevIds) => ({
        ...prevIds,
        idGrafCubica: grafCubica.id,
      }));
    }
  }, [brd[boardId]]);

  return <div style={{ backgroundColor: "white" }}></div>;
};

export default CubicaEjemplo;
