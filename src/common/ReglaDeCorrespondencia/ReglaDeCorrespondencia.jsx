import { React, useState} from "react";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import {Row, Col, Form} from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";
import Quiz4 from "./Quiz4";
import Act5 from "./Act5";

const ReglaDeCorrespondencia = () => {
  const [opcionSelecPreg1, setOpcionSelecPreg1] = useState(null);
  const handleSelecPreg1 = (opcion) => {
    setOpcionSelecPreg1(opcion);
  };

  const [respuestasAct4, setRespuestasAct4] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
  });

  const handleRespChangeAct4 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct4((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  const [respuestasAct5, setRespuestasAct5] = useState({
    preg1a: "",
    preg1b: "",
    preg2a: "",
    preg2b: "",
    preg3a: "",
    preg3b: "",
  });

  const handleInputAct5 = (key, value) => {
    setRespuestasAct5((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };
  return (
    <Container>
          <h4>Regla de correspondencia</h4>
      <Row>
        <Col>
          <p>
            Hasta ahora, en las situaciones de la <b>Actividad 2</b>, sólo hemos
            identificado cuál es la variable dependiente y cuál es la variable
            independiente, y hemos dicho cómo se relacionan cualitativamente.
            Por ejemplo, en el caso del heladero, sabemos que entre más helados
            vende, más gana. Con esta información, ¿puedes saber cuánto gana si
            vende <InlineMath>20</InlineMath> helados?
          </p>
          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg1"
                value="a"
                checked={opcionSelecPreg1 === "a"}
                onChange={() => handleSelecPreg1("a")}
                label="Sí"
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg2"
                value="b"
                checked={opcionSelecPreg1 === "b"}
                onChange={() => handleSelecPreg1("b")}
                label="No"
              />
            </Form.Group>
          </Form>
          <p>
            Definitivamente no. Para responder esto necesitamos información
            cuantitativa (no sólo cualitativa) que relacione el número de
            helados vendidos con la ganancia. Pero si el heladero nos dice que
            gana <InlineMath>5</InlineMath> pesos por cada helado que vende, podemos calcular su
            ganancia:
            <br />
            <BlockMath>{"\\text{ganancia = 5 (número de helados)}"}</BlockMath>
            <br />
            Llamando <InlineMath>{"g"}</InlineMath> a la ganancia y{" "}
            <InlineMath>{"x"}</InlineMath> al número de helados, podemos
            escribir:
            <br />
            <BlockMath>{"g = 5x"}</BlockMath>
            <br />Y para hacer explícito que la ganancia{" "}
            <InlineMath>{"g"}</InlineMath> depende del número de helados{" "}
            <InlineMath>{"x"}</InlineMath>, en vez de escribir únicamente{" "}
            <InlineMath>{"g"}</InlineMath>, escribimos{" "}
            <InlineMath>{"g(x)"}</InlineMath>, que se lee “g de x”:
            <br />
            <BlockMath>{"g (x) = 5x"}</BlockMath>
            <br />
            Esta última expresión es una <b>regla de correspondencia</b> porque
            establece una correspondencia entre <InlineMath>{"2"}</InlineMath>{" "}
            variables (relación entre <InlineMath>{"2"}</InlineMath> variables),
            a saber, la ganancia <InlineMath>{"g(x)"}</InlineMath> y el número
            de helados <InlineMath>{"x"}</InlineMath>. La expresión{" "}
            <InlineMath>{"g(x)= 5x"}</InlineMath> nos dice que a cada valor que
            le asignemos a <InlineMath>{"x"}</InlineMath> le corresponde un
            valor <InlineMath>{"g(x)"}</InlineMath> que se calcula multiplicando{" "}
            <InlineMath>{"x"}</InlineMath> por <InlineMath>{"5"}</InlineMath>.
          </p>
        </Col>
      </Row>
      <Quiz4 />
      <Row className="main-row">
        <Col>
          <p>
            La regla de correspondencia nos permiten calcular el valor de una
            variable cuando conocemos el valor de la otra. Siguiendo con el
            ejemplo del heladero, ahora que conocemos la relación{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath>, podemos responder a la
            pregunta ¿Cuánto gana si vende <InlineMath>{"20"}</InlineMath>{" "}
            helados? En esta pregunta, claramente conocemos a la variable
            independiente No. de helados, o sea{" "}
            <InlineMath>{"x=20"}</InlineMath>, y lo que nos están preguntando es
            el valor de la variable dependiente ganancia{" "}
            <InlineMath>{"g(x)"}</InlineMath>. Es decir, basta con sustituir{" "}
            <InlineMath>{"x"}</InlineMath> por <InlineMath>{"20"}</InlineMath>{" "}
            en la regla de correspondencia para calcular la ganancia:
            <br />
            <BlockMath>{"g(x)=5x"}</BlockMath>
            <BlockMath>{"g(20)=5(20)"}</BlockMath>
            <BlockMath>{"g(20)=100"}</BlockMath>
            Observa que <InlineMath>{"g(20)"}</InlineMath> sólo es una notación
            que se usa para indicar que estamos calculando la ganancia cuando se
            venden <InlineMath>{"20"}</InlineMath> helados. Pero como dijimos,
            siempre que nos dan el valor de una de las variables, podemos saber
            el de la otra. Entonces también podríamos saber el número de helados
            vendidos si nos dicen que en total la ganancia del heladero fue de{" "}
            <InlineMath>{"\\$85.00"}</InlineMath>, es decir{" "}
            <InlineMath>{"g(x)=85"}</InlineMath>. Para resolver esto basta con
            sustituir <InlineMath>{"g(x)"}</InlineMath> por{" "}
            <InlineMath>{"85"}</InlineMath> en la regla de correspondencia y
            despejar <InlineMath>{"x"}</InlineMath> (número de helados):
            <BlockMath>{"g(x)=5x"}</BlockMath>
            <BlockMath>{"85 = 5x"}</BlockMath>
            <BlockMath>{"x=85/5"}</BlockMath>
            <BlockMath>{"x=17"}</BlockMath>
            Esto es, para obtener <InlineMath>85</InlineMath> pesos de ganancia, el heladero tuvo que
            haber vendido <InlineMath>17</InlineMath> helados.
          </p>
        </Col>
      </Row>
      <Act5 />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReglaDeCorrespondencia