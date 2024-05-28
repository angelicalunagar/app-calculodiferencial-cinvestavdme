import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";


const NomenclaturaFunciones = () => {
  return (
    <Container>
      <h4>Nomenclatura de las funciones</h4>
      <Row>
        <Col>
          <p>
            "Por lo general, cuando representamos una función matemática,
            utilizamos letras como <InlineMath>{"g"}</InlineMath> para denotar
            ganancia, <InlineMath>{"d"}</InlineMath> para dinero o distancia, y{" "}
            <InlineMath>p</InlineMath> para precio. Respecto a la variable independiente, empleamos
            letras como <InlineMath>{"d"}</InlineMath> para el número de días y{" "}
            <InlineMath>{"t"}</InlineMath> para el tiempo. Y finalmente, en
            cuanto a la variable dependiente, utilizamos{" "}
            <InlineMath>{"g(n)"}</InlineMath> para indicar que la ganancia
            depende del número de helados, y <InlineMath>{"d(t)"}</InlineMath>
            para mostrar que la distancia recorrida depende del tiempo.
            <br />
            <br />
            Sin embargo, dado que a menudo se utiliza una función sin contexto,
            se recurre a <InlineMath>{"f"}</InlineMath> para representar una
            función genérica, <InlineMath>{"x"}</InlineMath> para la variable
            independiente y <InlineMath>{"f(x)"}</InlineMath> para la variable
            dependiente."
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default NomenclaturaFunciones