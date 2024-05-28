import React, { useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { BlockMath, InlineMath } from "react-katex";

const Act10 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1_1: "",
    ru1_2: "",
    ru2_1: "",
    ru2_2: "",
    ru3_1: "",
    ru3_2: "",
    ru4_1: "",
    ru4_2: "",
    ru5_1: "",
    ru5_2: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1_1: false,
    ru1_2: false,
    ru2_1: false,
    ru2_2: false,
    ru3_1: false,
    ru3_2: false,
    ru4_1: false,
    ru4_2: false,
    ru5_1: false,
    ru5_2: false,
  });

  const retroalimentacion = {
    ru1_1: (<span><InlineMath>10</InlineMath></span>),
    ru1_2: "115",
    ru2_1: "15",
    ru2_2: "157.5",
    ru3_1: "20",
    ru3_2: "200",
    ru4_1: "25",
    ru4_2: "242.5",
    ru5_1: "30",
    ru5_2: "285",
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
        className="input-eval"
        type="number"
        value={respuestasUsuario[key]}
        onChange={(e) => handleInputAct3(key, e.target.value)}
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
      ru1_1: "",
      ru1_2: "",
      ru2_1: "",
      ru2_2: "",
      ru3_1: "",
      ru3_2: "",
      ru4_1: "",
      ru4_2: "",
      ru5_1: "",
      ru5_2: "",
    });
    setIconosPlus({
      ru1_1: false,
      ru1_2: false,
      ru2_1: false,
      ru2_2: false,
      ru3_1: false,
      ru3_2: false,
      ru4_1: false,
      ru4_2: false,
      ru5_1: false,
      ru5_2: false,
    });
  };

  return (
    <div>
      <Row className="row-act">
      <Col className="actividad" md={10}>
          <p>
            <b>Actividad 10:</b>. El taxista se encuentra evaluando la función{" "}
            <InlineMath>{"p(x)=30 + 8.5x"}</InlineMath> en{" "}
            <InlineMath>{"x=0, 5, 10, 15, 20, 25, 30"}</InlineMath>. Completa
            los cálculos que le faltan.
          </p>

          <BlockMath>{`f(0) = 30 + 8.5(0)=30+0=30`}</BlockMath>
          <BlockMath>{`f(5) = 30 + 8.5(5)=30+42.5=72.5`}</BlockMath>

          <div className="center-act10">
            <InlineMath>{`f(10) = 30 + 8.5(`}</InlineMath>
            {renderInput("ru1_1")}{' '}
            <InlineMath>{`) = `}</InlineMath>
            {renderInput("ru1_2")}{' '}
            <br />
            <br />

            <InlineMath>{`f(15) = 30 + 8.5(`}</InlineMath>
            {renderInput("ru2_1")}{' '}
            <InlineMath>{`) = `}</InlineMath>
            {renderInput("ru2_2")}{' '}
            <br />
            <br />

            <InlineMath>{`f(20) = 30 + 8.5(`}</InlineMath>
            {renderInput("ru3_1")}{' '}
            <InlineMath>{`) = `}</InlineMath>
            {renderInput("ru3_2")}{' '}
            <br />
            <br />

            <InlineMath>{`f(25) = 30 + 8.5(`}</InlineMath>
            {renderInput("ru4_1")}{' '}
            <InlineMath>{`) = `}</InlineMath>
            {renderInput("ru4_2")}{' '}
            <br />
            <br />

            <InlineMath>{`f(30) = 30 + 8.5(`}</InlineMath>
            {renderInput("ru5_1")}{' '}
            <InlineMath>{`) = `}</InlineMath>
            {renderInput("ru5_2")}{' '}
          </div>
          <br />
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

export default Act10;
