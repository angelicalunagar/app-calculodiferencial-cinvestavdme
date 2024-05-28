import { useContext, useState } from "react";
import { BoardsContext } from "../contexts/BoardsContext";
import { SegmentContext } from "../contexts/SegmentContext";
import {Button} from "react-bootstrap";

const SegmentAGX = ( {boardId} ) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { segDibujado, setSegDibujado, setDibPuntoM } = useContext(SegmentContext);

  const toggleSegmento = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (segDibujado) {

        const segmentId = ids.idSegAG; 
        board.removeObject(segmentId, false);

        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;

        if (perpendicularToXAxisId) board.removeObject(perpendicularToXAxisId, false);
        if (perpendicularToYAxisId) board.removeObject(perpendicularToYAxisId, false);
      
        setIds((prevIds) => ({
          ...prevIds,
          idSegAG: '',
          idPerpendicularToXAxis: '',
          idPerpendicularToYAxis: '',
        }));

        setSegDibujado(false);
        setDibPuntoM(false);

      } else {
        if (ids.idPuntoA && ids.idPuntoG) {
      
          const segmento = board.create("segment", [ids.idPuntoA, ids.idPuntoG]);
 
          setIds((prevIds) => ({
            ...prevIds,
            idSegAG: segmento.id ,
          }));

          setSegDibujado(true);
        }
      }
    }
  };

  return (
    <div>
      <Button onClick={toggleSegmento}>
      {segDibujado? "Borrar Segmento" : "Trazar Segmento"}
      </Button>
    </div>
  );
};

export default SegmentAGX;
