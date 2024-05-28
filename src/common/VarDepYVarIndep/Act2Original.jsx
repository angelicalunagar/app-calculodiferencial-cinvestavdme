import { React, useState } from "react";
import { Button, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { ImEyePlus, ImEyeMinus } from "react-icons/im";

const Act2Original = () => {
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

  const revisarRespuestas = () => {
    setMostrarIconos(true);
    setBloquearInput(true);
  };

  const handleInputAct2 = (key, value) => {
    if (bloquearInput) return;
    setRespuestasUsuario((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
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

  const popoverRight2 = (content) => (
    <div>
      <Popover
        id="popover-positioned-right"
        title="Popover right"
        style={{ padding: "5px", justifyItems: "center", alignItems: "center" }}
      >
        {content}
      </Popover>
    </div>
  );

  const toggleIcono = (key) => {
    setIconosPlus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
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
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru1_1"
                  value={respuestasUsuario.ru1_1}
                  onChange={(e) => handleInputAct2("ru1_1", e.target.value)}
                />
                {mostrarIconos && (
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight2(retroalimentacion.ru1_1)}
                  >
                    
                    <Button onClick={() => toggleIcono("ru1_1")}>
                      {iconosPlus.ru1_1 ? (
                        <ImEyeMinus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      ) : (
                        <ImEyePlus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      )}
                    </Button>
                  </OverlayTrigger>
                )}
              </label>
              <br />
              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru1_2"
                  value={respuestasUsuario.ru1_2}
                  onChange={(e) => handleInputAct2("ru1_2", e.target.value)}
                />
                {mostrarIconos && (
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight2(retroalimentacion.ru1_2)}
                  >
                  
                    <Button onClick={() => toggleIcono("ru1_2")}>
                      {iconosPlus.ru1_2 ? (
                        <ImEyeMinus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      ) : (
                        <ImEyePlus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      )}
                    </Button>
                  </OverlayTrigger>
                )}
              </label>
            </li>
            <br />
            <li>
              <em>
                Cristina comienza la quincena con una cantidad de dinero, pero a
                medida que pasan los días, su dinero va disminuyendo.
              </em>
              <br />
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru2_1"
                  value={respuestasUsuario.ru2_1}
                  onChange={(e) => handleInputAct2("ru2_1", e.target.value)}
                />
                {mostrarIconos && (
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight2(retroalimentacion.ru2_1)}
                  >
                    {/* <Button>
                    <ImEyePlus style={{ color: "white", cursor: "pointer" }} />
                  </Button> */}
                    <Button onClick={() => toggleIcono("ru2_1")}>
                      {iconosPlus.ru2_1 ? (
                        <ImEyeMinus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      ) : (
                        <ImEyePlus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      )}
                    </Button>
                  </OverlayTrigger>
                )}
              </label>
              <br />

              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru2_2"
                  value={respuestasUsuario.ru2_2}
                  onChange={(e) => handleInputAct2("ru2_2", e.target.value)}
                />
                {mostrarIconos && (
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight2(retroalimentacion.ru2_2)}
                  >
                    {/*  <Button>
                    <ImEyePlus style={{ color: "white", cursor: "pointer" }} />
                  </Button> */}
                    <Button onClick={() => toggleIcono("ru2_2")}>
                      {iconosPlus.ru2_2 ? (
                        <ImEyeMinus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      ) : (
                        <ImEyePlus
                          style={{ color: "white", cursor: "pointer" }}
                        />
                      )}
                    </Button>
                  </OverlayTrigger>
                )}
              </label>
            </li>
            <br />
            <li>
              <em>
                Raúl observa que el Uber le cobra más cuando la distancia
                recorrida es mayor.
              </em>
              <br />
              <label>
                Variable dependiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru3_1"
                  value={respuestasUsuario.ru3_1}
                  onChange={(e) => handleInputAct2("ru3_1", e.target.value)}
                />
                {mostrarIconos && (
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight2(retroalimentacion.ru3_1)}
                  >
                   {/*  <Button>
                      <ImEyePlus
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </Button> */}
                    <Button onClick={() => toggleIcono("ru3_1")}>
                      {iconosPlus.ru3_1 ? (
                        <ImEyeMinus style={{ color: "white", cursor: "pointer" }} />
                      ) : (
                        <ImEyePlus style={{ color: "white", cursor: "pointer" }} />
                      )}
                    </Button>
                  </OverlayTrigger>
                )}
              </label>

              <br />
              <label>
                Variable independiente:
                <input
                  className="input-act2"
                  type="text"
                  id="ru3_2"
                  value={respuestasUsuario.ru3_2}
                  onChange={(e) => handleInputAct2("ru3_2", e.target.value)}
                />
                {mostrarIconos && (
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight2(retroalimentacion.ru3_2)}
                  >
                    {/* <Button>
                      <ImEyePlus
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </Button> */}
                    <Button onClick={() => toggleIcono("ru3_2")}>
                      {iconosPlus.ru3_2 ? (
                        <ImEyeMinus style={{ color: "white", cursor: "pointer" }} />
                      ) : (
                        <ImEyePlus style={{ color: "white", cursor: "pointer" }} />
                      )}
                    </Button>
                  </OverlayTrigger>
                )}
              </label>
            </li>
          </ul>
          <div className="button-center">
            {bloquearInput ? (
              <>
                <div>
                  <Button onClick={modificarRespuestas}>
                    Modificar respuestas
                  </Button>
                </div>
              </>
            ) : (
              <Button onClick={revisarRespuestas}>Revisar respuestas</Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Act2Original;
