import { useContext } from "react";
import { BoardsContext } from "../contexts/BoardsContext";
import { SegmentContext } from "../contexts/SegmentContext";
import {Button} from "react-bootstrap";

const PuntoMovibleMX = ( {boardId} ) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { dibPuntoM, setDibPuntoM } = useContext(SegmentContext);

  const togglePuntoM = () => {
    if (brd[boardId]) {
      const board = brd[boardId];
      
      if (dibPuntoM) {
        const PuntoMId = ids.idPuntoM; // Obtener el ID del segmento desde la propiedad idSegBG
        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;

        board.removeObject(PuntoMId, false); // Eliminar el objeto del tablero usando su ID
        board.removeObject(perpendicularToXAxisId, false);
        board.removeObject(perpendicularToYAxisId, false);

        setIds((prevIds) => ({
          ...prevIds,
          idPuntoM: "",
          idPerpendicularToXAxis: "",
          idPerpendicularToYAxis: "",
        }));

        setDibPuntoM(false);
      } else {
        if (ids.idSegAG) {
          // Crea un segmento entre los puntos B y G
          const puntoM = board.create("glider", [12.3, 134.55, ids.idSegAG], {
            name: "M",
          });

          const perpendicularToXAxis = board.create(
            "segment",
            [
              [() => puntoM.X(), 0],
              [() => puntoM.X(), () => puntoM.Y()],
            ],
            { straightFirst: true, dash: 2, strokeColor: "#d3d3d3" }
          );

          const perpendicularToYAxis = board.create(
            "segment",
            [
              [0, () => puntoM.Y()],
              [() => puntoM.X(), () => puntoM.Y()],
            ],
            { straightFirst: true, dash: 2, strokeColor: "#d3d3d3" }
          );

          // Guarda el ID del segmento en la lista de IDs
          setIds((prevIds) => ({
            ...prevIds,
            idPuntoM: puntoM.id,
            idPerpendicularToXAxis: perpendicularToXAxis.id,
            idPerpendicularToYAxis: perpendicularToYAxis.id,
          }));

          setDibPuntoM(true);
        }
      }
    }
  };

  return (
    <div>
      <Button onClick={togglePuntoM}>
        {dibPuntoM? "Borrar Punto M" : "Dibujar Punto M"}
      </Button>
    </div>
  );
};

export default PuntoMovibleMX;
