//GraficoArrastrePuntosFL.jsx
import React, { useContext, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

const GraficoArrastrePuntosFL = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      console.log(board);

      // Definir los puntos A, B, G
      const puntoA = board.create("point", [0, 30], {
        name: "A",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoB = board.create("point", [5, 72.5], {
        name: "B",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoC = board.create("point", [10, 115], {
        name: "C",
        size: 3,
        color: "orange",
        fixed: true,
      });

      const puntoD = board.create("point", [15, 157.5], {
        name: "D",
        size: 3,
        color: "orange",
        fixed: true,
      });

      const puntoE = board.create("point", [20, 200], {
        name: "E",
        size: 3,
        color: "orange",
        fixed: true,
      });

      const puntoF = board.create("point", [25, 242.5], {
        name: "F",
        size: 3,
        color: "orange",
        fixed: true,
      });

      const puntoG = board.create("point", [30, 285], {
        name: "G",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const segmento = board.create("segment", [puntoA, puntoG],{
        strokeWidth: 1 // Grosor mínimo del segmento
      }
      );

      setIds((prevIds) => ({
        ...prevIds,
        idPuntoA: puntoA.id,
        idPuntoB: puntoB.id,
        idPuntoC: puntoC.id,
        idPuntoD: puntoD.id,
        idPuntoE: puntoE.id,
        idPuntoF: puntoF.id,
        idPuntoG: puntoG.id,
        idSegAG: segmento.id,
      }));
    }

  }, [brd[boardId]]);

  return <div style={{ backgroundColor: "white" }}></div>;
};

export default GraficoArrastrePuntosFL;
