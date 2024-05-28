import { useContext} from "react";
import { BoardContext } from "../contexts/BoardContext";
import { SegmentContext } from "../contexts/SegmentContext";

const SegmentAG = () => {
  const { brd, ids, setIds } = useContext(BoardContext);
  const {segDibujado, setSegDibujado, setDibPuntoM} = useContext(SegmentContext);

  const toggleSegmento = () => {
    if (brd !== null) {
      if (segDibujado) {

        const segmentId = ids.idSegAG; // Obtener el ID del segmento desde la propiedad idSegBG
        brd.removeObject(segmentId, false); // Eliminar el objeto del tablero usando su ID
     
        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;

        if (perpendicularToXAxisId) brd.removeObject(perpendicularToXAxisId, false);
        if (perpendicularToYAxisId) brd.removeObject(perpendicularToYAxisId, false);

        setIds({
          ...ids,
          idSegAG: '',
          idPerpendicularToXAxis: '',
          idPerpendicularToYAxis: '',
        });

        setSegDibujado(false);
        setDibPuntoM(false);

      } else {
        
        if (ids.idPuntoA && ids.idPuntoG) {
          // Crea un segmento entre los puntos B y G
          const segmento = brd.create("segment", [ids.idPuntoA, ids.idPuntoG]);
          // Guarda el ID del segmento en la lista de IDs
          setIds(prevIds=>({
            ...prevIds,
            idSegAG: segmento.id
          }));


          setSegDibujado(true);
        }
      }
    }
  };

  return (
    <div>
      <button onClick={toggleSegmento}>
        {segDibujado? "Borrar Segmento" : "Trazar Segmento"}
      </button>
    </div>
  );
};

export default SegmentAG;
