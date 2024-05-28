import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BlockMath, InlineMath } from "react-katex";

import iceCreamMan from "../assets/iceCreamMan.jpg";

const ValoresVarIndep = () => {
  return (
    <Container>
      <h4>Valores que adquiere la variable independiente</h4>
      <Row className="main-row">
        <Col>
          <p>
            Siguiendo con el caso del heladero, cuyas ganancias{" "}
            <InlineMath>{"g(x)"}</InlineMath> están en función del número de
            helados vendidos <InlineMath>x</InlineMath> de acuerdo con la regla
            de correspondencia <InlineMath>{"g(x)=5x"}</InlineMath>, en la
            sección anterior tabulamos valores de <InlineMath>{"x"}</InlineMath>
            , desde <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"5"}</InlineMath>, con sus respectivos valores de{" "}
            <InlineMath>{"g(x)"}</InlineMath>.
            <br />
            <br />
            Pero ¿cuál es el valor máximo que <InlineMath>
              {"x"}
            </InlineMath>{" "}
            puede tomar? Técnicamente, el heladero comenta que el número máximo
            de helados que caben en su carrito es{" "}
            <InlineMath>{"200"}</InlineMath>. Por lo tanto,{" "}
            <InlineMath>{"x"}</InlineMath> puede tomar valores enteros desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"200"}</InlineMath>.
            <br />
            <br />
            ¿Por qué <InlineMath>{"x"}</InlineMath> no puede tomar valores como{" "}
            <InlineMath>{"2.3"}</InlineMath> ó <InlineMath>{"4/3"}</InlineMath>?
            Simplemente porque en el contexto del que estamos hablando, el
            heladero no puede vender <InlineMath>{"2.3"}</InlineMath> helados ó{" "}
            <InlineMath>{"4/3"}</InlineMath> de helado, sólo puede vender
            helados completos. Por lo tanto, la <b>totalidad de valores</b> que
            puede adquirir la variable independiente{" "}
            <InlineMath>{"x"}</InlineMath> es:
            <BlockMath>{"\\{0, 1, 2, 3, \\ldots, 199, 200\\}"}</BlockMath>
          </p>
        </Col>
        <Col className="col-iceCreamMan" md={5}>
          <img src={iceCreamMan} alt="" />
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ValoresVarIndep;
