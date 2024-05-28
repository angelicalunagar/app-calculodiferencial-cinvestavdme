import React, { useState } from "react";
import { Button, Row, Col, Container, Table, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";

const Act1 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1: "",
    ru2: "",
    ru3: "",
    ru4: "",
    ru5: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1: false,
    ru2: false,
    ru3: false,
    ru4: false,
    ru5: false,
  });

  const retroalimentacion = {
    ru1: "3",
    ru2: "3",
    ru3: "7.4",
    ru4: "10",
    ru5: "14",
  };

  const toggleIcono = (key) => {
    setIconosPlus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleInputAct = (key, value) => {
    if (bloquearInput) return;
    setRespuestasUsuario((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const renderInput = (key) => (
    <>
      <input
        className="custom-input"
        type="number"
        value={respuestasUsuario[key]}
        onChange={(e) => handleInputAct(key, e.target.value)}
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
    </>
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
      ru1: "",
      ru2: "",
      ru3: "",
      ru4: "",
      ru5: "",
    });
    setIconosPlus({
      ru1: false,
      ru2: false,
      ru3: false,
      ru4: false,
      ru5: false,
    });
  };

  return (
    <>
        <Col className="actividad" md={5}>
          <p>
            <b>Actividad 1:</b>  Completa la siguiente tabla tomando en cuenta
            que tienes un automóvil con velocidad de <InlineMath>{" 2 \\, km/min"}</InlineMath>.
          </p>
          <Container className="cont-table-act1">
            <div className="tittle-table">
              <h6>Tabla 1</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Tiempo transcurrido <br />
                    (minutos)
                  </th>
                  <th>
                    Distancia recorrida <br />
                    (km)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1.5</td>
                  <td>
                  {renderInput("ru1")}
                    
                  </td>
                </tr>
                <tr>
                  <td>
                  {renderInput("ru2")}
                  </td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>3.7</td>
                  <td>
                  {renderInput("ru3")}
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  {renderInput("ru4")}
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>
                  {renderInput("ru5")}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
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
    </>
  );
};

export default Act1;
