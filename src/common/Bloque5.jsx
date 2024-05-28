import "../styles/Bloque5.css";
import "../styles/Bloque1_1.css";
import { Row, Col } from "react-bootstrap";
import VariacionFunciones from "./VariacionFunciones";
import { BoardsContextProvider } from "../contexts/BoardsContext";

//Bloque1

import { BoardContextProvider } from "../contexts/BoardContext";
import SlideCuestionario from "./SlideCuestionario";

import { GraficaFContextProvider } from "../contexts/GraficaFContext";
import { FunCuadratContextProvider } from "../contexts/FunCuadratContext";
import { FunCubicaContextProvider } from "../contexts/FunCubicaContext";
import BoardXX from "./Utilerias/BoardXX";
import GraficaF from "./GraficosDeFunciones/GraficaF";
import GraficaFSinBoton from "./FuncionesPolinomiales.jsx/GraficaFSinBoton";
import PuntoMovibleF from "./GraficosDeFunciones/PuntoMovibleF";
import VariacionIntervaloF from "./FuncionesCuadraticas/VariacionIntervaloF";
import FunCubicaParam from "./FuncionesPolinomiales.jsx/FunCubicaParam";
import Fun4toGradoParam from "./FuncionesPolinomiales.jsx/Fun4toGradoParam";
import Quiz22 from "./FuncionesPolinomiales.jsx/Quiz22";
import TextoFunCubica from "./FuncionesPolinomiales.jsx/TextoFunCubica";
import TextoFun4toGrado from "./FuncionesPolinomiales.jsx/TextoFun4toGrado";
import { Fun4toGradoContextProvider } from "../contexts/Fun4toGradoContext";

function Bloque5() {
  return (
    <div className="bloque5-contenedor">
      <h1>Bloque 5</h1>
      <Row>
        <SlideCuestionario />
        <BoardContextProvider>
          <Row>
            <Col md={9}>{/* <Board />  */}</Col>
          </Row>
        </BoardContextProvider>
      </Row>
      
      <BoardsContextProvider>
        <Fun4toGradoContextProvider>
          <Col
            md={7}
            className="border borde-redon"
            style={{ backgroundColor: "#011627" }}
          >
            <Row className="sticky">
              <Col md={8}>
                <div className="tittle-table">
                  <h6 style={{ color: "white" }}>Ventana gráfica 9</h6>
                </div>
                <BoardXX boardId="board7.3" boundingBox={[-12, 30, 12, -30]} />

                <TextoFun4toGrado />
              </Col>
              <Col>
                <Fun4toGradoParam boardId="board7.3" />
              </Col>
            </Row>
          </Col>
        </Fun4toGradoContextProvider>
      </BoardsContextProvider>
    </div>
  );
}
export default Bloque5;
