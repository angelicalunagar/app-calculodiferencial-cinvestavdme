import React from "react";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Act6 from "./Act6";

const EvaluarLaReglaDeCorrespon = () => {
  const [valuesEval, setValuesEval] = useState({
    eval_1_1: "",
    eval_1_2: "",
    eval_2_1: "",
    eval_2_2: "",
    eval_3_1: "",
    eval_3_2: "",
    eval_4_1: "",
    eval_4_2: "",
    eval_5_1: "",
    eval_5_2: "",
  });

  const handleEvalInputChange = (evalKey, value) => {
    //Función de filtro

    setValuesEval((prevValues) => ({
      ...prevValues,
      [evalKey]: value,
    }));
  };

  const [valuesTableAct6, setValuesTableAct6] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
  });

  const handleInputAct6 = (cell, value) => {
    setValuesTableAct6((prevValues) => ({
      ...prevValues,
      [cell]: value,
    }));
  };

  return (
    <Container>
      <h4>Evaluar la regla de correspondencia</h4>
      <Row className="main-row">
        <Col>
          <p>
            Recuerda que al principio cuando relacionamos dos variables sólo
            decíamos frases como “si una variable aumenta, la otra también
            aumenta” o “si una variable aumenta, la otra disminuye”. Ahora ya
            podemos dar cuenta numérica de eso si elaboramos una tabla. Por
            ejemplo, en el caso del heladero, sabemos que la expresión{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath> describe la ganancia en función
            del número de helados vendidos. Por lo tanto, podemos calcular{" "}
            <InlineMath>{"g(x)"}</InlineMath> para distintos valores de{" "}
            <InlineMath>{"x"}</InlineMath>.
          </p>
          <ul>
            <br />
            <li>
              Para 0 helados vendidos, sustituimos{" "}
              <InlineMath>{"x=0"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(0)=5(0)"}</BlockMath>
              <BlockMath>{"g(0)=0"}</BlockMath>
            </li>
            <li>
              Para 1 helado vendido, sustituimos{" "}
              <InlineMath>{"x=1"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(1)=5(1)=5"}</BlockMath>
            </li>
            <li>
              Para 2 helados vendidos, sustituimos{" "}
              <InlineMath>{"x=2"}</InlineMath> en{" "}
              <InlineMath>{"g(x)=5x"}</InlineMath>:
              <br />
              <BlockMath>{"g(2)=5(2)=10"}</BlockMath>
            </li>
          </ul>
          <p>
            Al proceso de asignar un valor a la variable{" "}
            <InlineMath>{"x"}</InlineMath> y realizar las operaciones que indica
            la regla de correspondencia para calcular la variable dependiente,{" "}
            <InlineMath>{"g(x)"}</InlineMath> en este caso, se llama{" "}
            <b>evaluar la regla de correspondencia.</b>
          </p>
        </Col>
      </Row>
      <Act6 />
      <Row className="main-row">
        <Col>
          <p>
            Observa que de la tabla podemos sacar algunas conclusiones valiosas,
            por ejemplo:
          </p>
          <ul>
            <li>
              A medida que la variable independiente{" "}
              <InlineMath>{"x"}</InlineMath> se incrementa, la variable
              dependiente <InlineMath>{"g(x)"}</InlineMath> también se
              incrementa. Recuerda que <InlineMath>{"x"}</InlineMath> es el
              número de helados vendidos y <InlineMath>{"g(x)"}</InlineMath> es
              la ganancia.
            </li>
            <br />
            <li>
              Hemos decidido que <InlineMath>{"x"}</InlineMath> adquiera valores
              desde <InlineMath>{"0"}</InlineMath> helados hasta{" "}
              <InlineMath>{"5"}</InlineMath> helados, pero hasta este momento no
              tenemos ningún impedimento para que <InlineMath>{"x"}</InlineMath>{" "}
              valga <InlineMath>{"100"}</InlineMath>,{" "}
              <InlineMath>{"300"}</InlineMath>, o cualquier otra cantidad
              helados.
            </li>
            <br />
            <li>
              A cada número de helados <InlineMath>{"x"}</InlineMath> le
              corresponde un único valor de ganancia{" "}
              <InlineMath>{"g(x)"}</InlineMath>. Por ejemplo, a{" "}
              <InlineMath>{"x=2"}</InlineMath> le corresponde{" "}
              <InlineMath>{"g(x)=10"}</InlineMath>, y a{" "}
              <InlineMath>{"x=5"}</InlineMath> le corresponde{" "}
              <InlineMath>{"g(x)=25"}</InlineMath>.
            </li>
          </ul>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
};

export default EvaluarLaReglaDeCorrespon;
