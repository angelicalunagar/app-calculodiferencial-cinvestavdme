import React, { useState, useEffect, useContext } from "react";
/* import { JSXGraph } from "jsxgraph"; */
import { Form, FormGroup } from "react-bootstrap";
import { BoardsContext } from "../../contexts/BoardsContext";

const CaracParab2 = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const [a, setA] = useState(1);
  const [b, setB] = useState(-3.01);
  const [downward, setDownward] = useState(false);
  const [upward, setUpward] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [wide, setWide] = useState(false);
  const [showVertex, setShowVertex] = useState(false);
  const [showRoots, setShowRoots] = useState(false);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      // Eliminar el vértice existente si existe
      if (ids.idVertex) {
        board.removeObject(ids.idVertex, false);
        setIds((prevIds) => ({ ...prevIds, idVertex: "" }));
      }

      // Eliminar las raíces si existen
      if (ids.idpuntoA && ids.idpuntoB) {
        board.removeObject(ids.idpuntoA, false);
        board.removeObject(ids.idpuntoB, false);
        setIds((prevIds) => ({ ...prevIds, idpuntoA: "", idpuntoB: "" }));
      }

      // Verificar si se debe mostrar el vértice
      if (showVertex) {
        // Crear el nuevo vértice
        const vertex = board.create("point", [0, b], {
          name: "Vértice",
          size: 2,
        });

        // Guardar el ID del vértice en el estado ids
        setIds((prevIds) => ({ ...prevIds, idVertex: vertex.id }));
      }

      // Eliminar la gráfica existente antes de crear una nueva
      if (ids.idParabola) {
        board.removeObject(ids.idParabola, false);
        setIds((prevIds) => ({ ...prevIds, idParabola: "" }));
      }

      // Actualizar la función gráfica cuando cambien los valores de a y b
      const graph = board.create("functiongraph", [
        (x) => a * x ** 2 + b,
      ]);

      // Guardar el ID de la gráfica en el estado ids
      setIds((prevIds) => ({ ...prevIds, idParabola: graph.id }));

      if (showRoots) {
        const r1 = board.create("point", [Math.sqrt(-b / a), 0], {
          name: "A",
          size: 2,
        });
        const r2 = board.create("point", [-Math.sqrt(-b / a), 0],
        {
          name: "B",
          size: 2,
        });

        // Guardar el ID de los puntos
        setIds((prevIds) => ({ ...prevIds, idpuntoA: r1.id }));
        setIds((prevIds) => ({ ...prevIds, idpuntoB: r2.id }));

        /* const roots = board.createElement(
          "intersection",
          [
            graph,
            board.create(
              "line",
              [
                [-10, 0],
                [10, 0],
              ],
              { visible: false }
            ),
          ],
          { withLabel: true }
        ); */
      }
    }
  }, [a, b, showVertex, showRoots]);
  const handleCheckboxChangeDownward = () => {
    setB(3);
    setA(-Math.abs(a));
    setDownward(true);
    setUpward(false);
  };

  const handleCheckboxChangeUpward = () => {
    setB(-3);
    setA(Math.abs(a));
    setDownward(false);
    setUpward(true);
  };

  const handleCheckboxChangeNarrow = () => {
    setA(Math.sign(a) * 10);
    setNarrow(true);
    setWide(false);
  };

  const handleCheckboxChangeWide = () => {
    setA(Math.sign(a) * 0.2);
    setNarrow(false);
    setWide(true);
  };

  return (
    <div>
      <div>
        <p style={{ marginBottom: "0.3rem" }}>
          <b>Concavidad</b>
        </p>
        <FormGroup>
          <Form.Check
            type="checkbox"
            label="Hacia abajo"
            checked={downward}
            onChange={handleCheckboxChangeDownward}
          />
          <Form.Check
            type="checkbox"
            label="Hacia arriba"
            checked={upward}
            onChange={handleCheckboxChangeUpward}
          />
        </FormGroup>
        <FormGroup>
          <Form.Check
            type="checkbox"
            label="Poco abierta"
            checked={narrow}
            onChange={handleCheckboxChangeNarrow}
          />
          <Form.Check
            type="checkbox"
            label="Muy abierta"
            checked={wide}
            onChange={handleCheckboxChangeWide}
          />
        </FormGroup>
      </div>
      <br />
      <div>
        <p style={{ marginBottom: "0.3rem" }}>
          <b>Vértice</b>
        </p>
        <Form.Check
          type="checkbox"
          label="Mostrar vértice"
          checked={showVertex}
          onChange={() => setShowVertex(!showVertex)}
        />
      </div>
      <br />
      <div>
        <p style={{ marginBottom: "0.3rem" }}>
          <b>Raíces</b>
        </p>
        <Form.Check
          type="checkbox"
          label="Mostrar raíces"
          checked={showRoots}
          onChange={() => setShowRoots(!showRoots)}
        />
      </div>
    </div>
  );
};

export default CaracParab2;
