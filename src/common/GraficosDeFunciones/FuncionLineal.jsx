import { useContext, useState, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";
import { Row, Col } from "react-bootstrap";

const FuncionLineal = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const [intercept, setIntercept] = useState(30);
  const [slope, setSlope] = useState(8.5);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      const updateFunction = (x) => intercept + slope * x;

      const grafica = board.create("functiongraph", [updateFunction], {
        strokeWidth: 1,
      });

      const b = board.create("point", [0, intercept], { fixed: true, size: 3 });

      // Agregar texto con la función en la esquina superior derecha
   /*    const funcText = board.create(
        "text",
        [15, 45, () => `f(x) = ${intercept} + ${slope}x`],
        {
          anchorX: "right",
          anchorY: "top",
          fontSize: 15,
          strokeColor: "black",
          fillColor: "orange",
          fontWeight: "bold",
        }
      ); */

      const funcText = board.create("text", [function() { return board.canvasWidth - 15 - getTextWidth(`f(x) = ${intercept} + ${slope}x`, 15, 'bold') }, 45, () => `f(x) = ${intercept} + ${slope}x`], {
        anchorX: 'right',
        anchorY: 'top',
        fontSize: 15,
        strokeColor: 'black',
        fillColor: 'orange',
        fontWeight: 'bold'
      });

      return () => {
        board.removeObject(grafica);
        board.removeObject(b);
        board.removeObject(funcText);
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
    <Row>
      Intercept:
      <Col style={{ position: "relative", width: "200px" }}>
        <br />
        <span
          style={{
            position: "absolute",
            top: "-20px",
            left: `${((intercept + 50) / 100) * 200}px`,
            zIndex: "1",
            backgroundColor: "rgba(255, 165, 0, 0.7)",
            padding: "5px",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
          }}
        >
          {intercept}
        </span>

        {/*   <CustomRangeInput
          min="-50"
          max="50"
          value={intercept}
          onChange={handleInterceptChange}
        /> */}

        <input
          type="range"
          min="-50"
          max="50"
          value={intercept}
          onChange={handleInterceptChange}
          style={{ width: "100%", zIndex: "0" }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <span>-50</span>
          <span>50</span>
        </div>
      </Col>
      Slope:
      <Col style={{ position: "relative", width: "200px" }}>
        <br />
        <span
          style={{
            position: "absolute",
            top: "-20px",
            left: `${((slope + 50) / 100) * 200}px`,
            zIndex: "1",
            backgroundColor: "rgba(255, 165, 0, 0.7)",
            padding: "5px",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
          }}
        >
          {slope}
        </span>
        <input
          type="range"
          min="-50"
          max="50"
          value={slope}
          onChange={handleSlopeChange}
          style={{ width: "100%", zIndex: "0" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <span>-50</span>
          <span>50</span>
        </div>
      </Col>
      <br />
      <br />
    </Row>
  );
};

export default FuncionLineal;
