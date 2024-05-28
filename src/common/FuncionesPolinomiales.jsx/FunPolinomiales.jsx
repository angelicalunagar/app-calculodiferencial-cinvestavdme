import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { GraficaFContextProvider } from "../../contexts/GraficaFContext";
import BoardXX from "../Utilerias/BoardXX";
import GraficaFSinBoton from "./GraficaFSinBoton";
import PuntoMovibleF from "../GraficosDeFunciones/PuntoMovibleF";
import VariacionIntervaloF from "../FuncionesCuadraticas/VariacionIntervaloF";
import Quiz22 from "./Quiz22";
import { FunCubicaContextProvider } from "../../contexts/FunCubicaContext";
import { Fun4toGradoContextProvider } from "../../contexts/Fun4toGradoContext";
import FunCubicaParam from "./FunCubicaParam";
import Fun4toGradoParam from "./Fun4toGradoParam";
import TextoFunCubica from "./TextoFunCubica";
import TextoFun4toGrado from "./TextoFun4toGrado";

import "../../styles/Bloque1_1.css";

const FunPolinomiales = () => {
  return (
    <Container>
      <Row className="main-row">
        <Col md={12}>
          <h4>Funciones polinomiales</h4>
          <br />
          <p>
            A las funciones lineales y cuadráticas se les conoce como funciones
            polinomiales porque la función <InlineMath>f(x)</InlineMath> está
            definida por un polinomio. En el caso de las funciones lineales, se
            definen por un polinomio de primer grado:{" "}
            <BlockMath>f(x)=mx+b</BlockMath>
            Por su parte, las funciones cuadráticas están definidas por
            polinomios de segundo grado:
            <BlockMath>f(x)=ax^2+bx+c</BlockMath> Esto significa que las
            funciones definidas con un polinomio de 3er grado también son
            funciones polinomiales puesto que están definidas por un polinomio.
            A estas funciones se les llama funciones cúbicas. Un ejemplo de
            función cúbica es:
            <BlockMath>f(x)=x^3+5x^2+x-2</BlockMath>.
          </p>
        </Col>
      </Row>
      {/*  <BoardsContextProvider>
        <GraficaFContextProvider>
         
            <Col md={6}>
            <Row>
              <BoardXX boardId="board7.4" boundingBox={[-8, 40, 8, -25]} />

              <GraficaFSinBoton
                boardId="board7.4"
                funcionGrafica={(x) => x * x * x + 5 * x * x + x - 2}
              />
              <div className="botones-grafica">
                <PuntoMovibleF boardId="board7.4" initialCoordinates={[1, 6]} />
                
                <VariacionIntervaloF
                  boardId="board7.4"
                  initialCoordinates={[1, 5, 2, 28]}
                />
              </div>
              </Row>
            </Col>
         
        </GraficaFContextProvider>
      </BoardsContextProvider> */}
      <BoardsContextProvider>
        <GraficaFContextProvider>
          <Row className="grafica-quiz">
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 15</h6>
                </div>
                <BoardXX boardId="board13" boundingBox={[-8, 40, 8, -25]} />

                <GraficaFSinBoton
                  boardId="board13"
                  funcionGrafica={(x) => x * x * x + 5 * x * x + x - 2}
                />

                <span className="botones-grafica">
                  <PuntoMovibleF
                    boardId="board13"
                    initialCoordinates={[1, 6]}
                  />
                  <VariacionIntervaloF
                    boardId="board13"
                    initialCoordinates={[1, 5, 2, 28]}
                  />
                </span>
              </Row>
            </Col>
            <Col md={5}>
              <Quiz22 />
            </Col>
          </Row>
        </GraficaFContextProvider>
      </BoardsContextProvider>

      <BoardsContextProvider>
        <FunCubicaContextProvider>
          <Row className="grafica-quiz row-nuevotema">
            <Col md={4}>
              <p>
                Ahora, interactúa con la{" "}
                <b>
                  <em>Ventana gráfica 16</em>
                </b>{" "}
                y modifica los parámetros de la función. Observa:
              </p>
              <ul className="li-preg-reflex">
                <li>
                  en dónde intersecta la gráfica al eje{" "}
                  <InlineMath>y</InlineMath> cuando modificas el término
                  independiente <InlineMath>d</InlineMath>.
                </li>
                <li>
                  si la función (en general) es creciente o decreciente cuando
                  modificas el término cúbico <InlineMath>a</InlineMath>.
                </li>
                <li>
                  ¿Qué pasa si modificas el término cuadrático{" "}
                  <InlineMath>b</InlineMath> o el término lineal{" "}
                  <InlineMath>c</InlineMath>?
                </li>
                <li>
                  ¿Cuál es el número máximo de raíces reales que puede tener una
                  función cúbica?
                </li>
                <li>
                  ¿Cuál es el número mínimo de raíces reales que puede tener una
                  función cúbica?
                </li>
              </ul>
            </Col>

            <Col
              md={7}
              className="border borde-redon"
              style={{ backgroundColor: "#011627" }}
            >
              <Row className="sticky">
                <Col md={8}>
                  <div className="tittle-table">
                    <h6 style={{ color: "white" }}>Ventana gráfica 16</h6>
                  </div>
                  <BoardXX boardId="board14" boundingBox={[-12, 30, 12, -30]} />
                  <TextoFunCubica />
                </Col>
                <Col>
                  <FunCubicaParam boardId="board14" />
                </Col>
              </Row>
            </Col>
          </Row>
        </FunCubicaContextProvider>
      </BoardsContextProvider>

      <BoardsContextProvider>
        <Fun4toGradoContextProvider>
          <Row className="grafica-quiz row-nuevotema">
            <Col md={4}>
              <p>
                Interactúa con la{" "}
                <b>
                  <em>Ventana gráfica 17</em>
                </b>
                . ¿El dominio siempre es el mismo para todas las funciones
                cuarticas? Observa:
              </p>
              <ul className="li-preg-reflex">
                <li>
                  intervalos donde <InlineMath>f(x)</InlineMath> se incrementa a
                  medida que <InlineMath>x</InlineMath> se incrementa
                </li>
                <li>
                  intervalos donde <InlineMath>f(x)</InlineMath> disminuye a
                  medida que <InlineMath>x</InlineMath> se incrementa
                </li>
                <li>
                  intervalos donde <InlineMath>f(x)</InlineMath> es positiva
                </li>
                <li>
                  intervalos donde <InlineMath>f(x)</InlineMath> es negativa
                </li>
                <li>puntos máximos y/o mínimos relativos</li>
              </ul>

              <p>
                Además, puedes modificar los parámetros de la función. Observa:
              </p>
              <ul className="li-preg-reflex">
                <li>
                  en dónde intersecta la gráfica al <InlineMath>{"eje \\, y"}</InlineMath> cuando modificas el
                  término independiente <InlineMath>e</InlineMath>.
                </li>
                <li>
                  qué pasa si la función abre hacia arriba o hacia abajo cuando
                  modificas el coeficiente de <InlineMath>x^4</InlineMath> <InlineMath>a</InlineMath>
                </li>
                <li>
                  ¿Qué pasa si modificas el término cúbico <InlineMath>b</InlineMath>, el término
                  cuadrático <InlineMath>c</InlineMath> o el término lineal <InlineMath>d</InlineMath>?
                </li>
                <li>
                  ¿Cuál es el número máximo de raíces que puede tener una
                  función de cuarto grado?
                </li>
                <li>
                  ¿Cuál es el número mínimo de raíces que puede tener una
                  función de cuarto grado?
                </li>
              </ul>
            </Col>
            <Col
              md={7}
              className="border borde-redon"
              style={{ backgroundColor: "#011627" }}
            >
              <Row className="sticky">
                <Col md={8}>
                  <div className="tittle-table">
                    <h6 style={{ color: "white" }}>Ventana gráfica 17</h6>
                  </div>
                  <BoardXX boardId="board15" boundingBox={[-12, 30, 12, -30]} />
                  <TextoFun4toGrado />
                </Col>
                <Col>
                  <Fun4toGradoParam boardId="board15" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Fun4toGradoContextProvider>
      </BoardsContextProvider>
      <Row className="row-nuevotema">
        <Col>
          <p>
            Como te has podido percatar, las funciones polinomiales son
            funciones que únicamente involucran sumas y productos, por lo que su
            dominio serán todos los números reales, mientras que su rango
            dependerá del tipo específico de función. Por ejemplo, las funciones
            de grado impar (lineales y cúbicas, etc.) siempre tienen por rango a
            todos los reales, mientras que las funciones de grado par
            (cuadráticas, de grado 4, etc.) tendrán rangos variables dependiendo
            del valor de sus parámetros <InlineMath>a</InlineMath>, <InlineMath>b</InlineMath>, etc.
          <br />
          <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FunPolinomiales;
