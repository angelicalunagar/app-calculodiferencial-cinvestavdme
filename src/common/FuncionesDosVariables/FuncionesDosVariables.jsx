import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import { React, useState, useEffect } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";
import Rectangulo from "./Rectangulo";
import RectanguloArea from "./RectanguloArea";
import milkBoxWhite from "../../assets/milkBoxWhite.png";
import Quiz9 from "./Quiz9";
import Act8 from "./Act8";

const FuncionesDosVariables = () => {
  const [respuestasAct8, setRespuestasAct8] = useState({
    preg1a_1: "",
    preg1a_2: "",
    preg1a_3: "",
    preg1a_4: "",
    preg1b_1: "",
    preg1b_2: "",
    preg1b_3: "",
    preg1b_4: "",
    preg1c_1: "",
    preg1c_2: "",
    preg1c_3: "",
    preg1c_4: "",
    preg2a_1: "",
    preg2a_2: "",
    preg2a_3: "",
    preg2a_4: "",
    preg2b_1: "",
    preg2b_2: "",
    preg2b_3: "",
    preg2b_4: "",
  });

  const handleInputAct8 = (key, value) => {
    setRespuestasAct8((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const [opcionSelecPreg1, setOpcionSelecPreg1] = useState(null);
  const handleSelecPreg1 = (opcion) => {
    setOpcionSelecPreg1(opcion);
  };

  const [opcionSelecPreg2, setOpcionSelecPreg2] = useState(null);
  const handleSelecPreg2 = (opcion) => {
    setOpcionSelecPreg2(opcion);
  };

  const [respuestasAct9, setRespuestasAct9] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
    preg5: "",
  });

  const handleRespChangeAct9 = (e, preg) => {
    const { value } = e.target;
    setRespuestasAct9((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };

  useEffect(() => {
    console.log("Respuestas Act8", respuestasAct8);
    console.log("Respuestas Act9", respuestasAct9);
    console.log("Respuestas Preg1", opcionSelecPreg1);
    console.log("Respuestas Preg2", opcionSelecPreg2);
  }, [respuestasAct8, respuestasAct9, opcionSelecPreg1, opcionSelecPreg2]);

  return (
    <Container>
      <h4>Funciones de dos variables</h4>
      <Row className="main-row">
        <Col>
          <p>
            Existen situaciones en las cuáles puede haber{" "}
            <InlineMath>{"2"}</InlineMath> variables independientes y una
            variable dependiente. Por ejemplo:
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <div className="tittle-table">
            <h6>Ventana gráfica 1</h6>
          </div>
          <Rectangulo />
        </Col>
        <Col md={7}>
          <p>
            Un granjero hará un corral rectangular para las gallinas como el que
            se muestra a la izquierda y quiere calcular el área de dicho corral.
            Nombrando <InlineMath>{"x"}</InlineMath> a uno de los lados, y{" "}
            <InlineMath>{"y"}</InlineMath> al otro, la regla de correspondencia
            que calcula el área es:
            <BlockMath>{"A(x, y)=xy"}</BlockMath>
            Ya que el área de un rectángulo se calcula multiplicando su largo
            por su ancho. Recuerda que la notación{" "}
            <InlineMath>{"A(x, y)"}</InlineMath> sólo indica que el área depende
            de los valores <InlineMath>{"x"}</InlineMath> e{" "}
            <InlineMath>{"y"}</InlineMath>.
            <br />
            <br />
            ¿Cuál es el dominio de <InlineMath>{"x"}</InlineMath> y cuál es el
            dominio de <InlineMath>{"y"}</InlineMath>? hasta ahora tanto{" "}
            <InlineMath>{"x"}</InlineMath> como y podrían valer cualquier número
            positivo porque el granjero no ha mencionado limitaciones del
            terreno en el cuál construirá su corral ni limitaciones económicas.
          </p>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            No obstante, el granjero indica que únicamente cuenta con{" "}
            <InlineMath>{"300 \\, m"}</InlineMath> de cerca para construir el corral.
            Sabemos entonces que el perímetro del corral es de{" "}
            {"                                   "}
            <InlineMath>{"300 \\, m"}</InlineMath>, lo que significa que:
            <br />
            <BlockMath>{"2x+2y=300"}</BlockMath>Es decir:
            <BlockMath>{"x+y=150"}</BlockMath>
            El corral que se ha dibujado en la <em><b>Ventana gráfica 1</b></em> cumple
            con la condición de que su perímetro es{" "}
            <InlineMath>{"300 \\, m"}</InlineMath>, o lo que es lo mismo, la suma de
            los lados <InlineMath>{"x"}</InlineMath> y{" "}
            <InlineMath>{"y"}</InlineMath> es <InlineMath>{"150"}</InlineMath>.
            <br />
            <br />
            Si el lado <InlineMath>x</InlineMath> del terreno sólo puede ocupar hasta <InlineMath>{"40 \\, m"}</InlineMath>, entonces:
            <BlockMath>{"0 \\leq x \\leq 40"}</BlockMath>
            podemos determinar el dominio de <InlineMath>{"y"}</InlineMath>{" "}
            deslizando el punto <InlineMath>{"B"}</InlineMath> sobre el eje{" "}
            <InlineMath>{"x"}</InlineMath> (<em><b>Ventana gráfica 1</b></em>), empezando
            desde cero hasta llegar a <InlineMath>{"40"}</InlineMath>. ¿Qué
            valores adquirió la variable <InlineMath>{"y"}</InlineMath>?{" "}
            <InlineMath>{"y"}</InlineMath> empezó en{" "}
            <InlineMath>{"150"}</InlineMath> (cuando{" "}
            <InlineMath>{"x=0"}</InlineMath>) y fue disminuyendo hasta llegar a{" "}
            <InlineMath>{"110"}</InlineMath> (cuando{" "}
            <InlineMath>{"x=40"}</InlineMath>). Por lo tanto, el dominio de{" "}
            <InlineMath>{"y"}</InlineMath> es:
            <BlockMath>{"150 \\geq y \\geq 110"}</BlockMath>. Y ¿cuál es la
            imagen de la función área? Observa que cuando{" "}
            <InlineMath>{"x=0"}</InlineMath>, <InlineMath>{"y=150"}</InlineMath>{" "}
            y en consecuencia el área es:
            <BlockMath>{"A(x,y)=xy"}</BlockMath>
            <BlockMath>{"A(0, 150)=0*150=0"}</BlockMath>Y cuando{" "}
            <InlineMath>{"x=40"}</InlineMath>,{" "}
            <InlineMath>{"y=110"}</InlineMath>, y el área es:
            <BlockMath>{"A(x,y)=xy"}</BlockMath>
            <BlockMath>{"A(40, 110)=40*110=4400"}</BlockMath>
            Por lo que el área ha aumentado de <InlineMath>
              {"0"}
            </InlineMath>{" "}
            hasta <InlineMath>{" 4400 \\,  \\text{m}^2 "}</InlineMath>, es
            decir, la imagen de la función es:{" "}
            <BlockMath>{"0 \\leq A(x, y) \\leq 4400"}</BlockMath>
          </p>
        </Col>
      </Row>
      <Row className="row-nuevotema">
        <Act8 />
        <Col md={4}>
          <div className="sticky">
            <div className="tittle-table">
              <h6>Ventana gráfica 2</h6>
            </div>
            <RectanguloArea />
          </div>
        </Col>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Nota que debido a que el área <InlineMath>{"A"}</InlineMath> es una
            función de <InlineMath>{"2"}</InlineMath> variables independientes,
            pero dependientes entre sí (ya que{" "}
            <InlineMath>{"x+y=150"}</InlineMath>), el dominio de la variable{" "}
            <InlineMath>{"x"}</InlineMath> depende del dominio de la variable{" "}
            <InlineMath>{"y"}</InlineMath>, y viceversa, por lo que basta con
            fijar el dominio de una para obtener el dominio de la otra, y a su
            vez determinar la imagen del área <InlineMath>{"A"}</InlineMath>.
            <br />
            <br />
            Puesto que estamos trabajando con funciones de una variable, cuando
            tengamos funciones de dos variables será preferible buscar una
            relación entre las variables dependientes para hacer que la función
            en cuestión sólo dependa únicamente de una de ellas. Por ejemplo, en
            el caso de de la función área <InlineMath>{"A(x, y)"}</InlineMath>,
            la relación entre las variables independientes{" "}
            <InlineMath>{"x"}</InlineMath> y <InlineMath>{"y"}</InlineMath> es:
            <BlockMath>{"x+y=150"}</BlockMath>.
            <br />
            Ahora despejaremos una de ellas, en este caso{" "}
            <InlineMath>{"y"}</InlineMath>:<BlockMath>{"x+y=150"}</BlockMath>
            <BlockMath>{"y=150-x"}</BlockMath>
            Obteniendo como resultado a la variable{" "}
            <InlineMath>{"y"}</InlineMath> en función de{" "}
            <InlineMath>{"x"}</InlineMath>, lo que nos permite sustituirla en la
            función del área, de modo que esta última dependa únicamente de la
            variable <InlineMath>{"x"}</InlineMath>:
            <BlockMath>{"A(x, y)=xy"}</BlockMath>
            <BlockMath>{"A(x)=x(150-x)"}</BlockMath>
            <BlockMath>{"A(x)=150x-x^2"}</BlockMath>
            ¿Cuál es el dominio de esta nueva función? ¿Cuál es el rango?
            Recuerda la relación <InlineMath>{"x+y=150"}</InlineMath>. Ésta nos
            permite determinar cuáles son los valores mínimo y máximo de{" "}
            <InlineMath>{"x"}</InlineMath>, es decir, permite determinar que el
            dominio de <InlineMath>{"x"}</InlineMath> es:
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
                label={<InlineMath>{"0 \\leq x \\leq 40"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg1"
                value="b"
                checked={opcionSelecPreg1 === "b"}
                onChange={() => handleSelecPreg1("b")}
                label={<InlineMath>{"0 \\leq x \\leq 150"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg1"
                value="c"
                checked={opcionSelecPreg1 === "c"}
                onChange={() => handleSelecPreg1("c")}
                label={<InlineMath>{"0 \\leq x \\leq 300"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            <br />
            <br />
            En cuanto al rango, aún cuando <InlineMath>
              {"A(0)=0"}
            </InlineMath> y <InlineMath>{"A(150)=0"}</InlineMath>, eso no
            significa que el rango sea{" "}
            <InlineMath>{"0 \\leq A(x) \\leq 0"}</InlineMath>. Utilizando la{" "}
            <em><b>Ventana gráfica 2</b></em> determina cuál es el rango de la función área y
            selecciona la respuesta:
          </p>

          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg2"
                value="a"
                checked={opcionSelecPreg2 === "a"}
                onChange={() => handleSelecPreg2("a")}
                label={<InlineMath>{"0 \\leq A(x) \\leq 150"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg2"
                value="b"
                checked={opcionSelecPreg2 === "b"}
                onChange={() => handleSelecPreg2("b")}
                label={<InlineMath>{"0 \\leq A(x) \\leq 5000"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg2"
                value="c"
                checked={opcionSelecPreg2 === "c"}
                onChange={() => handleSelecPreg2("c")}
                label={<InlineMath>{"0 \\leq A(x) \\leq 5625"}</InlineMath>}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="row-nuevotema">
        <Col md={3}>
          <img src={milkBoxWhite} alt="" className="img-fluid sticky" />
        </Col>
        <Col>
          <Quiz9 />
        </Col>
      </Row>

      <Row className="main-row">
        <Col>
          <p>
            Como puedes ver, en muchos casos, cuando se tiene una función de dos
            o más variables, se busca reducir dicha función a una sola variable
            usando condiciones que relacionen a las variables independientes
            entre sí.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default FuncionesDosVariables;
