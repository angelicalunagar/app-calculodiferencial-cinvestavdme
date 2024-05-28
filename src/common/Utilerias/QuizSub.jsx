// QuizSub
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { BlockMath, InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";

const QuizSub = ({
  activityNumber,
  instruction,
  questions,
  correctAnswers,
  md,
}) => {
  const [respuestasPreguntas, setRespuestasPreguntas] = useState({});
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [scoreUsuario, setScoreUsuario] = useState({});
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");

  const shuffleRespuestas = (respuestas) => {
    for (let i = respuestas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]];
    }
    return respuestas;
  };

  useEffect(() => {
    const preguntasAleatorias = {};
    const respuestasUsuarioInicial = {};
    const scoreUsuarioInicial = {};
    Object.keys(questions).forEach((pregunta) => {
      preguntasAleatorias[pregunta] = {
        instruccion: questions[pregunta].instruccion, // Debería ser 'instruccion' en lugar de 'instruction'
        subpreguntas: {}, // Inicializa el objeto de subpreguntas
      };

      questions[pregunta].subpreguntas.forEach((subpregunta) => {
        const opcionesAleatorias = shuffleRespuestas([...subpregunta.opciones]); // No es necesario acceder a questions[pregunta].subpreguntas[subpregunta]

        preguntasAleatorias[pregunta].subpreguntas[subpregunta.id] = {
          // Utiliza 'pregunta' en lugar de 'preguntas' para acceder al objeto principal
          subpregunta: subpregunta.subpregunta,
          opciones: opcionesAleatorias,
          renderInlineMath: subpregunta.renderInlineMath,
        };
        respuestasUsuarioInicial[subpregunta.id] = "";
        scoreUsuarioInicial[subpregunta.id] = null;
      });
    });

    setRespuestasPreguntas(preguntasAleatorias);
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
    const numCorrectas = Object.values(scoreUsuario).filter(
      (score) => score
    ).length;
    const totalPreguntas = Object.keys(correctAnswers).length;
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
            {Object.keys(respuestasPreguntas).map((pregunta, index) => (      
              <li key={index}>
                {respuestasPreguntas[pregunta].instruccion}
                <br />
                <br />
                {Object.keys(respuestasPreguntas[pregunta].subpreguntas).map(
                  (subpreguntaId) => (
                    /* {respuestasPreguntas[pregunta].subpreguntas[subpreguntaId].subpregunta}
                    <Form key={subpreguntaId}>
                      <Form.Group>
                        {respuestasPreguntas[pregunta].subpreguntas[
                          subpreguntaId
                        ].opciones.map((opcion, opcionIndex) => (
                          <Form.Check
                            key={opcionIndex}
                            type="checkbox"
                            id={`opcion${opcionIndex + 1}`}
                            name={`opciones${opcionIndex}`}
                            value={opcion}
                            checked={
                              respuestasUsuario[subpreguntaId] === opcion
                            }
                            onChange={(e) => handleRespChange(e, subpreguntaId)}
                            label={
                              <span>
                                {renderRespuesta(
                                  opcion,
                                  respuestasPreguntas[pregunta].subpreguntas[subpreguntaId].renderInlineMath
                                )}{" "}
                                {mostrarIcono(subpreguntaId, opcion)}
                              </span>
                            }
                            disabled={bloquearSeleccion}
                          />
                        ))}
                      </Form.Group>
                    </Form> */
                
                    <div key={subpreguntaId}>
                      {
                        respuestasPreguntas[pregunta].subpreguntas[
                          subpreguntaId
                        ].subpregunta
                      }
                      
                      <Form key={subpreguntaId}>
                        <Form.Group>
                          {respuestasPreguntas[pregunta].subpreguntas[
                            subpreguntaId
                          ].opciones.map((opcion, opcionIndex) => (
                            <Form.Check
                              key={opcionIndex}
                              type="checkbox"
                              id={`opcion${opcionIndex + 1}`}
                              name={`opciones${opcionIndex}`}
                              value={opcion}
                              checked={
                                respuestasUsuario[subpreguntaId] === opcion
                              }
                              onChange={(e) =>
                                handleRespChange(e, subpreguntaId)
                              }
                              label={
                                <span>
                                  {renderRespuesta(
                                    opcion,
                                    respuestasPreguntas[pregunta].subpreguntas[
                                      subpreguntaId
                                    ].renderInlineMath
                                  )}{" "}
                                  {mostrarIcono(subpreguntaId, opcion)}
                                </span>
                              }
                              disabled={bloquearSeleccion}
                            />
                          ))}
                        </Form.Group>
                      </Form>
                      <br />
                      
                    </div>
                  )
                )}
              </li>
            ))}
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

export default QuizSub;
