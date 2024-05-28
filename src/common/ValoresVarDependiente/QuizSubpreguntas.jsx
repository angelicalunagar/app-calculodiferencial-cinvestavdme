/* import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";

const QuizSubpreguntas = ({ activityNumber, instruction, questions, correctAnswers, md}) => {
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [scoreUsuario, setScoreUsuario] = useState({});
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");

  useEffect(() => {
    const respuestasUsuarioInicial = {};
    const scoreUsuarioInicial = {};
    Object.keys(questions).forEach((pregunta) => {
      questions[pregunta].subpreguntas.forEach((subpregunta) => {
        respuestasUsuarioInicial[subpregunta.id] = "";
        scoreUsuarioInicial[subpregunta.id] = null;
      });
    });
    setRespuestasUsuario(respuestasUsuarioInicial);
    setScoreUsuario(scoreUsuarioInicial);
  }, [questions]);

  const handleRespChange = (e, subpreguntaId) => {
    if (bloquearSeleccion) return;
    const { value } = e.target;
    setRespuestasUsuario((prevRespuestas) => ({
      ...prevRespuestas,
      [subpreguntaId]: value,
    }));
    const respuestaCorrecta = correctAnswers[subpreguntaId];
    const score = value === respuestaCorrecta;
    setScoreUsuario((prevScore) => ({
      ...prevScore,
      [subpreguntaId]: score,
    }));
  };

  const revisarRespuestas = () => {
    setMostrarIconos(true);
    setBloquearSeleccion(true);

    const numCorrectas = Object.values(scoreUsuario).filter((score) => score).length;
    const totalPreguntas = Object.keys(respuestasUsuario).length;
    const puntaje = `${numCorrectas}/${totalPreguntas}`;
    setMensajeCalificacion(`Puntaje: ${puntaje}`);
  };

  const modificarRespuestas = () => {
    setMostrarIconos(false);
    setBloquearSeleccion(false);
    setRespuestasUsuario({});
    setScoreUsuario({});
    setMensajeCalificacion("");
  };

  const mostrarIcono = (subpreguntaId, opcion) => {
    if (!mostrarIconos || scoreUsuario[subpreguntaId] === null) return null;
    return respuestasUsuario[subpreguntaId] === opcion ? (
      scoreUsuario[subpreguntaId] ? (
        <BsCheckCircle style={{ color: "green" }} />
      ) : (
        <BsExclamationCircle style={{ color: "red" }} />
      )
    ) : null;
  };

  const renderRespuesta = (respuesta, renderInlineMath) => {
    if (renderInlineMath) {
      return <InlineMath>{respuesta}</InlineMath>;
    } else {
      return respuesta;
    }
  };

  return (
    <div>
      <Row className="row-act">
        <Col className="actividad" md={md}>
          <p>
            <b>Actividad {activityNumber}:</b> {instruction}
          </p>
          <ul>
            {Object.keys(questions).map((preguntaKey) => {
              const pregunta = questions[preguntaKey];
              return pregunta.subpreguntas.map((subpregunta) => (
                <li key={subpregunta.id}>
                  {pregunta.instruccion}
                  <Form>
                    <Form.Group>
                      {subpregunta.opciones.map((opcion, index) => (
                        <Form.Check
                          key={index}
                          type="radio"
                          id={`opcion${index + 1}`}
                          name={`opcion${index}`}
                          value={opcion}
                          checked={respuestasUsuario[subpregunta.id] === opcion}
                          onChange={(e) => handleRespChange(e, subpregunta.id)}
                          label={
                            <span>
                              {renderRespuesta(opcion, pregunta.renderInlineMath)}{" "}
                              {mostrarIcono(subpregunta.id, opcion)}
                            </span>
                          }
                          disabled={bloquearSeleccion}
                        />
                      ))}
                    </Form.Group>
                  </Form>
                </li>
              ));
            })}
          </ul>
          <div className="button-center">
            {bloquearSeleccion ? (
              <>
                <div>
                  <Button onClick={modificarRespuestas}>
                    Modificar respuestas
                  </Button>
                  <span style={{ marginLeft: "10px" }}>
                    {mensajeCalificacion}
                  </span>
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

export default QuizSubpreguntas;
 */

import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";

const QuizSubpreguntas = ({
  activityNumber,
  instruction,
  questions,
  correctAnswers,
  md
}) => {
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [scoreUsuario, setScoreUsuario] = useState({});
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");

  useEffect(() => {
    const respuestasUsuarioInicial = {};
    const scoreUsuarioInicial = {};
    Object.keys(questions).forEach((pregunta) => {
      
      questions[pregunta].subpreguntas.forEach((subpregunta) => {
        respuestasUsuarioInicial[subpregunta.id] = "";
        scoreUsuarioInicial[subpregunta.id] = null;
      });
    });
    setRespuestasUsuario(respuestasUsuarioInicial);
    setScoreUsuario(scoreUsuarioInicial);
  }, [questions]);

  const shuffleRespuestas = (respuestas) => {
    for (let i = respuestas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]];
    }
    return respuestas;
  };

  const handleRespChange = (e, subpreguntaId) => {
    if (bloquearSeleccion) return;
    const { value } = e.target;
    setRespuestasUsuario((prevRespuestas) => ({
      ...prevRespuestas,
      [subpreguntaId]: value
    }));
  };

  const revisarRespuestas = () => {
    setMostrarIconos(true);
    setBloquearSeleccion(true);

    const newScoreUsuario = {};
    Object.keys(respuestasUsuario).forEach((subpreguntaId) => {
      const respuestaUsuario = respuestasUsuario[subpreguntaId];
      const respuestaCorrecta = correctAnswers[subpreguntaId];
      const score = respuestaUsuario === respuestaCorrecta;
      newScoreUsuario[subpreguntaId] = score;
    });
    setScoreUsuario(newScoreUsuario);

    const numCorrectas = Object.values(newScoreUsuario).filter(
      (score) => score
    ).length;
    const totalPreguntas = Object.keys(respuestasUsuario).length;
    const puntaje = `${numCorrectas}/${totalPreguntas}`;
    setMensajeCalificacion(`Puntaje: ${puntaje}`);
  };

  const modificarRespuestas = () => {
    setMostrarIconos(false);
    setBloquearSeleccion(false);
    setRespuestasUsuario({});
    setScoreUsuario({});
    setMensajeCalificacion("");
  };

  const mostrarIcono = (subpreguntaId, opcion) => {
    if (!mostrarIconos || scoreUsuario[subpreguntaId] === null) return null;
    return respuestasUsuario[subpreguntaId] === opcion ? (
      scoreUsuario[subpreguntaId] ? (
        <BsCheckCircle style={{ color: "green" }} />
      ) : (
        <BsExclamationCircle style={{ color: "red" }} />
      )
    ) : null;
  };

  const renderRespuesta = (respuesta, renderInlineMath) => {
    if (renderInlineMath) {
      return <InlineMath>{respuesta}</InlineMath>;
    } else {
      return respuesta;
    }
  };

  return (
    <div>
      <Row className="row-act">
        <Col className="actividad" md={md}>
          <p>
            <b>Actividad {activityNumber}:</b> {instruction}
          </p>
          <ul>
            {Object.keys(questions).map((preguntaKey) => {
              const pregunta = questions[preguntaKey];
              return pregunta.subpreguntas.map((subpregunta) => (
                <li key={subpregunta.id}>
                  {pregunta.instruccion}
                  <Form>
                    <Form.Group>
                      {shuffleRespuestas(subpregunta.opciones).map(
                        (opcion, index) => (
                          <Form.Check
                            key={index}
                            type="radio"
                            id={`opcion${index + 1}`}
                            name={`opcion${index}`}
                            value={opcion}
                            checked={
                              respuestasUsuario[subpregunta.id] === opcion
                            }
                            onChange={(e) =>
                              handleRespChange(e, subpregunta.id)
                            }
                            label={
                              <span>
                                {renderRespuesta(
                                  opcion,
                                  pregunta.renderInlineMath
                                )}{" "}
                                {mostrarIcono(subpregunta.id, opcion)}
                              </span>
                            }
                            disabled={bloquearSeleccion}
                          />
                        )
                      )}
                    </Form.Group>
                  </Form>
                </li>
              ));
            })}
          </ul>
          <div className="button-center">
            {bloquearSeleccion ? (
              <>
                <div>
                  <Button onClick={modificarRespuestas}>
                    Modificar respuestas
                  </Button>
                  <span style={{ marginLeft: "10px" }}>
                    {mensajeCalificacion}
                  </span>
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

export default QuizSubpreguntas;
