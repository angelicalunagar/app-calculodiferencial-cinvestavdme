import { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BoardsContext } from "../../contexts/BoardsContext";
import { Fun4toGradoContext } from "../../contexts/Fun4toGradoContext";
/* import TextoFunCuadrat from "./TextoFunCuadrat"; */
import { InlineMath } from "react-katex";


const Fun4toGradoParam = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);
  const { a, setA, b, setB, c, setC, d, setD, e, setE } = useContext(Fun4toGradoContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      const updateFunction = (x) => a * x * x * x*x + b * x * x*x + c * x*x + d*x+e;

      const grafica = board.create("functiongraph", [updateFunction], {
        strokeWidth: 1,
      });

      return () => {
        board.removeObject(grafica);
      };
    }
  }, [brd, a, b, c, d, e]);

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

  const handleDChange = (event) => {
    const value = parseFloat(event.target.value);
    setD(value);
  };

  const handleEChange = (event) => {
    const value = parseFloat(event.target.value);
    setE(value);
  };

  return (
    <Col
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
     {/*  <Row style={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <p style={{ color: "#FF821C", fontWeight: "bold", fontSize: "20px" }}>
          <InlineMath>
            {`f(x) = ${a}x^3 ${b >= 0 ? "+" : ""}${b}x^2 ${
              c >= 0 ? "+" : ""}${c}x ${d >= 0 ? "+" : ""}${d}`}
          </InlineMath>
        </p>
      </Row> */}
      
      <Row style={{ marginBottom: "1.2rem", marginTop: "1.7rem" }}>
        <p>
          <b>a:</b>
        </p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${5 * a + 110}px`,
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
      <Row style={{ marginBottom: "1.2rem" }}>
        <p>
          <b>b:</b>
        </p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${5 * b + 110}px`,
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
            <span>-10</span>
            <input
              type="range"
              min="-10"
              max="10"
              value={b}
              onChange={handleBChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>10</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "1.2rem" }}>
        <p>
          <b>c:</b>
        </p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${5 * c + 110}px`,
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
            <span>-10</span>
            <input
              type="range"
              min="-10"
              max="10"
              value={c}
              onChange={handleCChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>10</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "1.2rem" }}>
        <p>
          <b>d:</b>
        </p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${5 * d + 110}px`,
              zIndex: "1",
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }}
          >
            {d}
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>-20</span>
            <input
              type="range"
              min="-20"
              max="20"
              value={d}
              onChange={handleDChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>20</span>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "1.2rem" }}>
        <p>
          <b>e:</b>
        </p>
        <Col style={{ position: "relative", width: "200px" }}>
          <span
            style={{
              position: "absolute",
              top: "-40px",
              left: `${5 * e + 110}px`,
              zIndex: "1",
              backgroundColor: "rgba(255, 165, 0, 0.7)",
              padding: "5px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.7)",
            }}
          >
            {e}
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <span>-20</span>
            <input
              type="range"
              min="-20"
              max="20"
              value={e}
              onChange={handleEChange}
              style={{ width: "100%", zIndex: "0" }}
            />
            <span>20</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Fun4toGradoParam;
