import { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BoardsContext } from "../../contexts/BoardsContext";
import { FunCuadratContext } from "../../contexts/FunCuadratContext";
/* import TextoFunCuadrat from "./TextoFunCuadrat"; */
import { InlineMath } from "react-katex";

const FuncionCuadrat = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { a, setA, b, setB, c, setC } = useContext(FunCuadratContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      const updateFunction = (x) => a * x * x + b * x + c;

      const grafica = board.create("functiongraph", [updateFunction], {
        strokeWidth: 1,
      });

      return () => {
        board.removeObject(grafica);
      };
    }
  }, [brd, a, b, c]);

  const handleAChange = (event) => {
    const value = parseFloat(event.target.value);
    setA(value);
  };

  const handleBChange = (event) => {
    const value = parseFloat(event.target.value);
    setB(value);
  };

  const handleCChange = (event) => {
    const value = parseFloat(event.target.value);
    setC(value);
  };

  return (
    <Col style={{ color: "white", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Row style={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <p style={{ color: "#FF821C", fontWeight: "bold", fontSize: "20px" }}>
          <InlineMath>
            {`f(x) = ${a}x^2 ${b >= 0 ? "+" : ""}${b}x ${
              c >= 0 ? "+" : ""
            }${c}`}
          </InlineMath>
        </p>
      </Row>
      <Row style={{ marginBottom: "2rem" }}>
        <p><b>a:</b></p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${5*a+110}px`,
              zIndex: "1",
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }}
          >
            {a}
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>-10</span>
            <input
              type="range"
              min="-10"
              max="10"
              value={a}
              onChange={handleAChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>10</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2rem" }}>
        <p><b>b:</b></p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${0.667*b+40}px`,
              zIndex: "1",
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }}
          >
            {b}
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>0</span>
            <input
              type="range"
              min="0"
              max="150"
              value={b}
              onChange={handleBChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>150</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2rem" }}>
        <p><b>c:</b></p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${0.0083*c+110}px`,
              zIndex: "1",
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }} 
            
          >
            {c}
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>-6000</span>
            <input
              type="range"
              min="-6000"
              max="6000"
              value={c}
              onChange={handleCChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>6000</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default FuncionCuadrat;
