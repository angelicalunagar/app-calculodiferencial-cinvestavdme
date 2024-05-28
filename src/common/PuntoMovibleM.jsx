import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import { SegmentContext } from "../contexts/SegmentContext";

const PuntoMovibleM = () => {
  const { brd, ids, setIds } = useContext(BoardContext);
  const { dibPuntoM, setDibPuntoM } = useContext(SegmentContext);

  const togglePuntoM = () => {
    if (brd !== null) {
      if (dibPuntoM) {
        const PuntoMId = ids.idPuntoM; // Obtener el ID del segmento desde la propiedad idSegBG
        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;

        brd.removeObject(PuntoMId, false); // Eliminar el objeto del tablero usando su ID
        brd.removeObject(perpendicularToXAxisId, false);
        brd.removeObject(perpendicularToYAxisId, false);

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
          const puntoM = brd.create("glider", [12, 132, ids.idSegAG], {
            name: "M",
          });

          const perpendicularToXAxis = brd.create(
            "segment",
            [
              [() => puntoM.X(), 0],
              [() => puntoM.X(), () => puntoM.Y()],
            ],
            { straightFirst: true, dash: 2, strokeColor: "#d3d3d3" }
          );

          const perpendicularToYAxis = brd.create(
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
      <button onClick={togglePuntoM}>
        {dibPuntoM ? "Borrar Punto M" : "Dibujar Punto M"}
      </button>
    </div>
  );
};

export default PuntoMovibleM;
