import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { FunCuadratContextProvider } from "../../contexts/FunCuadratContext";
import { GraficaFContextProvider } from "../../contexts/GraficaFContext";
import FuncionCuadrat from "./FuncionCuadrat";
import BoardXX from "../Utilerias/BoardXX";
import GraficaF from "../GraficosDeFunciones/GraficaF";
import PuntoMovibleF from "../GraficosDeFunciones/PuntoMovibleF";
import CaracParab2 from "./CaracParab2";
import Quiz21 from "./Quiz21";
import "../../styles/Bloque1_1.css";

import Quiz17 from "./Quiz17";
import Quiz18 from "./Quiz18";
import Quiz19 from "./Quiz19";
import Quiz20 from "./Quiz20";
import VariacionIntervaloF from "./VariacionIntervaloF";
import GraficaFCortada from "../Utilerias/GraficaFCortada";
import "../../styles/Bloque1_1.css";

const FuncionesCuadraticas = () => {
  return (
    <Container>
      <Row className="row-nuevotema">
        <Col md={12}>
          <h4>Funciones cuadráticas</h4>
          <br />
          <p>
            ¿Recuerdas el caso del granjero el cuál quería construir un corral?
            La función que describía el área <InlineMath>A(x)</InlineMath> del corral en función de uno
            de sus lados <InlineMath>x</InlineMath> era:
            <BlockMath>{"A(x)=150x-x^2"}</BlockMath>
            Con dominio <InlineMath>{"0 \\leq x \\leq 150"}</InlineMath> y rango{" "}
            <InlineMath>{"0 \\leq x \\leq 5625"}</InlineMath>, de acuerdo al
            contexto. Observa que el término <InlineMath>{"-x^2"}</InlineMath>{" "}
            es el término cuadrático en esta función y al cual le debe su nombre
            de función cuadrática. De hecho, las funciones cuadráticas se llaman
            así porque el mayor exponente de la variable independiente <InlineMath>x</InlineMath> es <InlineMath>2</InlineMath>.
            <br />
            <br />
            En contraste, en las funciones lineales, como{" "}
            <InlineMath>{"f(x)=mx+b"}</InlineMath>, el mayor exponente de <InlineMath>x</InlineMath> es{" "}
            <InlineMath>1</InlineMath>, lo que resulta en una relación lineal entre la variable
            dependiente y la variable independiente. Entonces, ¿crees que la
            gráfica de <InlineMath>{"A(x)=150x-x^2"}</InlineMath> tiene forma de
            recta?
          </p>
        </Col>
      </Row>
      <BoardsContextProvider>
        <GraficaFContextProvider>
          <Row className="grafica-quiz">
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 9</h6>
                </div>
                <BoardXX
                  boardId="board7"
                  boundingBox={[-10, 6800, 180, -300]}
                />
                <span className="botones-grafica">
                  <GraficaFCortada
                    boardId="board7"
                    funcionGrafica={(x) => 150 * x - x * x}
                    intervaloX={[0, 150]}
                  />
                  <PuntoMovibleF
                    boardId="board7"
                    initialCoordinates={[8, 1136]}
                  />
                </span>
              </Row>
            </Col>
            <Col md={5}>
              <Quiz17 />
            </Col>
          </Row>
        </GraficaFContextProvider>
      </BoardsContextProvider>
      <br />
      <br />
      <br />
      <Row className="grafica-quiz">
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 10</h6>
                </div>
                <BoardXX
                  boardId="board8"
                  boundingBox={[-10, 6800, 180, -300]}
                />
                <div className="botones-grafica">
                  <GraficaFCortada
                    boardId="board8"
                    funcionGrafica={(x) => 150 * x - x * x}
                    intervaloX={[0, 150]}
                  />
                  <VariacionIntervaloF
                    boardId="board8"
                    initialCoordinates={[8, 1136, 20, 2600]}
                  />
                </div>
              </Row>
            </Col>
            <Col md={5}>
              <Quiz18 />
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
      <br />
      <br />
      <br />
      <Row className="grafica-quiz">
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 11</h6>
                </div>
                <BoardXX
                  boardId="board9"
                  boundingBox={[-10, 6800, 180, -300]}
                />
                <span className="botones-grafica">
                  <GraficaFCortada
                    boardId="board9"
                    funcionGrafica={(x) => 150 * x - x * x}
                    intervaloX={[0, 150]}
                  />
                  <PuntoMovibleF
                    boardId="board9"
                    initialCoordinates={[8, 1136]}
                  />
                </span>
              </Row>
            </Col>
            <Col md={5}>
              <Quiz19 />
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>

      <br />
      <br />
      <br />
      <Row className="grafica-quiz">
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 12</h6>
                </div>
                <BoardXX
                  boardId="board10"
                  boundingBox={[-10, 6800, 180, -300]}
                />
                <span className="botones-grafica">
                  <PuntoMovibleF
                    boardId="board10"
                    initialCoordinates={[8, 1136]}
                  />
                </span>
              </Row>
            </Col>
            <Col md={5}>
              <p>
                <br />
                <br />
                Ahora, descontextualicemos la función y escribámosla como una
                función genérica:
                <BlockMath>f(x)=150x-x^2</BlockMath>
                ¿Cuáles son su dominio y rango máximos? Puedes usar el siguiente
                botón para graficar la función
                <InlineMath>f(x)=150x-x^2</InlineMath> en la <em><b>Ventana gráfica 12</b></em>{" "}
                y contestar esta pregunta.
                <br />
              </p>
              <span className="button-center">
                <GraficaF
                  boardId="board10"
                  funcionGrafica={(x) => 150 * x - x * x}
                />
              </span>
              <br />
              Observa que la gráfica de <InlineMath>
                f(x)=150x-x^2
              </InlineMath>{" "}
              es una curva continua (no se rompe) que se asemeja a la forma de
              un arco; esta forma se conoce como parábola.
              <br />
              <br />
              <br />
              <Quiz20 />
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
      <br />
      <br />
      <br />
      <Row className="grafica-quiz">
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 13</h6>
                </div>
                <BoardXX boardId="board11" boundingBox={[-15, 11, 15, -10]} />
              </Row>
            </Col>
            <Col md={5}>
              <p>
                <br />
                <br />
                La parábola, reconocida por su forma distintiva en arco, posee
                ciertos atributos particulares. Utiliza la <em><b>Ventana gráfica 13</b></em>{" "}
                para explorar algunas de las propiedades fundamentales de la
                parábola.
              </p>
              <span className="button-center">
                <CaracParab2 boardId="board11" />
              </span>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>

      <Row className="row-nuevotema grafica-quiz">
        <BoardsContextProvider>
          <FunCuadratContextProvider>
            <Col
              className="border borde-redon"
              md={7}
              style={{ backgroundColor: "#011627" }}
            >
              <Row className="sticky">
                <Col md={7}>
                  <div className="sticky-act16">
                    <div className="tittle-table">
                      <h6 style={{ color: "white" }}>Ventana gráfica 14</h6>
                    </div>
                    <BoardXX
                      boardId="board12"
                      boundingBox={[-10, 6800, 180, -300]}
                    />
                  </div>
                </Col>
                <Col>
                  <FuncionCuadrat boardId="board12" />
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <Quiz21 />
            </Col>
          </FunCuadratContextProvider>
        </BoardsContextProvider>
      </Row>
    </Container>
  );
};

export default FuncionesCuadraticas;
