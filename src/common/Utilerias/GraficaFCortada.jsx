import { useContext, useState } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { GraficaFContext } from "../../contexts/GraficaFContext";
import { Button } from "react-bootstrap";

const GraficaFCortada = ({ boardId, funcionGrafica, intervaloX }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { dibujarGrafica, setDibujarGrafica, setDibPuntoM, setIntervaloDib } =
    useContext(GraficaFContext);
  const [xi, xf] = intervaloX;

  const toggleGraficaF = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (dibujarGrafica) {
        //Borra grafica
        const graficaId = ids.idGraficaF; // Obtener el ID de la recta

        //Borra imagen de intervalor
        const GliderAId = ids.idGliderA; // Obtener el ID del segmento desde la propiedad idSegBG
        const GliderBId = ids.idGliderB;
        const SegmentPerpAToXAxisId = ids.idSegmentPerpAToXAxis;
        const SegmentPerpAToYAxisId = ids.idSegmentPerpAToYAxis;
        const SegmentPerpBToXAxisId = ids.idSegmentPerpBToXAxis;
        const SegmentPerpBToYAxisId = ids.idSegmentPerpBToYAxis;
        const CurveABXId = ids.idCurveABX;
        const CurveABYId = ids.idCurveABY;
        const CurveFId = ids.idCurveF;

        board.removeObject(graficaId, false); // Eliminar el objeto del tablero usando su ID
        board.removeObject(GliderAId, false); // Eliminar el objeto del tablero usando su ID
        board.removeObject(GliderBId, false);
        board.removeObject(SegmentPerpAToXAxisId, false);
        board.removeObject(SegmentPerpBToXAxisId, false);
        board.removeObject(SegmentPerpAToYAxisId, false);
        board.removeObject(SegmentPerpBToYAxisId, false);
        board.removeObject(CurveABXId, false);
        board.removeObject(CurveABYId, false);
        board.removeObject(CurveFId, false);

        //Borra todo lo de puntoM
        const perpendicularToXAxisId = ids.idPerpendicularToXAxis;
        const perpendicularToYAxisId = ids.idPerpendicularToYAxis;
        const segmentXAxisId = ids.idSegmentXAxis;
        const segmentYAxisId = ids.idSegmentYAxis;

        if (perpendicularToXAxisId)
          board.removeObject(perpendicularToXAxisId, false);
        if (perpendicularToYAxisId)
          board.removeObject(perpendicularToYAxisId, false);
        if (segmentXAxisId) board.removeObject(segmentXAxisId, false);
        if (segmentYAxisId) board.removeObject(segmentYAxisId, false);

        setIds((prevIds) => ({
          ...prevIds,
          idGraficaF: "",
          idPerpendicularToXAxis: "",
          idPerpendicularToYAxis: "",
          idSegmentXAxis: "",
          idSegmentYAxis: "",
          idGliderA: "", // Obtener el ID del segmento desde la propiedad idSegBG
          idGliderB: "",
          idCurveF: "",
          idSegmentPerpAToXAxis: "",
          idSegmentPerpAToYAxis: "",
          idSegmentPerpBToXAxis: "",
          idSegmentPerpBToYAxis: "",
          idCurveABX: "",
          idCurveABY: "",
        }));

        setDibujarGrafica(false);
        setDibPuntoM(false);
        setIntervaloDib(false);
      } else {
        /* if (ids.idPuntoA && ids.idPuntoB) {
          const grafica = board.create("functiongraph", [
            funcionGrafica
          ]);

          // Guarda el ID de la recta en la lista de IDs
          setIds((prevIds) => ({
            ...prevIds,
            idGraficaF: grafica.id,
          }));

          setDibujarGrafica(true);
        } */
        const grafica = board.create("functiongraph", [funcionGrafica, xi, xf]);

        // Guarda el ID de la recta en la lista de IDs
        setIds((prevIds) => ({
          ...prevIds,
          idGraficaF: grafica.id,
          funcionGrafica: funcionGrafica,
        }));

        setDibujarGrafica(true);
      }
    } else {
      console.log("El tablero brd es null");
    }
  };

  return (
    <>
      <Button onClick={toggleGraficaF}>
        {dibujarGrafica ? "Borrar la gráfica de f(x)" : "Graficar f(x)"}
      </Button>
    </>
  );
};

export default GraficaFCortada;
