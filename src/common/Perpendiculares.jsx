//Perpendiculares.js
import React, { useEffect, useContext, useState } from "react";
import { FuncionContext } from "./FuncionContexto";
import { JSXGraph } from "jsxgraph";

const Perpendiculares = () => {
  const { selectedFunc } = useContext(FuncionContext);
  const [functionExpression, setFunctionExpression] = useState("");

  useEffect(() => {
    const board = JSXGraph.initBoard("perpendiculars-container", {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      pan: {
        needShiftToPan: true,
        enabled: true,
      },
      showcopyright: false,
    });

    const slider = board.create(
      "slider",
      [
        [0, 4],
        [3, 4],
        [-2, 4, 5],
      ],
      { name: "a" }
    );

    const selectedFunction = (x, a) => {
      const expr = selectedFunc.replace("a", `(${a})`);
      setFunctionExpression(expr); // Actualiza la expresión de la función
      return Function("x", `return ${expr}`)(x);
    };

    const curve = board.create("functiongraph", [
      (x) => selectedFunction(x, slider.Value()),
    ]);

    const glider = board.create("glider", [0.6, 1.2, curve], { name: "P" });

    const perpendicularToXAxis = board.create(
      "segment",
      [
        [() => glider.X(), 0],
        [() => glider.X(), () => glider.Y()],
      ],
      { straightFirst: false }
    );

    const perpendicularToYAxis = board.create(
      "segment",
      [
        [0, () => glider.Y()],
        [() => glider.X(), () => glider.Y()],
      ],
      { straightFirst: false }
    );

    // Actualiza la expresión de la función cuando cambia el slider
    slider.on("drag", () => {
      setFunctionExpression(selectedFunc.replace("a", `(${slider.Value()})`));
    });

    // Inicializa la expresión de la función al cargar la página
    setFunctionExpression(selectedFunc.replace("a", `(${slider.Value()})`));
  }, [selectedFunc]);

  return (
    <div className="perpendiculars-container">
      <div>
        <p>Función seleccionada: {functionExpression}</p>
      </div>
      <div
        id="perpendiculars-container"
        className="jxgbox color-marco"
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default Perpendiculares;
