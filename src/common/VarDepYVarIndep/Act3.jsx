import React, { useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";

const Act3 = () => {
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
    ru1_1: "la ganancia",
    ru1_2: "número de helados vendidos",
    ru2_1: "el dinero disponible",
    ru2_2: "los días de la quincena transcurridos",
    ru3_1: "el precio de un viaje en Uber",
    ru3_2: "la distancia recorrida",
  };

  const toggleIcono = (key) => {
    setIconosPlus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleInputAct3 = (key, value) => {
    if (bloquearInput) return;
    setRespuestasUsuario((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const renderInput = (key) => (
    <>
      <input
        className="input-act3"
        type="text"
        value={respuestasUsuario[key]}
        onChange={(e) => handleInputAct3(key, e.target.value)}
      />
      {mostrarIconos && (
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={popoverRight(retroalimentacion[key])}
        >
          <Button onClick={() => toggleIcono(key)}>
            {iconosPlus[key] ? <ImEyeMinus /> : <ImEyePlus />}
          </Button>
        </OverlayTrigger>
      )}
    </>
  );

  const popoverRight = (content) => (
    <Popover
      id="popover-positioned-bottom"
      title="Popover bottom"
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
    <div>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 3:</b> Completa los espacios en blanco:
          </p>
          <br />
          <ul>
            <li>
              Si la ganancia del heladero depende del número de helados
              vendidos, se dice que {renderInput("ru1_1")}{' '}
              es función (o es una función) de {renderInput("ru1_2")}
            </li>
            <br />
            <li>
              Si el dinero de Cristina depende de los días que han transcurrido
              a partir del cobro de la quincena, se dice que{" "}
              {renderInput("ru2_1")}{' '}
              es función (o es una función) de {renderInput("ru2_2")}
            </li>
            <br />
            <li>
              Si el precio final de un viaje en Uber depende de la distancia
              recorrida, se dice que {renderInput("ru3_1")}{' '}
              es función (o es una función) de{" "}
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

export default Act3;
