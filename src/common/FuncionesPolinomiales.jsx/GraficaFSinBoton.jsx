import { useContext, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

const GraficaFSinBoton = ({ boardId, funcionGrafica }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd && brd[boardId]) {
      const board = brd[boardId];

      if (ids.idGraficaF) {
        const existingGraph = ids.idGraficaF;
        board.removeObject(existingGraph);

        setIds((prevIds) => ({
          ...prevIds,
          idGraficaF: "",
        }));
      }

      const grafica = board.create("functiongraph", [funcionGrafica]);

      // Guarda el ID de la recta en la lista de IDs
      setIds((prevIds) => ({
        ...prevIds,
        idGraficaF: grafica.id,
        funcionGrafica: funcionGrafica,
      }));
    } else {
      console.log("El tablero brd es null");
    }
  }, [brd, boardId, funcionGrafica]);

  return null; // Devuelve null en lugar de un fragmento vacío
};

export default GraficaFSinBoton;
