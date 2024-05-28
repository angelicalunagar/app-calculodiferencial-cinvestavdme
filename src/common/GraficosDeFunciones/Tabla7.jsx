import React, { useState } from "react";
import {
  Button,
  Table,
  Container,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";

const Tabla7 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1: "",
    ru2: "",
    ru3: "",
    ru4: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1: false,
    ru2: false,
    ru3: false,
    ru4: false,
  });

  const retroalimentacion = {
    ru1: "2",
    ru2: "2",
    ru3: "31.5",
    ru4: "31.5",
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
        className="input-tabla6"
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
    });
    setIconosPlus({
      ru1: false,
      ru2: false,
      ru3: false,
      ru4: false,
    });
  };

  return (
    <>
      <Container
        className="cont-table-fr"
        style={{ backgroundColor: "#ffc596" }}
      >
        <div className="tittle-table">
          <h6>Tabla 7</h6>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><InlineMath>x</InlineMath></th>
              <th><InlineMath>f(x)</InlineMath></th>
              <th><InlineMath>{"Punto \\,(x, y=f(x))"}</InlineMath></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>A = (0, 0)</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{renderInput("ru1")} </td>
              <td>B = (4, {renderInput("ru2")} )</td>
            </tr>
            <tr>
              <td>9</td>
              <td>3</td>
              <td>C = (9, 3)</td>
            </tr>
            <tr>
              <td>20</td>
              <td>4.5</td>
              <td>D = (20, 4.5)</td>
            </tr>
            <tr>
              <td>{renderInput("ru3")} </td>
              <td>5.6</td>
              <td>E = ({renderInput("ru3")} , 5.6)</td>
            </tr>
            <tr>
              <td>49</td>
              <td>7</td>
              <td>F = (49, 7)</td>
            </tr>
          </tbody>
        </Table>
        <div className="button-center">
          {bloquearInput ? (
            <Button onClick={modificarRespuestas}>Modificar respuestas</Button>
          ) : (
            <Button onClick={revisarRespuestas}>Revisar</Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default Tabla7;
