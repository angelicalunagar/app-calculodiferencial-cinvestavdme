import React from "react";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { InlineMath } from "react-katex";

const QueEsFuncion = () => {
  return (
    <Container>
      <h4>¿Qué es una función?</h4>
      <Row>
        <Col>
          <p>
            Ahora que comprendes que una regla de correspondencia es una
            expresión matemática que relaciona una variable independiente con
            una variable dependiente, definamos una función matemática:
            <br />
          </p>

          <p className="blockquote-custom">
            <em>
              "Una <b>función</b> es simplemente una{" "}
              <b>regla de correspondencia</b> que relaciona las variables
              independiente y dependiente. El conjunto de valores que la
              variable independiente puede tomar se llama <b>dominio</b> de la
              función, mientras que el conjunto de valores que la variable
              dependiente puede adquirir se conoce como su <b>imagen</b> o{" "}
              <b>rango</b>."
            </em>
          </p>

          <p>
            Es importante destacar que el concepto de función está constituido
            por tres elementos básicos: la regla de correspondencia, el dominio
            y el rango. Por lo tanto, definir una función implica conocer no
            solo la regla de correspondencia, sino también el dominio y el
            rango. Aunque a menudo se hace referencia a la regla de
            correspondencia como "función", es fundamental reconocer que la
            función está completamente definida solo cuando se conocen la regla
            el dominio y el rango.
            <br />
            <br />A continuación, se muestra un resumen de las funciones que
            hemos estudiado hasta aquí. Recuerda que el dominio y el rango de
            cada función se han definido de acuerdo al contexto.
          </p>
          <Container className="cont-table-act1">
            <div className="tittle-table">
              <h6>Tabla 3</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Funciones</th>
                  <th>Regla de correspondencia</th>
                  <th>Dominio</th>
                  <th>Rango</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Función g</td>
                  <td><InlineMath>g(x)=5x</InlineMath></td>
                  <td>
                    <span>&#123;</span>0, 1, 2, 3, . . . , 199, 200
                    <span>&#125;</span>
                  </td>
                  <td>
                    <span>&#123;</span>0, 5, 10, 15, . . . , 995, 1000
                    <span>&#125;</span>
                  </td>
                </tr>
                <tr>
                  <td>Función d</td>
                  <td><InlineMath>d(n)=4000-250n</InlineMath></td>
                  <td>
                    <span>&#123;</span>0, 1, 2, 3, . . . , 14, 15
                    <span>&#125;</span>
                  </td>
                  <td>
                    <span>&#123;</span>4000, 3750, 3500, 3250, . . . , 500, 250
                    <span>&#125;</span>
                  </td>
                </tr>
                <tr>
                  <td>Función p</td>
                  <td><InlineMath>p(x)=30+8.50x</InlineMath></td>
                  <td>0 ≤ x ≤ 30</td>
                  <td>30 ≤ p(x) ≤ 630</td>
                </tr>
                <tr>
                  <td>Función d</td>
                  <td><InlineMath>d(t)=2t</InlineMath></td>
                  <td>0 ≤ t ≤ 30</td>
                  <td>0 ≤ d(t) ≤ 60</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default QueEsFuncion;
