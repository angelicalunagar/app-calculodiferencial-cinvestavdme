import React, { useState } from "react";
import { Button, Col, Row, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import "../../styles/Bloque1_1.css";
import { InlineMath } from "react-katex";

const Act12 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru3_1: "",
    ru3_2: "",
    ru4_1: "",
    ru4_2: "",
    ru5_1: "",
    ru5_2: "",
    ru6_1: "",
    ru6_2: "",
    ru7_1: "",
    ru7_2: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru3_1: false,
    ru3_2: false,
    ru4_1: false,
    ru4_2: false,
    ru5_1: false,
    ru5_2: false,
    ru6_1: false,
    ru6_2: false,
    ru7_1: false,
    ru7_2: false,
  });

  const retroalimentacion = {
    ru3_1: "10",
    ru3_2: "115",
    ru4_1: "15",
    ru4_2: "157.5",
    ru5_1: "20",
    ru5_2: "200",
    ru6_1: "25",
    ru6_2: "242.5",
    ru7_1: "30",
    ru7_2: "285",
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
        className="input-act8"
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
      ru3_1: "",
      ru3_2: "",
      ru4_1: "",
      ru4_2: "",
      ru5_1: "",
      ru5_2: "",
      ru6_1: "",
      ru6_2: "",
      ru7_1: "",
      ru7_2: "",
    });
    setIconosPlus({
      ru3_1: false,
      ru3_2: false,
      ru4_1: false,
      ru4_2: false,
      ru5_1: false,
      ru5_2: false,
      ru6_1: false,
      ru6_2: false,
      ru7_1: false,
      ru7_2: false,
    });
  };

  return (
    <>
      <Row>
        <Col className="actividad" /* sm={12} md={9} xl={6} */>
          <p>
            <b>Actividad 12:</b> Tomando en cuenta los datos de la Tabla 5,
            completa la siguiente información:
          </p>
          <ul>
            <li className="liAct-4">
              <InlineMath>{"0"}</InlineMath> y <InlineMath>{"f(0)"}</InlineMath>{" "}
              se pueden graficar como el punto{" "}
              <InlineMath>{"A=(0, 30)"}</InlineMath>
            </li>
            <li className="liAct-4">
              <InlineMath>{"5"}</InlineMath> y <InlineMath>{"f(5)"}</InlineMath>{" "}
              se pueden graficar como el punto <br />
              <span style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
              <InlineMath>{"B=(5, 72.5)"}</InlineMath>
              </span>
              
            </li>
            <li className="liAct-4">
              <InlineMath>{"10"}</InlineMath> y{" "}
              <InlineMath>{"f(10)"}</InlineMath> se pueden graficar como el
              punto
              <br />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InlineMath>{"C=("}</InlineMath>
                {renderInput("ru3_1")} ,{renderInput("ru3_2")}{" "}
                <InlineMath>{")"}</InlineMath>
              </span>
            </li>
            <li className="liAct-4">
              <InlineMath>{"15"}</InlineMath> y{" "}
              <InlineMath>{"f(15)"}</InlineMath> se pueden graficar como el
              punto
              <br />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InlineMath>{"D=("}</InlineMath>
                {renderInput("ru4_1")} ,{renderInput("ru4_2")}{" "}
                <InlineMath>{")"}</InlineMath>
              </span>
            </li>
            <li className="liAct-4">
              <InlineMath>{"20"}</InlineMath> y{" "}
              <InlineMath>{"f(20)"}</InlineMath> se pueden graficar como el
              punto
              <br />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InlineMath>{"E=("}</InlineMath>
                {renderInput("ru5_1")} ,{renderInput("ru5_2")}{" "}
                <InlineMath>{")"}</InlineMath>
              </span>
            </li>
            <li className="liAct-4">
              <InlineMath>{"25"}</InlineMath> y{" "}
              <InlineMath>{"f(25)"}</InlineMath> se pueden graficar como el
              punto
              <br />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InlineMath>{"F=("}</InlineMath>
                {renderInput("ru6_1")} ,{renderInput("ru6_2")}{" "}
                <InlineMath>{")"}</InlineMath>
              </span>
            </li>
            <li className="liAct-4">
              <InlineMath>{"30"}</InlineMath> y{" "}
              <InlineMath>{"f(30)"}</InlineMath> se pueden graficar como el
              punto
              <br />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InlineMath>{"G=("}</InlineMath>
                {renderInput("ru7_1")} ,{renderInput("ru7_2")}{" "}
                <InlineMath>{")"}</InlineMath>
              </span>
            </li>
            y en general:
            <p>
              <br />
              <InlineMath>{"x"}</InlineMath> y <InlineMath>{"f(x)"}</InlineMath>{" "}
              se puede graficar como el punto <br />
              <InlineMath>{"P(x, y)"}</InlineMath>.
            </p>
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
    </>
  );
};

export default Act12;
