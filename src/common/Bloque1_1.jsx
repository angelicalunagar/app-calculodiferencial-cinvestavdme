import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import "../styles/Bloque1_1.css";
import { Button, Fade, Form, Image } from "react-bootstrap";

const Bloque1_1 = () => {
  const [open, setOpen] = useState(false);

  const [valuesTable, setValuesTable] = useState({
    cell_22: "",
    cell_31: "",
    cell_42: "",
    cell_52: "",
    cell_62: "",
  });

  // Manejador de cambios para actualizar el estado cuando se introduce un valor
  const handleInputChange = (cell, value) => {
    setValuesTable((prevValues) => ({
      ...prevValues,
      [cell]: value,
    }));
  };

  const [valuesAct2, setValuesAct2] = useState({
    vd_1: "",
    vi_1: "",
    vd_2: "",
    vi_2: "",
    vd_3: "",
    vi_3: "",
  });

  const handleInputAct2 = (key, value) => {
    setValuesAct2((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const [valuesAct3, setValuesAct3] = useState({
    vd_1: "",
    vi_1: "",
    vd_2: "",
    vi_2: "",
    vd_3: "",
    vi_3: "",
  });
  const handleInputAct3 = (key, value) => {
    setValuesAct3((prevValues) => ({
      ...prevValues,
      [key]: value,
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



  const [selectedHeaders, setSelectedHeaders] = useState({
    header1: "Número que ingresa a la función",
    header2: "Número que devuelve la función",
  });

  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const handleSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

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

  

  const handleHeaderChange = (headerType, value) => {
    setSelectedHeaders((prevHeaders) => ({
      ...prevHeaders,
      [headerType]: value,
    }));
  };

  useEffect(() => {
    
    console.log("valuesTable:", valuesTable);
    
    console.log("Respuestas Act4", respuestasAct4);
    console.log("Respuestas Act5", respuestasAct5);
    console.log("Respuestas Act6", valuesTableAct6);
    console.log("Respuestas Act7", respuestasAct7);
    console.log("Respuestas Act9", respuestasAct9);
    console.log("Respuestas Preg1", opcionSelecPreg1);
    console.log("Respuestas Preg2", opcionSelecPreg2);
  
  }, [
   
    valuesTable,
    
    respuestasAct4,
    respuestasAct5,
    valuesTableAct6,
    respuestasAct7,
    respuestasAct9,
    opcionSelecPreg1,
    opcionSelecPreg2,
 

  ]);

  return (
    <Container>
   
    
      <Row>
        <Col>
          <h4>Dominio e imagen puntuales</h4>
          <h4>Dominio e imagen en intervalos</h4>
        </Col>
        <Col>{/* <VariacionFunciones /> */}</Col>
      </Row>
      <Row>
        <Fade in={open}>
          <Col md={6}>
            <p>
              En matemáticas se representan las funciones con letras, como{" "}
              <InlineMath>{"f"}</InlineMath>, <InlineMath>{"g"}</InlineMath>,{" "}
              <InlineMath>{"h"}</InlineMath>, etc. Del mismo modo, el número que
              ingresa a una función se denota generalmente con{" "}
              <InlineMath>{"x"}</InlineMath>, pero puede ser{" "}
              <InlineMath>{"a"}</InlineMath>, <InlineMath>{"t"}</InlineMath>,
              etc, y se acostumbra llamarla <b>variable independiente</b>.
              Finalmente, el número que devuelve la función se escribe como{" "}
              <InlineMath>{"f(x)"}</InlineMath>, llamado{" "}
              <b>variable dependiente</b>, ya que su valor depende del número
              que ingresaste a la función. Por ejemplo, para nuestro caso
              podríamos representar la función que duplica el número que recibe
              como:
            </p>

            <BlockMath>{"f(x)=2x"}</BlockMath>
            <p>
              Donde <InlineMath>{"f"}</InlineMath> es el nombre de esta función,{" "}
              <InlineMath>{"x"}</InlineMath> es el valor que recibe y{" "}
              <InlineMath>{"f(x)"}</InlineMath> es el valor que devuelve, que en
              nuestro contexto específico es <InlineMath>{"2x"}</InlineMath>{" "}
              porque devuelve el doble del número que ingresa. Concretamente, si{" "}
              <InlineMath>{"f"}</InlineMath> recibe el valor
              <InlineMath>{"-2"}</InlineMath>, es decir{" "}
              <InlineMath>{"x=-2"}</InlineMath>, el valor devuelto es{" "}
              <InlineMath>{"-4"}</InlineMath>, o sea
              <InlineMath>{"f(-2)= -4"}</InlineMath>:
              <BlockMath>{"f(-2) = 2(-2)"}</BlockMath>
              <BlockMath>{"f(-2) = -4"}</BlockMath>
              Si <InlineMath>{"f"}</InlineMath> recibe el valor{" "}
              <InlineMath>{"-1.5"}</InlineMath>, es decir{" "}
              <InlineMath>{"x=-1.5"}</InlineMath>, el valor devuelto es{" "}
              <InlineMath>{"-3"}</InlineMath>, o sea{" "}
              <InlineMath>{"f(-1.5)= -3"}</InlineMath>:
              <BlockMath>{"f(-1.5) = 2(-1.5)=-3"}</BlockMath>
            </p>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
};

export default Bloque1_1;
