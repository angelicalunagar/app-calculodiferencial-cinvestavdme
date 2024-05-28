import React, { useEffect, useState } from "react";
import { JSXGraph } from "jsxgraph";

const VariacionFunciones = () => {
  const [functionExpression, setFunctionExpression] = useState("");
  const [selectedFunc, setSelectedFunc] = useState("2 * x");

  const handleFuncChange = (e) => {
    setSelectedFunc(e.target.value);
  };

  useEffect(() => {
    const board = JSXGraph.initBoard("variation-container", {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      pan: {
        needShiftToPan: true,
        enabled: true,
      },
      showcopyright: false,
    });

    const selectedFunction = (x) => {
      setFunctionExpression(selectedFunc); // Actualiza la expresión de la función
      return Function("x", `return ${selectedFunc}`)(x);
    };

    const curvef = board.create("functiongraph", [(x) => selectedFunction(x)]);

    // Crear los puntos A y B
    const gliderA = board.create("glider", [0.6, 1.2, curvef], { name: "A" });
    const gliderB = board.create("glider", [1.5, 3, curvef], { name: "B" });

    const curveF = board.create("functiongraph", [
      (x) => selectedFunction(x),
      () => gliderA.X(),
      () => gliderB.X(),
    ]);

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

    var curveABX = board.create("curve", [[], []], {
      strokeWidth: 3,
      fillColor: "yellow",
      fillOpacity: 0.3,
    });
    var curveABY = board.create("curve", [[], []], {
      strokeWidth: 3,
      fillColor: "blue",
      fillOpacity: 0.3,
    });
    curveABX.updateDataArray = function () {
      this.dataX = [gliderA.X()];
      this.dataY = [0];

      this.dataX = this.dataX.concat(curveF.points.map((p) => p.usrCoords[1]));
      this.dataY = this.dataY.concat(curveF.points.map((p) => p.usrCoords[2]));

      this.dataX.push(gliderB.X());
      this.dataY.push(0);
    };

    curveABY.updateDataArray = function () {
      this.dataX = [0];
      this.dataY = [gliderA.Y()];

      this.dataX = this.dataX.concat(curveF.points.map((p) => p.usrCoords[1]));
      this.dataY = this.dataY.concat(curveF.points.map((p) => p.usrCoords[2]));

      this.dataX.push(0);
      this.dataY.push(gliderB.Y());
    };
  }, [selectedFunc]);

  return (
    <div className="variation-container">
      <div>
        <label htmlFor="selectFunction">Selecciona una función:</label>
        <select
          id="selectFunction"
          value={selectedFunc}
          onChange={handleFuncChange}
        >
          <option value="x">f(x) = x</option>
          <option value="2 * x">f(x) = 2x</option>
          <option value="10 * x">f(x) = 10x</option>
          <option value="x ** 2">f(x) = x^2</option>
          <option value="2 * x ** 2">f(x) = 2x^2</option>
          <option value="150 * x -x*x">f(x) = 150x-x^2</option>
        </select>
      </div>
      <div>
        <p>Función seleccionada: {functionExpression}</p>
      </div>
      <div
        id="variation-container"
        className="jxgbox color-marco"
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default VariacionFunciones;
