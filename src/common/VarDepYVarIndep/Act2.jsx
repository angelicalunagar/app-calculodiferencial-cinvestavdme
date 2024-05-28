import React, { useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";

const Act2 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1_1: "",
    ru1_2: "",
    ru2_1: "",
    ru2_2: "",
    ru3_1: "",
    ru3_2: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1_1: false,
    ru1_2: false,
    ru2_1: false,
    ru2_2: false,
    ru3_1: false,
    ru3_2: false,
  });

  const retroalimentacion = {
    ru1_1: "ganancia",
    ru1_2: "número de helados vendidos",
    ru2_1: "dinero disponible",
    ru2_2: "días de la quincena transcurridos",
    ru3_1: "precio de un viaje en Uber",
    ru3_2: "distancia recorrida",
  };

  const toggleIcono = (key) => {
    setIconosPlus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleInputAct2 = (key, value) => {
    if (bloquearInput) return;
    setRespuestasUsuario((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const renderInput = (key, label) => (
    <label>
      {label}:
      <input
        className="input-act2"
        type="text"
        value={respuestasUsuario[key]}
        onChange={(e) => handleInputAct2(key, e.target.value)}
      />
      {mostrarIconos && (
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverRight(retroalimentacion[key])}
        >
          <Button onClick={() => toggleIcono(key)}>
            {iconosPlus[key] ? <ImEyeMinus /> : <ImEyePlus />}
          </Button>
        </OverlayTrigger>
      )}
    </label>
  );

  const popoverRight = (content) => (
    <Popover
      id="popover-positioned-right"
      title="Popover right"
      style={{ padding: "5px", justifyItems: "center", alignItems: "center" }}
    >
      {content}
    </Popover>
  );

  const revisarRespuestas = () => {
    setBloquearInput(true);
    setMostrarIconos(true);
  };




  const modificarRespuestas = () => {
    setMostrarIconos(false);
    setBloquearInput(false);
    setRespuestasUsuario({
      ru1_1: "",
      ru1_2: "",
      ru2_1: "",
      ru2_2: "",
      ru3_1: "",
      ru3_2: "",
    });
    setIconosPlus({
      ru1_1: false,
      ru1_2: false,
      ru2_1: false,
      ru2_2: false,
      ru3_1: false,
      ru3_2: false,
    });
  };

  return (
    <div style= {{marginTop: "3rem"}}>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 2:</b> En las siguientes situaciones, identifica la
            variable dependiente y a la variable independiente.
          </p>
          <br />
          <ul>
            <li>
              <em>
                Mi vecino es heladero y me ha comentado que su ganancia aumenta
                a medida que incrementa la cantidad de helados vendidos.
              </em>
              <br />
              {renderInput("ru1_1", "Variable dependiente")}
              <br />
              {renderInput("ru1_2", "Variable independiente")}
            </li>
            <br />
            <li>
              <em>
                Cristina comienza la quincena con una cantidad de dinero, pero a
                medida que pasan los días, su dinero va disminuyendo.
              </em>
              <br />
              {renderInput("ru2_1", "Variable dependiente")}
              <br />
              {renderInput("ru2_2", "Variable independiente")}
            </li>
            <br />
            <li>
              <em>
                Raúl observa que el Uber le cobra más cuando la distancia
                recorrida es mayor.
              </em>
              <br />
              {renderInput("ru3_1", "Variable dependiente")}
              <br />
              {renderInput("ru3_2", "Variable independiente")}
            </li>
          </ul>
          <div className="button-center">
            {bloquearInput ? (
              <Button onClick={modificarRespuestas}>
                Modificar respuestas
              </Button>
            ) : (
              <Button onClick={revisarRespuestas}>Revisar respuestas</Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Act2;
