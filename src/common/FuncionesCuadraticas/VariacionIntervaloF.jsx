import { useContext } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { GraficaFContext } from "../../contexts/GraficaFContext";
import { Button } from "react-bootstrap";

const VariacionIntervaloF = ({ boardId, initialCoordinates }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { intervaloDib, setIntervaloDib } = useContext(GraficaFContext);
  const [xA, yA, xB, yB] = initialCoordinates;

  const togglePuntoM = () => {
    if (brd[boardId]) {
      const board = brd[boardId];

      if (intervaloDib) {
        const GliderAId = ids.idGliderA; // Obtener el ID del segmento desde la propiedad idSegBG
        const GliderBId = ids.idGliderB;
        const CurveFId = ids.idCurveF;
        const SegmentPerpAToXAxisId = ids.idSegmentPerpAToXAxis;
        const SegmentPerpAToYAxisId = ids.idSegmentPerpAToYAxis;
        const SegmentPerpBToXAxisId = ids.idSegmentPerpBToXAxis;
        const SegmentPerpBToYAxisId = ids.idSegmentPerpBToYAxis;
        const CurveABXId = ids.idCurveABX;
        const CurveABYId = ids.idCurveABY;
        const CurveF = ids.idCurveF

        board.removeObject(GliderAId, false); // Eliminar el objeto del tablero usando su ID
        board.removeObject(GliderBId, false);
        board.removeObject(CurveFId, false);
        board.removeObject(SegmentPerpAToXAxisId, false);
        board.removeObject(SegmentPerpBToXAxisId, false);
        board.removeObject(SegmentPerpAToYAxisId, false);
        board.removeObject(SegmentPerpBToYAxisId, false);
        board.removeObject(CurveABXId, false);
        board.removeObject(CurveABYId, false);
        board.removeObject(CurveF, false);

        setIds((prevIds) => ({
          ...prevIds,
          idGliderA: "",
          idGliderB: "",
          idCurveF: "",
          idSegmentPerpAToXAxis: "",
          idSegmentPerpBToXAxis: "",
          idSegmentPerpAToYAxis: "",
          idSegmentPerpBToYAxis: "",
          idCurveABX: "",
          idCurveABY: "",
        }));

        setIntervaloDib(false);
      } else {
        if (ids.idGraficaF) {
          // Crear los puntos A y B
          const gliderA = board.create("glider", [xA, yA, ids.idGraficaF], {
            name: "A",
          });
          const gliderB = board.create("glider", [xB, yB, ids.idGraficaF], {
            name: "B",
          });

          const curveF = board.create(
            "functiongraph",
            [ids.funcionGrafica, () => gliderA.X(), () => gliderB.X()],
            { strokeWidth: 1, dash: 2 }
          );
          console.log(/* id de la grafica:" ${ids.idGraficaF} */);

          const segmentPerpAToXAxis = board.create(
            "segment",
            [
              [() => gliderA.X(), 0],
              [() => gliderA.X(), () => gliderA.Y()],
            ],
            { strokeWidth: 1, dash: 2 }
          );

          const segmentPerpBToXAxis = board.create(
            "segment",
            [
              [() => gliderB.X(), 0],
              [() => gliderB.X(), () => gliderB.Y()],
            ],
            { strokeWidth: 1, dash: 2 }
          );

          const segmentPerpAToYAxis = board.create(
            "segment",
            [
              [0, () => gliderA.Y()],
              [() => gliderA.X(), () => gliderA.Y()],
            ],
            { strokeWidth: 1, dash: 2 }
          );

          const segmentPerpBToYAxis = board.create(
            "segment",
            [
              [0, () => gliderB.Y()],
              [() => gliderB.X(), () => gliderB.Y()],
            ],
            { strokeWidth: 1, dash: 2 }
          );
          board.suspendUpdate();
          var curveABX = board.create("curve", [[], []], {
            dash: 2,
            fillColor: "yellow",
            fillOpacity: 0.3,
          });
          var curveABY = board.create("curve", [[], []], {
            dash: 2,
            fillColor: "blue",
            fillOpacity: 0.3,
          });
          curveABX.updateDataArray = function () {
            this.dataX = [gliderA.X()];
            this.dataY = [0];

            this.dataX = this.dataX.concat(
              curveF.points.map((p) => p.usrCoords[1])
            );
            this.dataY = this.dataY.concat(
              curveF.points.map((p) => p.usrCoords[2])
            );

            this.dataX.push(gliderB.X());
            this.dataY.push(0);
          };

          curveABY.updateDataArray = function () {
            this.dataX = [0];
            this.dataY = [gliderA.Y()];

            this.dataX = this.dataX.concat(
              curveF.points.map((p) => p.usrCoords[1])
            );
            this.dataY = this.dataY.concat(
              curveF.points.map((p) => p.usrCoords[2])
            );

            this.dataX.push(0);
            this.dataY.push(gliderB.Y());
          };

          board.unsuspendUpdate();
          // Guarda el ID del segmento en la lista de IDs
          setIds((prevIds) => ({
            ...prevIds,
            idGliderA: gliderA.id,
            idGliderB: gliderB.id,
            idSegmentPerpAToXAxis: segmentPerpAToXAxis.id,
            idSegmentPerpBToXAxis: segmentPerpBToXAxis.id,
            idSegmentPerpAToYAxis: segmentPerpAToYAxis.id,
            idSegmentPerpBToYAxis: segmentPerpBToYAxis.id,
            idCurveABX: curveABX.id,
            idCurveABY: curveABY.id,
            idCurveF: curveF.id
          }));

          setIntervaloDib(true);
        }
      }
    }
  };

  return (
    <>
      <Button onClick={togglePuntoM}>
        {intervaloDib ? "Borrar intervalo" : "Dibujar intervalo"}
      </Button>
    </>
  );
};

export default VariacionIntervaloF;
