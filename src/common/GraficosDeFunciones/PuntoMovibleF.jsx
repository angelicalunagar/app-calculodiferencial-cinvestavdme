import { useContext } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { GraficaFContext } from '../../contexts/GraficaFContext';
import {Button} from "react-bootstrap";

const PuntoMovibleF = ( {boardId, initialCoordinates } ) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { dibPuntoM, setDibPuntoM } = useContext(GraficaFContext);
  const [cx, cy] = initialCoordinates;

  const togglePuntoM = () => {
    if (brd[boardId]) {
      const board = brd[boardId];
      
      if (dibPuntoM) {
        const PuntoMId = ids.idPuntoM; // Obtener el ID del segmento desde la propiedad idSegBG
        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;
        const segmentXAxisId = ids.idSegmentXAxis;
        const segmentYAxisId = ids.idSegmentYAxis;

        board.removeObject(PuntoMId, false); // Eliminar el objeto del tablero usando su ID
        board.removeObject(perpendicularToXAxisId, false);
        board.removeObject(perpendicularToYAxisId, false);
        board.removeObject(segmentXAxisId, false);
        board.removeObject(segmentYAxisId, false);

        setIds((prevIds) => ({
          ...prevIds,
          idPuntoM: "",
          idPerpendicularToXAxis: "",
          idPerpendicularToYAxis: "",
          idSegmentXAxis: "",
          idSegmentYAxis: "",
        }));

        setDibPuntoM(false);
      } else {
        if (ids.idGraficaF) {
          // Crea un segmento entre los puntos B y G
          const puntoM = board.create("glider", [cx, cy, ids.idGraficaF], {
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

          const segmentXAxis = board.create(
            "segment",
            [
              [0, 0],
              [() => puntoM.X(), 0],
            ],
            { straightFirst: true, dash: 0, strokeColor: '#FF821C' }
          );

          const segmentYAxis = board.create(
            "segment",
            [
              [0, 0],
              [0, () => puntoM.Y()],
            ],
            { straightFirst: true, dash: 0, strokeColor: '#FF821C' }
          );

          // Guarda el ID del segmento en la lista de IDs
          setIds((prevIds) => ({
            ...prevIds,
            idPuntoM: puntoM.id,
            idPerpendicularToXAxis: perpendicularToXAxis.id,
            idPerpendicularToYAxis: perpendicularToYAxis.id,
            idSegmentXAxis: segmentXAxis.id,
            idSegmentYAxis: segmentYAxis.id,
          }));

          setDibPuntoM(true);
        }
      }
    }
  };

  return (
    <>
      <Button onClick={togglePuntoM}>
        {dibPuntoM? "Borrar Punto M" : "Dibujar Punto M"}
      </Button>
    </>
  );
};

export default PuntoMovibleF;
