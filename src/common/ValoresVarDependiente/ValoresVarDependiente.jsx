import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import { React, useState } from "react";
import { Row, Col, Container, Form }from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import QuizSub7 from "./QuizSub7";

const ValoresVarDependiente = () => {
  const [respuestasAct7, setRespuestasAct7] = useState({
    preg1_1: "",
    preg1_2: "",
    preg2_1: "",
    preg2_2: "",
    preg3_1: "",
    preg3_2: "",
  });

  const handleRespChangeAct7 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct7((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };
  return (
    <Container>
      <h4>Valores que adquiere la variable dependiente</h4>
      <Row className="main-row">
        <Col>
          <p>
            Continuemos con el caso del vendedor de helados. Nota que de acuerdo
            con la regla de correspondencia <InlineMath>{"g(x)=5x"}</InlineMath>
            , los valores que toma la ganancia <InlineMath>{"g(x)"}</InlineMath>{" "}
            , es decir, las distintas ganancias que puede tener el heladero,
            dependen del número de helados vendidos{" "}
            <InlineMath>{"x"}</InlineMath>. En la sección anterior determinamos
            que <InlineMath>{"x"}</InlineMath> puede valer desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"200"}</InlineMath>. Entonces, la{" "}
            <b>mínima ganancia</b> sucede caundo el heladero vende{" "}
            <InlineMath>{"0"}</InlineMath> helados:
            <BlockMath>{"g(0)=5(0)=0"}</BlockMath>Y la <b>máxima ganancia</b>{" "}
            sucede cuando el heladero vende <InlineMath>{"200"}</InlineMath>{" "}
            helados:
            <BlockMath>{"g(200)=5(200)=1000"}</BlockMath>
            Por lo que la ganancia <InlineMath>{"g(x)"}</InlineMath> va desde{" "}
            <InlineMath>{"0"}</InlineMath> hasta{" "}
            <InlineMath>{"1000"}</InlineMath> pesos, de{" "}
            <InlineMath>{"5"}</InlineMath> en <InlineMath>{"5"}</InlineMath>{" "}
            (como se aprecia en la Tabla 2):
            <BlockMath>{"\\{0, 5, 10, 15, \\ldots, 995, 1000\\}"}</BlockMath>
          </p>
        </Col>
      </Row>

      <QuizSub7 />

      <Row className="main-row">
        <Col>
          <p>
            Nota que cuando se tiene un conjunto de valores específicos como:{" "}
            <BlockMath>{"\\{0, 5, 10, 15, \\ldots, 995, 1000\\}"}</BlockMath>
            que representa los valores que puede adquirir la ganancia{" "}
            <InlineMath>g(x)</InlineMath> en el caso del heladero, la variable
            en cuestión no puede adquirir valores intermedios como{" "}
            <InlineMath>{"7.5"}</InlineMath> ya que para eso el heladero tendría
            que haber vendido <InlineMath>{"1.5"}</InlineMath> helados. Esto es,{" "}
            <InlineMath>{"g(x)"}</InlineMath> sólo puede adquirir cualquier
            valor del conjunto mencionado.
            <br />
            <br />
            Sin embargo, si se tiene un intervalo como{" "}
            <InlineMath>{"0 \\leq x \\leq 30"}</InlineMath>, que en el caso del
            taxi representa los valores que puede adquirir la distancia
            recorrida <InlineMath>{"x"}</InlineMath>, dicha variable puede tomar
            valores como <InlineMath>{" 1.5 \\, km"}</InlineMath>,{" "}
            <InlineMath>{" 7 \\, km"}</InlineMath>,{" "}
            <InlineMath>{" 29.4 \\, km"}</InlineMath>, y en general cualquier
            valor entre <InlineMath>{" 0 \\, km"}</InlineMath> y{" "}
            <InlineMath>{" 30 \\, km"}</InlineMath>, ya que todas son posibles
            distancias que el taxi puede recorrer.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ValoresVarDependiente;
