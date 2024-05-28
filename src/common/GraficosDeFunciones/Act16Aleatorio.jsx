//Act16Aleatorio
import { React, useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import "../../styles/Bloque1_1.css";

const Act16Aleatorio = () => {
  // Almacenar las respuestas aleatorias para cada pregunta
  const [respuestasPreguntas, setRespuestasPreguntas] = useState({
    preg1: [],
    preg2: [],
    preg3: [],
    preg4: [],
  });

  //Almacenar las respuestas del usuario
  const [respuestasUsuarioAct16, setRespuestasUsuarioAct16] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
  });

  console.log(respuestasUsuarioAct16);

  // Almacenar el puntaje del usuario
  const [scoreUsuario, setScoreUsuario] = useState({
    preg1: null,
    preg2: null,
    preg3: null,
    preg4: null,
  });
  console.log(scoreUsuario);

  // Estado para controlar la visibilidad de los íconos
  const [mostrarIconos, setMostrarIconos] = useState(false);

  // Estado para bloquear las selecciones después de revisar respuestas
  const [bloquearSeleccion, setBloquearSeleccion] = useState(false);

  // Estado para almacenar el mensaje de calificación
  const [mensajeCalificacion, setMensajeCalificacion] = useState("");

  // Función para calcular el puntaje de la pregunta
  const calcularScore = (pregunta, respuesta) => {
    // Lógica para determinar si la respuesta es correcta
    switch (pregunta) {
      case "preg1":
        return respuesta === "Disminuyó"; // La respuesta correcta
      case "preg2":
        return respuesta === "Cambió su dirección"; // La respuesta correcta
      case "preg3":
        return (
          respuesta ===
          "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo."
        ); // La respuesta correcta para preg3 es "a"
      case "preg4":
        return (
          respuesta ===
          "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando."
        ); // La respuesta correcta para preg4 es "b"
      default:
        return false; // Por defecto, asumir incorrecto
    }
  };

  // Manejar cambios en las respuestas del usuario
  const handleRespChangeAct16 = (e, preg) => {
    if (bloquearSeleccion) return; // Bloquear selecciones si ya se revisaron las respuestas
    const { value } = e.target;

    setRespuestasUsuarioAct16((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));

    const score = calcularScore(preg, value); // Calcular si la respuesta es correcta o incorrecta

    setScoreUsuario((prevScore) => ({
      ...prevScore,
      [preg]: score,
    }));
  };

  useEffect(() => {
    // Barajar aleatoriamente las respuestas antes de renderizar
    const shuffleRespuestas = (respuestas) => {
      for (let i = respuestas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]];
      }
      return respuestas;
    };

    // Respuestas para cada pregunta
    const respuestas = {
      preg1: shuffleRespuestas(["Aumentó", "Disminuyó", "Permaneció igual"]),
      preg2: shuffleRespuestas([
        "Cambió su dirección",
        "Permaneció igual",
        "Aumentó",
      ]),
      preg3: shuffleRespuestas([
        "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
        "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
        "No es creciente ni decreciente (horizontal).",
      ]),
      preg4: shuffleRespuestas([
        "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
        "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
        "No es creciente ni decreciente (horizontal).",
      ]),
    };

    // Establecer las respuestas en el estado
    setRespuestasPreguntas(respuestas);
  }, []);

  /*   const mostrarIcono = (preg, opcion) => {
    if (scoreUsuario[preg] === null) return null;
    return respuestasUsuarioAct16[preg] === opcion ? (
      scoreUsuario[preg] ? (
        <BsCheckCircle style={{ color: "green" }} />
      ) : (
        <BsExclamationCircle style={{ color: "red" }} />
      )
    ) : null;
  }; */

  const mostrarIcono = (preg, opcion) => {
    if (!mostrarIconos || scoreUsuario[preg] === null) return null;
    return respuestasUsuarioAct16[preg] === opcion ? (
      scoreUsuario[preg] ? (
        <BsCheckCircle style={{ color: "green" }} />
      ) : (
        <BsExclamationCircle style={{ color: "red" }} />
      )
    ) : null;
  };

  const revisarRespuestas = () => {
    // Mostrar los íconos
    setMostrarIconos(true);

    // Bloquear selecciones
    setBloquearSeleccion(true);

    // Calcular puntaje
    const numCorrectas = Object.values(scoreUsuario).filter(
      (score) => score
    ).length;
    const totalPreguntas = Object.keys(respuestasPreguntas).length;
    const puntaje = `${numCorrectas}/${totalPreguntas}`;

    // Mostrar mensaje de calificación
    setMensajeCalificacion(`Puntaje: ${puntaje}`);
  };

  const modificarRespuestas = () => {
    // Ocultar íconos
    setMostrarIconos(false);
    // Desbloquear selecciones
    setBloquearSeleccion(false);
    // Limpiar respuestas
    setRespuestasUsuarioAct16({
      preg1: "",
      preg2: "",
      preg3: "",
      preg4: "",
    });
    // Limpiar puntajes
    setScoreUsuario({
      preg1: null,
      preg2: null,
      preg3: null,
      preg4: null,
    });

    // Limpiar mensaje de calificación
    setMensajeCalificacion("");
  };

  return (
    <div>
      <Row>
        <Col className="actividad">
          <p>
            <b>Actividad 16:</b> En la ventana gráfica 7 hemos graficado
            f(x)=8.5x+30. Modifica el coeficiente de x, al cual denotaremos con
            m, y el término independiente, denotado con b. Observa cómo se
            modifica la gráfica de la función y contesta las siguientes
            preguntas:
          </p>
          <ul>
            <li>
              Mueve el coeficiente m para que valga 2. ¿Qué sucedió con la
              inclinación de la recta?
              <Form>
                <Form.Group>
                  {respuestasPreguntas.preg1.map((opcion, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={`opcion${index + 1}`}
                      name={`opciones1`}
                      value={opcion}
                      checked={respuestasUsuarioAct16.preg1 === opcion}
                      onChange={(e) => handleRespChangeAct16(e, "preg1")}
                      label={
                        <span>
                          {opcion} {mostrarIcono("preg1", opcion)}
                        </span>
                      }
                      disabled={bloquearSeleccion} // Bloquear selecciones después de revisar respuestas
                    />
                  ))}
                </Form.Group>
              </Form>
            </li>
            <li>
              Mueve el coeficiente m para que valga -2. ¿Qué sucedió con la
              inclinación de la recta con respecto a la anterior?
              <Form>
                <Form.Group>
                  {respuestasPreguntas.preg2.map((opcion, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={`opcion${index + 1}`}
                      name={`opciones2`}
                      value={opcion}
                      checked={respuestasUsuarioAct16.preg2 === opcion}
                      onChange={(e) => handleRespChangeAct16(e, "preg2")}
                      label={
                        <span>
                          {opcion} {mostrarIcono("preg2", opcion)}
                        </span>
                      }
                      disabled={bloquearSeleccion}
                    />
                  ))}
                </Form.Group>
              </Form>
            </li>
            <li>
              Siempre que el coeficiente m es positivo, la recta:
              <Form>
                <Form.Group>
                  {respuestasPreguntas.preg3.map((opcion, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={`opcion${index + 1}`}
                      name={`opciones3`}
                      value={opcion}
                      checked={respuestasUsuarioAct16.preg3 === opcion}
                      onChange={(e) => handleRespChangeAct16(e, "preg3")}
                      label={
                        <span>
                          {opcion} {mostrarIcono("preg3", opcion)}
                        </span>
                      }
                      disabled={bloquearSeleccion}
                    />
                  ))}
                </Form.Group>
              </Form>
            </li>
            <li>
              Siempre que el coeficiente m es negativo, la recta:
              <Form>
                <Form.Group>
                  {respuestasPreguntas.preg4.map((opcion, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={`opcion${index + 1}`}
                      name={`opciones4`}
                      value={opcion}
                      checked={respuestasUsuarioAct16.preg4 === opcion}
                      onChange={(e) => handleRespChangeAct16(e, "preg4")}
                      label={
                        <span>
                          {opcion} {mostrarIcono("preg4", opcion)}
                        </span>
                      }
                      disabled={bloquearSeleccion}
                    />
                  ))}
                </Form.Group>
              </Form>
            </li>
          </ul>

          <div className="button-center">
            {bloquearSeleccion ? ( // Cambiar texto del botón dependiendo del estado de bloqueo
              <>
              <div> {/* Ajusta el valor de marginBottom según sea necesario */}
                <Button onClick={modificarRespuestas}>
                  Modificar respuestas
                </Button>
                <span style={{ marginLeft: '10px' }}>{mensajeCalificacion}</span> {/* Ajusta el valor de marginLeft según sea necesario */}
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

export default Act16Aleatorio;
