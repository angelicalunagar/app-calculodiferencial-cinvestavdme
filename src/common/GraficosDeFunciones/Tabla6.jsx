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

const Tabla6 = () => {
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearInput, setBloquearInput] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    ru1: "",
    ru2: "",
    ru3: "",
    ru4: "",
    ru5: "",
    ru6: "",
    ru7: "",
    ru8: "",
  });

  const [iconosPlus, setIconosPlus] = useState({
    ru1: false,
    ru2: false,
    ru3: false,
    ru4: false,
    ru5: false,
    ru6: false,
    ru7: false,
    ru8: false,
  });

  const retroalimentacion = {
    ru1: "-2.4",
    ru2: "-2.4",
    ru3: "-0.5",
    ru4: "-0.5",
    ru5: "8.5",
    ru6: "8.5",
    ru7: "0.8",
    ru8: "0.8",
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
      ru5: "",
      ru6: "",
      ru7: "",
      ru8: "",
    });
    setIconosPlus({
      ru1: false,
      ru2: false,
      ru3: false,
      ru4: false,
      ru5: false,
      ru6: false,
      ru7: false,
      ru8: false,
    });
  };

  return (
    <>
      <Container
        className="cont-table-fr"
        style={{ backgroundColor: "#ffc596" }}
      >
        <div className="tittle-table">
          <h6>Tabla 6</h6>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <InlineMath>x</InlineMath>
              </th>
              <th>
                <InlineMath>f(x)</InlineMath>
              </th>
              <th>
                <InlineMath>{"Punto\\, (x, y=f(x))"}</InlineMath>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-25</td>
              <td>-0.8</td>
              <td>A=(-25, -0.8)</td>
            </tr>
            <tr>
              <td>-8.5</td>
              <td>{renderInput("ru1")} </td>
              <td>B=(-8.5, {renderInput("ru2")})</td>
            </tr>
            <tr>
              <td>-1.5</td>
              <td>-13.3</td>
              <td>C=(-1.5, -13.3)</td>
            </tr>
            <tr>
              <td>{renderInput("ru3")}</td>
              <td>-40</td>
              <td>D=({renderInput("ru4")}, -40)</td>
            </tr>
            <tr>
              <td>0.5</td>
              <td>40</td>
              <td>E=(0.5, 40)</td>
            </tr>
            <tr>
              <td>1.5</td>
              <td>13.3</td>
              <td>F=(1.5, 13.3)</td>
            </tr>
            <tr>
              <td>{renderInput("ru5")}</td>
              <td>2.4</td>
              <td>G=({renderInput("ru6")}, 2.4)</td>
            </tr>
            <tr>
              <td>25</td>
              <td>{renderInput("ru7")}</td>
              <td>H=(25, {renderInput("ru8")})</td>
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

export default Tabla6;
