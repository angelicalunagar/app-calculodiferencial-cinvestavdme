import { useContext} from "react";
import { BoardContext } from "../contexts/BoardContext";
import {RectaAGContext} from '../contexts/RectaAGContext';

const RectaAG = () => {
  const { brd, ids, setIds } = useContext(BoardContext);
  const {dibujarRecta, setDibujarRecta} = useContext(RectaAGContext);

  const toggleRecta = () => {
    if (brd !== null) {
      if (dibujarRecta) {

        const rectaId = ids.idRectaAG; // Obtener el ID de la recta
        brd.removeObject(rectaId, false); // Eliminar el objeto del tablero usando su ID
     
        /* setIds({
          ...ids,
          idRectaAG: '',
        }); */

        setIds(prevIds=>({
          ...prevIds,
          idRectaAG:'',
        }));

        setDibujarRecta(false);

      } else {
        if (ids.idPuntoA && ids.idPuntoG) {
          // Crea una recta entre los puntos A y G
          const recta = brd.create("line", [ids.idPuntoA, ids.idPuntoG]);
          // Guarda el ID de la recta en la lista de IDs
          setIds(prevIds=>({
            ...prevIds,
            idRectaAG: recta.id
          }));


          setDibujarRecta(true);
        }
      }
    } else {
      console.log('El tablero brd es null')
    }
  };

  return (
    <div>
      <button onClick={toggleRecta}>
        {dibujarRecta? "Borrar Recta" : "Trazar Recta"}
      </button>
    </div>
  );
};

export default RectaAG;
