// Quiz
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { BlockMath, InlineMath } from "react-katex";
import "../../styles/Bloque1_1.css";

const Quiz = ({ activityNumber, instruction, questions, correctAnswers, md }) => {
  const [respuestasPreguntas, setRespuestasPreguntas] = useState({});
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [scoreUsuario, setScoreUsuario] = useState({});
  const [mostrarIconos, setMostrarIconos] = useState(false);
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");

  const shuffleRespuestas = (respuestas) => {  //respuestas=questions[pregunta].resps
    for (let i = respuestas.length - 1; i > 0; i--) { //respuestas ["a", "b", "c"]
      const j = Math.floor(Math.random() * (i + 1));
      [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]];
    }
    return respuestas;
  };

  useEffect(() => {
    const preguntasAleatorias = {}; //preguntas con respuestas aleatorias
    const respuestasUsuarioInicial = {};
    const scoreUsuarioInicial = {};
    Object.keys(questions).forEach((pregunta) => { //pregunta = preg1, preg2
      const opcionesAleatorias = shuffleRespuestas([...questions[pregunta].resps]);
      preguntasAleatorias[pregunta] = { 
        preg: questions[pregunta].preg,
        resps: opcionesAleatorias
      };
      respuestasUsuarioInicial[pregunta] = "";
      scoreUsuarioInicial[pregunta] = null;
    });
    setRespuestasPreguntas(preguntasAleatorias);  //respuestasPreguntas={preg1: {preg, resps}}
    setRespuestasUsuario(respuestasUsuarioInicial);
    setScoreUsuario(scoreUsuarioInicial);
  }, [questions]);

  const handleRespChange = (e, pregunta) => {
    if (bloquearSeleccion) return;
    const { value } = e.target;
    setRespuestasUsuario((prevRespuestas) => ({
      ...prevRespuestas,
      [pregunta]: value,
    }));
    const respuestaCorrecta = correctAnswers[pregunta];
    const score = value === respuestaCorrecta;
    setScoreUsuario((prevScore) => ({
      ...prevScore,
      [pregunta]: score,
    }));
  };

  const revisarRespuestas = () => {
    setMostrarIconos(true);
    setBloquearSeleccion(true);
    const numCorrectas = Object.values(scoreUsuario).filter((score) => score).length;
    const totalPreguntas = Object.keys(respuestasPreguntas).length;
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

  const mostrarIcono = (pregunta, opcion) => {
    if (!mostrarIconos || scoreUsuario[pregunta] === null) return null;
    return respuestasUsuario[pregunta] === opcion ? (
      scoreUsuario[pregunta] ? (
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
                {respuestasPreguntas[pregunta].preg}
                <Form>
                  <Form.Group>
                    {respuestasPreguntas[pregunta].resps.map((opcion, opcionIndex) => (
                      <Form.Check
                        key={opcionIndex}
                        type="checkbox"
                        id={`opcion${opcionIndex + 1}`}
                        name={`opciones${opcionIndex}`}
                        value={opcion}
                        checked={respuestasUsuario[pregunta] === opcion}
                        onChange={(e) => handleRespChange(e, pregunta)}
                        label={
                          <span>
                            {/* {opcion} {mostrarIcono(pregunta, opcion)} */}
                            {/* {renderRespuesta(opcion)} {mostrarIcono(pregunta, opcion)} */}
                            {renderRespuesta(opcion, questions[pregunta].renderInlineMath)} {mostrarIcono(pregunta, opcion)}
                          </span>
                        }
                        disabled={bloquearSeleccion}
                      />
                    ))}
                  </Form.Group>
                </Form>
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
                  <span style={{ marginLeft: '10px' }}>{mensajeCalificacion}</span>
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

export default Quiz;
