import React, { useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { BlockMath, InlineMath } from "react-katex";

const Act5 = () => {
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
    ru1_1: "1500 pesos",
    ru1_2: "5 días",
    ru2_1: "180 pesos",
    ru2_2: "3.2 km",
    ru3_1: "13 km",
    ru3_2: "11.3 min",
  };

  const toggleIcono = (key) => {
    setIconosPlus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleInputAct5 = (key, value) => {
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
        className="input-act5"
        type="text"
        value={respuestasUsuario[key]}
        onChange={(e) => handleInputAct5(key, e.target.value)}
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
    <div>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 5:</b> Calcula el valor de la variable dependiente y la
            variable independiente según cada situación.
          </p>
          <br />
          <ul>
            <li>
              <b>
                Durante la quincena, el dinero <InlineMath>d(n)</InlineMath> de
                Cristina depende del número de días n que pasan de acuerdo con
                la regla de correspondencia{" "}
                <InlineMath>d(n)=4000-250n</InlineMath>. Nota que, si han
                transcurrido 0 días, Cristina tendrá 4000 pesos.
              </b>
              <br />
              {renderInput(
                "ru1_1",
                <span>
                  a) ¿Cuánto dinero le queda a Cristina, transcurridos 10 días?"
                </span>
              )}
              <br />
              {renderInput(
                "ru1_2",
                <span>
                  b) Si hasta ahora a Cristina le quedan $2750.00, cuántos días
                  han transcurrido desde el pago de la quincena.
                </span>
              )}
            </li>
            <br />
            <li>
              <b>
                Un taxi calcula el precio de sus viajes en función de la
                distancia recorrida de acuerdo con la expresión{" "}
                <InlineMath>p(x)=30+20x</InlineMath>.
              </b>
              <br />
              {renderInput(
                "ru2_1",
                "a) ¿Cuánto cobra el taxi si el viaje de un cliente es de 7.5 km?"
              )}
              <br />
              {renderInput(
                "ru2_2",
                "b) ¿Si el taxi me ha cobrado 94 pesos, cuántos kilómetros recorrió?"
              )}
            </li>
            <br />
            <li>
              <b>
                La distancia recorrida (en km) de un automóvil de carreras es
                función del tiempo transcurrido (en min) de acuerdo con la
                expresión <InlineMath>d(t)=2t</InlineMath>.
              </b>
              <br />
              {renderInput(
                "ru3_1",
                "a) ¿Qué distancia ha recorrido el automóvil en 6.5 minutos?"
              )}
              <br />
              {renderInput(
                "ru3_2",
                " b) ¿Si la distancia recorrida es de 22.6 km, cuántos minutos ha estado andando el automóvil?"
              )}
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

export default Act5;
