import React, { useState, useEffect } from "react";
import { JSXGraph } from "jsxgraph";
import { Form } from "react-bootstrap";

const CaracterisParabola = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-3);
  const [downward, setDownward] = useState(false);
  const [upward, setUpward] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [wide, setWide] = useState(false);
  const [showVertex, setShowVertex] = useState(true);
  const [showRoots, setShowRoots] = useState(true);

  useEffect(() => {
    if (downward) {
      setB(3);
      setA(-Math.abs(a));
    } else if (upward) {
      setB(-3);
      setA(Math.abs(a));
    } else if (narrow) {
      setA(Math.sign(a) * 0.2);
    } else if (wide) {
      setA(Math.sign(a) * 10);
    }
  }, [downward, upward, narrow, wide]);

  const handleCheckboxChange = (e, setter) => {
    setter(e.target.checked);
  };

  return (
    <div>
      <div>
        <Form.Check
          type="checkbox"
          id="checkbox"
          label="Hacia abajo"
          checked={downward}
          onChange={(e) => handleCheckboxChange(e, setDownward)}
        />
        <Form.Check
          type="checkbox"
          id="checkbox"
          label="Hacia arriba"
          checked={upward}
          onChange={(e) => handleCheckboxChange(e, setUpward)}
        />
      </div>
      <div>
        <Form.Check
          type="checkbox"
          id="checkbox"
          label="Poco abierta"
          checked={narrow}
          onChange={(e) => handleCheckboxChange(e, setNarrow)}
        />
        <Form.Check
          type="checkbox"
          id="checkbox"
          label="Muy abierta"
          checked={wide}
          onChange={(e) => handleCheckboxChange(e, setWide)}
        />
      </div>
      <div>
        <Form.Check
          type="checkbox"
          id="checkbox"
          label="Mostrar vértice"
          checked={showVertex}
          onChange={(e) => setShowVertex(e.target.checked)}
        />
      </div>
      <div>
        <Form.Check
          type="checkbox"
          id="checkbox"
          label="Mostrar raíces"
          checked={showRoots}
          onChange={(e) => setShowRoots(e.target.checked)}
        />
      </div>
      <div
      
      
        logic={(board) => {
          const graph = board.createElement("functiongraph", [
            (x) => a * x ** 2 + b,
          ]);

          if (showVertex) {
            const vertex = board.createElement("point", [0, b], {
              name: "Vértice",
              size: 2,
            });
          }

          if (showRoots) {
            const roots = board.createElement(
              "intersection",
              [
                graph,
                board.create("line", [
                  [0, 0],
                  [1, 0],
                ]),
              ],
              { withLabel: true }
            );
          }

          return () => {
            board.removeObject(graph);
            if (showVertex) {
              board.removeObject(vertex);
            }
            if (showRoots) {
              board.removeObject(roots);
            }
          };
        }}
      />
    </div>
  );
};

export default CaracterisParabola;

{/* <Form.Check
  type="checkbox"
  id="checkbox"
  label="Mi Checkbox"
  checked={checked}
  onChange={handleCheckboxChange}
/>; */}
