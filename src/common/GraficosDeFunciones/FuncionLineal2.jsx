import { useContext, useState, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

import { FuncLinealContext } from "../../contexts/FuncLinealContext";
import { Row, Col } from "react-bootstrap";

const FuncionLineal2 = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { intercept, setIntercept, slope, setSlope } =
    useContext(FuncLinealContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      const updateFunction = (x) => intercept + slope * x;

      const grafica = board.create("functiongraph", [updateFunction], {
        strokeWidth: 1,
      });

      const b = board.create("point", [0, intercept], { fixed: true, size: 3 });

      return () => {
        board.removeObject(grafica);
        board.removeObject(b);
      };
    }
  }, [brd /* , boardId */, intercept, slope]);

  const handleInterceptChange = (event) => {
    const value = parseFloat(event.target.value);
    setIntercept(value);
  };

  const handleSlopeChange = (event) => {
    const value = parseFloat(event.target.value);
    setSlope(value);
  };

  // Función auxiliar para obtener el ancho del texto
  const getTextWidth = (text, fontSize, fontWeight) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontWeight} ${fontSize}px sans-serif`;
    return context.measureText(text).width;
  };

  return (
    <Row style={{ color: "white" }}>
      <Col>
        m:
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${((slope + 50) / 100) * 200}px`,
              zIndex: "1",
              /* color: '#FF821C',
            fontWeight: 'bold', */
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }}
          >
            {slope}
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>-50</span>
            <input
              type="range"
              min="-50"
              max="50"
              value={slope}
              onChange={handleSlopeChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>50</span>
          </div>
        </Col>
      </Col>

      <Col>
        <Row>b:</Row>

        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${((intercept + 50) / 100) * 200}px`,
              zIndex: "1",
              /* color: '#FF821C',
            fontWeight: 'bold', */

              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }}
          >
            {intercept}
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>-50</span>
            <input
              type="range"
              min="-50"
              max="50"
              value={intercept}
              onChange={handleInterceptChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>50</span>
          </div>
          <br />
        </Col>
      </Col>
    </Row>
  );
};

export default FuncionLineal2;
