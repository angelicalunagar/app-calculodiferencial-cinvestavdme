import React from "react";
import { useState} from "react";
import { Row, Col, Container, Table} from "react-bootstrap";
import { InlineMath } from "react-katex";
import car from "../../assets/car.jpg";
import Act1 from "./Act1";
import Act2 from "./Act2";
import Act3 from "./Act3";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";

const VarDepYVarIndep = () => {
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

  return (
    <Container>
      <h4>Variable dependiente y variable independiente</h4>
      <Row className="row-car">
        <img src={car} alt="" />
      </Row>
      <Row className="row-nuevotema">
        <Col>
          <p>
            Imagina un automóvil de carreras que se mueve a <InlineMath>{" 2 \\, km"}</InlineMath> por cada minuto,
            es decir, su velocidad es <InlineMath>{" 2 \\, km/min"}</InlineMath>. Si han pasado <InlineMath>{" 2 \\, min"}</InlineMath> recorrerá {" "}
            <InlineMath>{"4 \\, km"}</InlineMath>, si pasan <InlineMath>{" 5 \\, min"}</InlineMath> recorrerá <InlineMath>{" 10 \\, km"}</InlineMath>, y así sucesivamente.
            <br />
            <br />
            Podemos pensar que el movimiento del automóvil se comporta como una
            máquina que para cada tiempo en minutos, devuelve la distancia
            recorrida en dicho tiempo (en <InlineMath>km</InlineMath>). Contesta la <b>Actividad 1.</b>
            <br />
            <br />
            En este caso, al tiempo y a la distancia recorrida se les llama
            variables porque son valores que pueden cambiar y además son
            codependientes, ya que el valor de una depende del valor de la otra,
            pero ¿quién depende de quién? ¿El tiempo depende de la distancia
            recorrida? o ¿la distancia recorrida depende del tiempo?
            <br />
            <br />
            Identificar que la distancia recorrida depende del tiempo que
            hallamos puesto a andar el auto es primordial para identificar la
            variable dependiente y la variable independiente.
            <br />
            <br />
            Si la{" "}
            <b>
              <em>variable dependiente</em>
            </b>{" "}
            es aquella cuyo valor depende de la otra variable, en el ejemplo del
            automóvil, la variable dependiente es la distancia recorrida, ya que esta dependerá de cuánto tiempo ha
            transcurrido. En este caso el tiempo es la{" "}
            <b>
              <em>variable independiente</em>
            </b>
            . Contesta la <b>Actividad 2.</b>
            <br />
            <br />
            
          </p>
        </Col>
        <br />
      
        <Act1 />
      </Row>
      <Act2 />
      <Row className="main-row">
        <Col>
          <p>
            Observemos entonces que siempre que existe codependencia entre dos
            variables, una de ellas es la variable dependiente y la otra es la
            variable independiente, y se dice que la variable dependiente es
            función de la variable independiente, lo cual significa simplemente
            que la variable dependiente “depende” de la variable independiente.
            Por ejemplo: si la distancia recorrida depende del tiempo que el
            automóvil ha viajado, se dice que la distancia{" "}
            <b>
              <em>es función</em>
            </b>{" "}
            (o es una función) del tiempo. Contesta <b>la actividad 3.</b>
          </p>
        </Col>
      </Row>
      <Act3 />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default VarDepYVarIndep;
