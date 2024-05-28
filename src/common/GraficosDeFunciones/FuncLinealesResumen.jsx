import React from "react";
import { InlineMath } from "react-katex";
import { Row, Col, Form, Button } from "react-bootstrap";

const FuncLinealesResumen = () => {
  const correctAnswers = {
    select1: "una línea recta",
    select2: "f(x)=mx+b",
    select3: "dependiente",
    select4: "independiente",
    select5: "qué tan inclinada es la recta",
    select6: "cruza al eje ‘y’",
    select7: "-\\infty < x < +\\infty",
    select8: "-\\infty < x < +\\infty",
  };

  return (
    <div>
      <Row>
        <Col>
          Toda función lineal tiene por gráfica a
          <Form.Select aria-label="Default select example" className="select1">
            <option>Open this select menu</option>
            <option value="una línea recta">una línea recta</option>
            <option value="una curva">una curva</option>
          </Form.Select>
          y su forma algebraica puede generalizarse como
          <Form.Select aria-label="Default select example" className="select2">
            <option>Open this select menu</option>
            <option value="f(x)=mx+b">
              <InlineMath>{"f(x)=mx+b"}</InlineMath>
            </option>
            <option value="f(x)=bx+m">
              <InlineMath>{"f(x)=bx+m"}</InlineMath>
            </option>
          </Form.Select>
          , donde f(x) representa a la variable
          <Form.Select aria-label="Default select example" className="select3">
            <option>Open this select menu</option>
            <option value="dependiente">dependiente</option>
            <option value="independiente">independiente</option>
          </Form.Select>
          y <InlineMath>x</InlineMath>representa a la variable
          <Form.Select aria-label="Default select example" className="select4">
            <option>Open this select menu</option>
            <option value="dependiente">dependiente</option>
            <option value="independiente">independiente</option>
          </Form.Select>
          .
          <br />
          <br />
          Por su parte, <InlineMath>m </InlineMath>es el coeficiente de{" "}
          <InlineMath>x</InlineMath> e indica
          <Form.Select aria-label="Default select example" className="select5">
            <option>Open this select menu</option>
            <option value="que tan inclinada es la recta">
              que tan inclinada es la recta
            </option>
            <option value="que tan lejos está la recta del origen">
              que tan lejos está la recta del origen
            </option>
          </Form.Select>
          y <InlineMath>b</InlineMath> es el término independiente de{" "}
          <InlineMath>x</InlineMath> e indica la coordenada{" "}
          <InlineMath>y</InlineMath> del punto donde la recta
          <Form.Select aria-label="Default select example" className="select6">
            <option>Open this select menu</option>
            <option value="cruza al eje y">
              cruza al eje <InlineMath>y</InlineMath>
            </option>
            <option value="cruza al eje x">
              cruza al eje <InlineMath>x</InlineMath>
            </option>
          </Form.Select>
          <br />
          <br />
          Toda función lineal, puesto que consiste en un producto mx y su suma
          con b (no posee restricciones para x), tiene por dominio
          <Form.Select aria-label="Default select example" className="select7">
            <option>Open this select menu</option>
            <option value="-\\infty < x < +\\infty">
              <InlineMath>{"-\\infty < x < +\\infty"}</InlineMath>
            </option>
            <option value="0 < x < +\\infty">
              <InlineMath>{"0 < x < +\\infty"}</InlineMath>
            </option>
          </Form.Select>
          <br />
          <br />
          Por otra parte, el rango de las funciones lineales es
          <Form.Select aria-label="Default select example" className="select8">
            <option>Open this select menu</option>
            <option value="-\\infty < x < +\\infty">
              <InlineMath>{"-\\infty < x < +\\infty"}</InlineMath>
            </option>
            <option value="0 < x < +\\infty">
              <InlineMath>{"0 < x < +\\infty"}</InlineMath>
            </option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
};

export default FuncLinealesResumen;
