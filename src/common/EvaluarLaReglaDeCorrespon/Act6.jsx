import React, { useState } from "react";
import { Button, Row, Col, Container, Table, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";
import { BlockMath, InlineMath } from "react-katex";

const Act6 = () => {
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
    ru9: "",
    ru10: "",
    ru11: "",
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
    ru9: false,
    ru10: false,
    ru11: false,
  });

  const retroalimentacion = {
    ru1: "3",
    ru2: "15",
    ru3: "4",
    ru4: "20",
    ru5: "5",
    ru6: "25",
    ru7: (
      <span>
        <InlineMath>5(1)=5</InlineMath>
      </span>
    ),
    ru8: "2",
    ru9: (
      <span>
        <InlineMath>5(3)=15</InlineMath>
      </span>
    ),
    ru10: (
      <span>
        <InlineMath>5(4)=20</InlineMath>
      </span>
    ),
    ru11: (
      <span>
        <InlineMath>5(5)=25</InlineMath>
      </span>
    ),
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

  const renderInput = (key, className) => (
    <>
      <input
        className={className} //input-eval 
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
      ru9: "",
      ru10: "",
      ru11: "",
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
      ru9: false,
      ru10: false,
      ru11: false,
    });
  };

  return (
    <div>
      <Row className="row-act">
        <Col className="actividad" md={10}>
          <p>
            <b>Actividad 6:</b> Evalúa la regla de correspondencia{" "}
            <InlineMath>{"g(x)=5x"}</InlineMath> en{" "}
            <InlineMath>{"x=3, 4, 5"}</InlineMath>.
            <br />
            <br />
          </p>
          <Container className="act6-center">
            <div>
              <InlineMath>{`g(3) = 5(`}</InlineMath>
              {renderInput("ru1", "input-eval")}{' '}
              <InlineMath>{`) = `}</InlineMath>
              {renderInput("ru2", "input-eval")}{' '}
            </div>
            <br />
            <div>
              <InlineMath>{`g(4) = 5(`}</InlineMath>
              {renderInput("ru3", "input-eval")}{' '}
              <InlineMath>{`) = `}</InlineMath>
              {renderInput("ru4", "input-eval")}{' '}
            </div>
            <br />
            <div>
              <InlineMath>{`g(5) = 5(`}</InlineMath>
              {renderInput("ru5", "input-eval")}{' '}
              <InlineMath>{`) = `}</InlineMath>
              {renderInput("ru6", "input-eval")}{' '}
            </div>
          </Container>
          <Container>
            <p>
              Utiliza tus resultados de las evaluaciones para completar los
              espacios vacíos de la siguiente tabla.
            </p>
          </Container>
          <Container className="cont-table-act3">
            <div className="tittle-table">
              <h6>Tabla 2</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>x</th>
                  <th>g(x)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                  {renderInput("ru7", "custom-input")}{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                  {renderInput("ru8", "custom-input")}{' '}
                  </td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  {renderInput("ru9", "custom-input")}{' '}
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  {renderInput("ru10", "custom-input")}{' '}
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>
                  {renderInput("ru11", "custom-input")}{' '}
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
      </Row>
    </div>
  );
};

export default Act6;
