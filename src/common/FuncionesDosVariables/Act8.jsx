import React, { useState } from "react";
import { Button, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { InlineMath } from "react-katex";

const Act8 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1a_1: "",
    ru1a_2: "",
    ru1a_3: "",
    ru1a_4: "",
    ru1b_1: "",
    ru1b_2: "",
    ru1b_3: "",
    ru1b_4: "",
    ru1c_1: "",
    ru1c_2: "",
    ru1c_3: "",
    ru1c_4: "",
    ru2a_1: "",
    ru2a_2: "",
    ru2a_3: "",
    ru2a_4: "",
    ru2b_1: "",
    ru2b_2: "",
    ru2b_3: "",
    ru2b_4: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1a_1: false,
    ru1a_2: false,
    ru1a_3: false,
    ru1a_4: false,
    ru1b_1: false,
    ru1b_2: false,
    ru1b_3: false,
    ru1b_4: false,
    ru1c_1: false,
    ru1c_2: false,
    ru1c_3: false,
    ru1c_4: false,
    ru2a_1: false,
    ru2a_2: false,
    ru2a_3: false,
    ru2a_4: false,
    ru2b_1: false,
    ru2b_2: false,
    ru2b_3: false,
    ru2b_4: false,
  });

  const retroalimentacion = {
    ru1a_1: "150",
    ru1a_2: "75",
    ru1a_3: "0",
    ru1a_4: "5625",
    ru1b_1: "150",
    ru1b_2: "30",
    ru1b_3: "0",
    ru1b_4: "3600",
    ru1c_1: "0",
    ru1c_2: "150",
    ru1c_3: "0",
    ru1c_4: "5625",
    ru2a_1: "110",
    ru2a_2: "150",
    ru2a_3: "0",
    ru2a_4: "4400",
    ru2b_1: "0",
    ru2b_2: "150",
    ru2b_3: "0",
    ru2b_4: "5625",
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
      ru1a_1: "",
      ru1a_2: "",
      ru1a_3: "",
      ru1a_4: "",
      ru1b_1: "",
      ru1b_2: "",
      ru1b_3: "",
      ru1b_4: "",
      ru1c_1: "",
      ru1c_2: "",
      ru1c_3: "",
      ru1c_4: "",
      ru2a_1: "",
      ru2a_2: "",
      ru2a_3: "",
      ru2a_4: "",
      ru2b_1: "",
      ru2b_2: "",
      ru2b_3: "",
      ru2b_4: "",
    });
    setIconosPlus({
      ru1a_1: false,
      ru1a_2: false,
      ru1a_3: false,
      ru1a_4: false,
      ru1b_1: false,
      ru1b_2: false,
      ru1b_3: false,
      ru1b_4: false,
      ru1c_1: false,
      ru1c_2: false,
      ru1c_3: false,
      ru1c_4: false,
      ru2a_1: false,
      ru2a_2: false,
      ru2a_3: false,
      ru2a_4: false,
      ru2b_1: false,
      ru2b_2: false,
      ru2b_3: false,
      ru2b_4: false,
    });
  };

  return (
    <>
      
        <Col className="actividad" md={7}>
          <p>
            <b>Actividad 8.</b> Utiliza la ventana gráfica{" "}
            <InlineMath>{"2"}</InlineMath> para encontrar el dominio de{" "}
            <InlineMath>{"x"}</InlineMath> o de <InlineMath>{"y"}</InlineMath>,
            según se solicite, y la imagen de la función
            <InlineMath>{"A(x, y) = xy"}</InlineMath>. Recuerda que{" "}
            <InlineMath>{"x+y=150"}</InlineMath>.
          </p>
          <ul>
            <li>
              Determina el dominio de <InlineMath>{"y"}</InlineMath> y el rango
              de <InlineMath>{"A"}</InlineMath> para los siguientes dominios de{" "}
              <InlineMath>{"x"}</InlineMath>:
              <ul>
                <li>
                  <b>A)</b> Cuando el dominio de <InlineMath>{"x"}</InlineMath>{" "}
                  es <InlineMath>{"0 \\leq x \\leq 75"}</InlineMath>:
                  <br />
                  el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                  {renderInput("ru1a_1")}{" "}
                  <InlineMath>{"\\leq y \\leq"}</InlineMath>
                  {renderInput("ru1a_2")} <br />
                  <br />y la imagen de la función área es: <br />
                  {renderInput("ru1a_3")}{" "}
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  {renderInput("ru1a_4")}{" "}
                </li>
                <br />
                <br />
                <li>
                  <b>B)</b> Cuando{" "}
                  <InlineMath>{"0 \\leq x \\leq 120"}</InlineMath>, <br />
                  el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                  {renderInput("ru1b_1")}{" "}
                  <InlineMath>{"\\leq y \\leq"}</InlineMath>
                  {renderInput("ru1b_2")} <br />
                  <br />y la imagen de la función área es: <br />
                  {renderInput("ru1b_3")}{" "}
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  {renderInput("ru1b_4")}{" "}
                </li>
                <br />
                <br />
                <li>
                  <b>C)</b> Cuando{" "}
                  <InlineMath>{"0 \\leq x \\leq 150"}</InlineMath>, <br />
                  el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                  {renderInput("ru1c_1")}{" "}
                  <InlineMath>{"\\leq y \\leq"}</InlineMath>
                  {renderInput("ru1c_2")} <br />
                  <br />y la imagen de la función área es: <br />
                  {renderInput("ru1c_3")}{" "}
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  {renderInput("ru1c_4")}{" "}
                </li>
              </ul>
            </li>
            <br />
            <li>
              Determina el dominio de <InlineMath>{"x"}</InlineMath> y el rango
              de <InlineMath>{"A"}</InlineMath> para el siguiente dominio de{" "}
              <InlineMath>{"y"}</InlineMath>:
              <ul>
                <li>
                  <b>A)</b> Cuando{" "}
                  <InlineMath>{"0 \\leq y \\leq 40"}</InlineMath>, <br />
                  el dominio de <InlineMath>{"x"}</InlineMath> es:{" "}
                  {renderInput("ru2a_1")}{" "}
                  <InlineMath>{"\\leq x \\leq"}</InlineMath>
                  {renderInput("ru2a_2")} <br />
                  <br />y la imagen de la función área es: <br />
                  {renderInput("ru2a_3")}{" "}
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  {renderInput("ru2a_4")}{" "}
                </li>
                <br />
                <br />
                <li>
                  <b>B)</b> Cuando{" "}
                  <InlineMath>{"0 \\leq y \\leq 150"}</InlineMath>, <br />
                  el dominio de <InlineMath>{"x"}</InlineMath> es:{" "}
                  {renderInput("ru2b_1")}{" "}
                  <InlineMath>{"\\leq x \\leq"}</InlineMath>
                  {renderInput("ru2b_2")} <br />
                  <br />y la imagen de la función área es: <br />
                  {renderInput("ru2b_3")}{" "}
                  <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                  {renderInput("ru2b_4")}{" "}
                </li>
              </ul>
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
    </>
  );
};

export default Act8;
