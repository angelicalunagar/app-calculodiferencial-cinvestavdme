import React from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import { BlockMath } from "react-katex";
import BoardXX from "../Utilerias/BoardXX";
import TextoFuncion from "../GraficosDeFunciones/TextoFuncion";
import FuncionLineal2 from "../GraficosDeFunciones/FuncionLineal2";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { FuncLinealContextProvider } from "../../contexts/FuncLinealContext";
import FuncLinealesResumen2 from "./FuncLinealesResumen2";
import "../../styles/Bloque1_1.css";

const FuncLineales = () => {
  return (
    <Container>
      <Row className="row-nuevotema">
        <BoardsContextProvider>
          <FuncLinealContextProvider>
            <Col 
            md={5}
            className="border borde-redon"
            style={{ backgroundColor: "#011627" }}
            >
              <div className="sticky-act16">
                <div className="tittle-table">
                  <h6 style={{ color: "white" }}>Ventana gráfica 8</h6>
                </div>
                <BoardXX boardId="board6" boundingBox={[-20, 60, 20, -30]} />
                <TextoFuncion />
                <FuncionLineal2 boardId="board6" />
              </div>
            </Col>
          </FuncLinealContextProvider>
        </BoardsContextProvider>

        <Col md={7}>
          <h4>Funciones lineales</h4>
          <br />
          <p>
            Como pudiste observar, la gráfica de la función: 
            <BlockMath>f(x)=8.5x+30 </BlockMath> 
            y todas las demás funciones que graficaste en la Ventana gráfica 7 son
            líneas rectas, por lo que se dice que son <b>funciones lineales</b>.
            Completa el siguiente resumen sobre las funciones lineales:
          </p>
          <br />
          <p style={{fontSize: '21px'}}><b>Resumen</b></p>
          <FuncLinealesResumen2 md={12}/> 
        </Col>
      </Row>
    </Container>
  );
};

export default FuncLineales;
