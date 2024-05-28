//GraficosDeFunciones.jsx
import { useState, useContext } from "react";
import { Container, Row, Col, Table, Form, Image } from "react-bootstrap";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import "../../styles/Bloque1_1.css";
import graficarPuntos from "../../assets/graficarPuntos.gif";
import Tabla6 from "./Tabla6";
import Tabla7 from "./Tabla7";
import { BoardsContextProvider } from "../../contexts/BoardsContext";
import { SegmentContextProvider } from "../../contexts/SegmentContext";
import { FuncLinealContextProvider } from "../../contexts/FuncLinealContext";

/* import { RectaAGContextProvider } from "../contexts/RectaAGContext"; */

import BoardX from "../BoardX";
import BoardXX from "../Utilerias/BoardXX";
/* import FuncionLineal from "./FuncionLineal"; */
import FuncionLineal2 from "./FuncionLineal2";
import GraficoArrastrePuntosX from "../GraficoArrastrePuntosX";
import GraficoArrastrePuntosFR from "./GraficoArrastrePuntosFR";
import GraficoArrastrePuntosFRaiz from "./GraficoArrastrePuntosFRaiz";
import GraficaF from "./GraficaF";
import GraficoArrastrePuntosFL from "./GraficoArrastrePuntosFL";
import { GraficaFContextProvider } from "../../contexts/GraficaFContext";
import SegmentAGX from "../SegmentAGX";
import PuntoMovibleMX from "../PuntoMovibleMX";
import CuestionarioFR from "./CuestionarioFR";
import Act12 from "./Act12";
import Act14 from "./Act14";
import Act16Aleatorio from "./Act16Aleatorio";
import PuntoMovibleF from "./PuntoMovibleF";
import TextoFuncion from "./TextoFuncion";
import Quiz15 from "./Quiz15";
import Quiz16 from "./Quiz16";

/* import RectaAG from "./RectaAG"; */

const GraficosDeFunciones = () => {
  const [fullscreen, setFullscreen] = useState(false);
  /*   const {intercept, slope } = useContext(FuncLinealContext); */

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  const [opcionSelecPreg4, setOpcionSelecPreg4] = useState(null);
  const handleSelecPreg4 = (opcion) => {
    setOpcionSelecPreg4(opcion);
  };

  const [opcionSelecPreg6, setOpcionSelecPreg6] = useState(null);
  const handleSelecPreg6 = (opcion) => {
    setOpcionSelecPreg6(opcion);
  };

  const [opcionSelecPreg7, setOpcionSelecPreg7] = useState(null);
  const handleSelecPreg7 = (opcion) => {
    setOpcionSelecPreg7(opcion);
  };

  const [opcionSelecPreg8, setOpcionSelecPreg8] = useState(null);
  const handleSelecPreg8 = (opcion) => {
    setOpcionSelecPreg8(opcion);
  };

  return (
    <Container>
      <Row className="row-nuevotema">
        <Col md={8}>
          <h4>Gráficos de funciones</h4>
          <p>
            Una vez que el taxista ha tabulado la función{" "}
            <InlineMath>p(x)=30+8.5x</InlineMath> con la cuál calcula el precio
            de sus viajes para ciertas distancias <InlineMath>x</InlineMath>{" "}
            (ver <b>Tabla 5</b>), llegamos a la conclusión de que dicha tabla no
            le sirve para la mayoría de sus viajes, ya que la distancia podía no
            ser un múltiplo de <InlineMath>5</InlineMath> precisamente.
            <br />
            <br />
            Una manera de aprovechar la tabla hecha por el taxista es graficar
            los datos en el plano cartesiano. Para ello, graficamos un punto por
            cada pareja <InlineMath>(x, p(x))</InlineMath> siguiendo la
            convención para graficar puntos en el plano:
            <ul className="li-preg-reflex">
              <li>
                ubicar la variable independiente en el{" "}
                <InlineMath>{"eje \\, x"}</InlineMath>.
              </li>
              <li>
                ubicar la variable dependiente en el{" "}
                <InlineMath>{"eje \\, y"}</InlineMath>. Debido a esto, a menudo
                se le suele llamar <InlineMath>y</InlineMath> a la variable
                dependiente, es decir <InlineMath>y=p(x)</InlineMath>.
              </li>
            </ul>
          </p>
        </Col>
        <Col md={4} className="mi-col">
          <Container className="cont-table-act3">
            <div className="tittle-table">
              <h6>Tabla 5</h6>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>x</th>
                  <th>p(x)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>72.5</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>115</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>157.5</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>242.5</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>285</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
      <Row className="main-row grafica-quiz">
        <Col md={5}>
          <p>
            Comencemos graficando el punto <InlineMath>(0, p(0))</InlineMath>, o
            sea el punto <InlineMath>(0, 30)</InlineMath>, para lo cuál ubicamos{" "}
            <InlineMath>0</InlineMath> en el{" "}
            <InlineMath>{"eje \\, x"}</InlineMath> y subimos hasta que{" "}
            <InlineMath>y</InlineMath> valga <InlineMath>30</InlineMath>, tal
            como se aprecia en el GIF de la derecha (haz click sobre el GIF para
            expandirlo o contraerlo). Al punto obtenido lo hemos llamado{" "}
            <InlineMath>A</InlineMath>.
            <br />
            <br />
            Del mismo modo graficamos el punto{" "}
            <InlineMath>(5, p(5))</InlineMath>, o sea el punto{" "}
            <InlineMath>B=(5, 72.5)</InlineMath>: ubicamos{" "}
            <InlineMath>5</InlineMath> en el{" "}
            <InlineMath>{"eje \\, x"}</InlineMath> y subimos hasta{" "}
            <InlineMath>y=72.5</InlineMath>. Contesta las{" "}
            <b>Actividades 12 y 13.</b>
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={graficarPuntos}
            alt="GIF graficar"
            fluid
            className={`custom-gif ${fullscreen ? "fullscreen" : ""}`}
            onClick={toggleFullscreen}
          />
        </Col>
      </Row>
      <Row className="main-row">
        <BoardsContextProvider>
          <SegmentContextProvider>
            {/* <RectaAGContextProvider> */}
            <Col sm={12} md={6}>
              <Act12 />
              <Row>
                <Col>
                  <p>
                    <br />
                    <br />
                    Hasta aquí lo que hemos obtenido son solo puntos aislados
                    que representan exactamente la misma información que la{" "}
                    <b>Tabla 5</b>. Es decir, de estos puntos graficados en el
                    plano cartesiano es posible leer cuánto cobrará el taxista
                    si recorre <InlineMath>{"5 \\, km"}</InlineMath>,{" "}
                    <InlineMath>{"10 \\, km"}</InlineMath>, etc. tan solo con
                    mirar a que altura (coordenada <InlineMath>y</InlineMath>)
                    se encuentra cada punto. No obstante, podemos obtener más
                    información si unimos los puntos. ¿Qué se forma si unimos
                    los puntos que graficamos?
                  </p>
                  <Form /* className="prueba" */>
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        id="opcionA"
                        name="opcionesPreg4"
                        value="a"
                        checked={opcionSelecPreg4 === "a"}
                        onChange={() => handleSelecPreg4("a")}
                        label="Una recta"
                      />
                      <Form.Check
                        type="checkbox"
                        id="opcionB"
                        name="opcionesPreg4"
                        value="b"
                        checked={opcionSelecPreg4 === "b"}
                        onChange={() => handleSelecPreg4("b")}
                        label="Una parábola"
                      />

                      <Form.Check
                        type="checkbox"
                        id="opcionC"
                        name="opcionesPreg4"
                        value="c"
                        checked={opcionSelecPreg4 === "c"}
                        onChange={() => handleSelecPreg4("c")}
                        label="Un segmento de recta"
                      />
                      <Form.Check
                        type="checkbox"
                        id="opcionD"
                        name="opcionesPreg4"
                        value="d"
                        checked={opcionSelecPreg4 === "d"}
                        onChange={() => handleSelecPreg4("d")}
                        label="Una curva cúbica"
                      />
                    </Form.Group>
                  </Form>
                  <p>
                    <br />
                    Ciertamente, cuando unimos los puntos se forma el segmento
                    de recta <InlineMath>AG</InlineMath>. Oprime el siguiente
                    botón para trazar el segmento en la ventana gráfica de la{" "}
                    <b>Actividad 13</b>.
                    <br />
                    <br />
                    <SegmentAGX boardId="board1" />
                    <br />
                    <br />
                    Dicho segmento nos permite aproximar el precio de cualquier
                    viaje que comprenda una distancia entre{" "}
                    <InlineMath>0</InlineMath> y{" "}
                    <InlineMath>{"30 \\, km"}</InlineMath>. Por ejemplo, si un
                    viaje dura <InlineMath>{"12.3 \\, km"}</InlineMath>, lo
                    único que tienes que hacer es buscar{" "}
                    <InlineMath>{"12.3"}</InlineMath> en el{" "}
                    <InlineMath>{"eje \\, x"}</InlineMath> y mirar cuál es la
                    coordenada <InlineMath>y</InlineMath> que le corresponde,
                    que en este caso es <InlineMath>134.55</InlineMath> pesos,
                    tal como apreciarás en la <b>Ventana gráfica 3</b> si
                    oprimes el botón "Dibujar Punto M".
                    <br />
                    <br />
                    <PuntoMovibleMX boardId="board1" />
                    {/* <BlockMath>
                        {"\\text{Dom}(f): \\{ x \\in \\mathbb{R} \\}"}
                      </BlockMath>
                      <BlockMath>
                        {"\\text{Im}(f): \\{ f(x) \\in \\mathbb{R} \\}"}
                      </BlockMath> */}
                    <br />
                    <br />
                  </p>
                </Col>
              </Row>
              <Act14 />
            </Col>
            <Col sm={12} md={6}>
              <Row className="sticky-act13">
                <Col className="actividad">
                  <div>
                    <p>
                      <b>Actividad 13:</b> En la siguiente cuadrícula, arrastra
                      los puntos amarillos a las coordenadas que les
                      corresponden, según la actividad 12.
                      <br />
                    </p>
                    <div className="tittle-table">
                      <h6>Ventana gráfica 3</h6>
                    </div>
                    <BoardX
                      boardId="board1"
                      boundingBox={[-2.5, 295, 32, -10]}
                    />
                    <GraficoArrastrePuntosX boardId="board1" />
                  </div>
                </Col>
              </Row>
            </Col>
            {/* </RectaAGContextProvider> */}
          </SegmentContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row>
        <Col>
          <p>
            Como has podido observar, la situación contextual del taxista ha
            limitado el dominio, y por lo tanto el rango, de la regla de
            correspondencia <InlineMath>p(x)=30+8.5x</InlineMath>. Sin embargo,
            esta misma regla de correspondencia podría tener otro dominio y otro
            rango en otras circunstancias.
            <br />
            <br />
            Por ejemplo, supón que un vehículo todoterreno se mueve con una
            velocidad de <InlineMath>{"30 \\, km/h"}</InlineMath> y el automóvil
            en cierta pendiente sólo puede experimentar una aceleración o
            desaceleración de <InlineMath>{"8.5 \\, km/h^2"}</InlineMath>. En
            este contexto, <InlineMath>x</InlineMath> representa el tiempo (en{" "}
            <InlineMath>h</InlineMath>) que el vehículo acelera o desacelera,
            por lo que, si el vehículo acelera, <InlineMath>x</InlineMath>{" "}
            deberá ser positivo ya que está aumentando la velocidad, mientras
            que, si el vehículo desacelera, <InlineMath>x</InlineMath> es
            negativo porque ahora la velocidad está disminuyendo.
            <br />
            <br />
            Observa que la regla de correspondencia es exactamente la misma que
            la del taxista: <InlineMath>p(x)=30+8.5x</InlineMath> No obstante,
            para representar mejor la nueva situación, cambiemos{" "}
            <InlineMath>p</InlineMath> por <InlineMath>v</InlineMath> ya que
            ahora la regla nos da la velocidad del vehículo:{" "}
            <InlineMath>v(x)=30+8.5x</InlineMath>. Ahora bien, como recordarás,
            una función no solo consta de la regla de correspondencia, también
            es necesario determinar su dominio y rango. Sabiendo que la
            velocidad máxima que puede alcanzar el vehículo es de{" "}
            <InlineMath>{"67 \\, km/h"}</InlineMath>, ¿cuál es el rango, es
            decir, qué valores puede adquirir la velocidad?
            <br />
          </p>

          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg6"
                value="a"
                checked={opcionSelecPreg6 === "a"}
                onChange={() => handleSelecPreg6("a")}
                label={<InlineMath>{"0 \\leq v(x) \\leq 67"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg6"
                value="b"
                checked={opcionSelecPreg6 === "b"}
                onChange={() => handleSelecPreg6("b")}
                label={<InlineMath>{"30 \\leq v(x) \\leq 67"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg6"
                value="c"
                checked={opcionSelecPreg6 === "c"}
                onChange={() => handleSelecPreg6("c")}
                label={<InlineMath>{"8.5 \\leq v(x) \\leq 67"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            <br />
            ¿Cuál es el dominio?
            <br />
          </p>
          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg7"
                value="a"
                checked={opcionSelecPreg7 === "a"}
                onChange={() => handleSelecPreg7("a")}
                label={<InlineMath>{"-3.5 \\leq x \\leq 4.4"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg7"
                value="b"
                checked={opcionSelecPreg7 === "b"}
                onChange={() => handleSelecPreg7("b")}
                label={<InlineMath>{"-10 \\leq x \\leq 5.8"}</InlineMath>}
              />

              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg7"
                value="c"
                checked={opcionSelecPreg7 === "c"}
                onChange={() => handleSelecPreg7("c")}
                label={<InlineMath>{"0 \\leq x \\leq 3.7"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            <br />
            Una diferencia notable entre las situaciones del taxista y del
            vehículo todoterreno es que, si bien tienen la misma regla de
            correspondencia, sus dominios y rangos son tan diferentes al grado
            que el dominio en el caso del taxista no acepta valores de{" "}
            <InlineMath>x</InlineMath>
            negativos, mientras que en el caso del todoterreno sí.
            <br />
            <br />
            Podríamos seguir explorado situaciones en las cuáles la regla de
            correspondencia <InlineMath>p(x)=30+8.5x</InlineMath> aplique, y
            para cada una de esas situaciones encontraríamos un dominio y rango.
            No obstante, muy a menudo en los cursos de matemáticas encontrarás
            reglas de correspondencia para las cuáles no se da un contexto. Aún
            así, es posible encontrar el dominio y el rango para cualquier regla
            de correspondencia, con la diferencia de que ya no estarán limitados
            por la situación contextual, sino por la regla misma. Este dominio,
            se llama dominio máximo.
            <br />
            <br />
            Antes de determinar el dominio y rango máximos de la función
            <InlineMath>p(x)=30+8.5x</InlineMath>, dado que ahora no se está
            describiendo una situación particular, sería más apropiado
            expresarlo de forma genérica, como se indicó en el apartado de
            nomenclatura de funciones. Por lo tanto, simplemente sustituiremos{" "}
            <InlineMath>p</InlineMath> por <InlineMath>f</InlineMath>, en
            referencia a que se trata de la regla de correspondencia de una
            función genérica:
            <br />
            <BlockMath>f(x)= 30+8.5x</BlockMath>
            <br />
            Pronto volveremos a esta expresión. Por ahora, veremos casos en los
            que una regla de correspondencia genérica presenta restricciones en
            cuanto a su dominio, y por lo tanto, también en cuanto a su rango.
            <br />
            <br />
            Como recordarás de tus cursos de aritmética y álgebra, no es posible
            dividir un número real cualquiera entre cero, ni tampoco es posible
            sacar la raíz cuadrada de un número negativo en los reales. Estos
            dos casos representan las principales limitaciones en cuanto al
            dominio y rango de una función real.
            <br />
            <br />
            Teniendo en cuenta la imposibilidad de la división entre cero,
            determinemos el dominio y el rango de la regla de correspondencia
            <InlineMath>f(x)=2/x</InlineMath>. ¿Cuál de los siguientes números
            no es un valor válido para <InlineMath>x</InlineMath>?
          </p>

          <Form /* className="prueba" */>
            <Form.Group>
              <Form.Check
                type="checkbox"
                id="opcionA"
                name="opcionesPreg8"
                value="a"
                checked={opcionSelecPreg8 === "a"}
                onChange={() => handleSelecPreg8("a")}
                label={<InlineMath>{"-99"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionB"
                name="opcionesPreg8"
                value="b"
                checked={opcionSelecPreg8 === "b"}
                onChange={() => handleSelecPreg8("b")}
                label={<InlineMath>{"0"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionC"
                name="opcionesPreg8"
                value="c"
                checked={opcionSelecPreg8 === "c"}
                onChange={() => handleSelecPreg8("c")}
                label={<InlineMath>{"100"}</InlineMath>}
              />
              <Form.Check
                type="checkbox"
                id="opcionD"
                name="opcionesPreg8"
                value="d"
                checked={opcionSelecPreg8 === "d"}
                onChange={() => handleSelecPreg8("d")}
                label={<InlineMath>{"0.15"}</InlineMath>}
              />
            </Form.Group>
          </Form>
          <p>
            Otra manera de estructurar la pregunta es cuestionarnos: ¿es posible
            dividir <InlineMath>2</InlineMath> entre{" "}
            <InlineMath>-99</InlineMath>? ¿Es posible dividir{" "}
            <InlineMath>2</InlineMath> entre <InlineMath>0</InlineMath>? Etc.
            Esto nos lleva a recordar que la división entre cero no está
            definida, y por lo tanto no podemos obtener ningún resultado cuando
            evaluamos <InlineMath>f(0)</InlineMath>:
            <BlockMath>{"f(0) = \\frac{2}{0} =!"}</BlockMath>
            Entonces, podemos excluir al cero del dominio de la función y decir
            que el dominio de <InlineMath>f(x)=2/x</InlineMath> consiste en
            todos los reales excepto el cero:
            <BlockMath>
              {"-\\infty < x < +\\infty,\\ excepto \\ x = 0"}
            </BlockMath>
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={6}>
              <p>
                Ya que hemos encontrado el dominio, podemos determinar el rango.
                Para ello es conveniente ver cómo se comportan los valores que
                adquiere la variable <InlineMath>f(x)</InlineMath> en distintas
                situaciones. La <b>Tabla 6</b> muestra los valores de{" "}
                <InlineMath>f(x)</InlineMath> para distintos valores de{" "}
                <InlineMath>x</InlineMath>, complétala.
              </p>
              <Tabla6 />
              <p>
                <br />
                Como se ha visto anteriormente, cada par ordenado{" "}
                <InlineMath>(x, f(x))</InlineMath>se puede representar como un
                punto en el plano. Coloca los puntos amarillos donde les
                corresponda según la <b>Tabla 6</b>.
                <br />
                <br />
                Los puntos <InlineMath>A-H</InlineMath> son tan solo algunos de
                los puntos que forman a la gráfica de la función, pero muestran
                cómo es su tendencia y dan una idea de su forma. Presiona el
                siguiente botón para graficar la función{" "}
                <InlineMath>f(x)=2/x</InlineMath>, la cuál está conformada por
                todos los pares ordenados{" "}
                <InlineMath>{"(x, \\, 2/x)"}</InlineMath> situados en el plano
                cartesiano
              </p>

              <GraficaF boardId="board2" funcionGrafica={(x) => 20 / x} />

              {/* <SegmentFR boardId="board2" /> */}
              <br />
              <CuestionarioFR />

              <p>
                Después de analizar las primeras cuatro preguntas y sus
                respuestas, es hora de profundizar en la comprensión de la
                función <InlineMath>f(x)=2/x</InlineMath> mediante una reflexión
                más detallada. Para ello, te invito a dibujar el punto{" "}
                <InlineMath>M</InlineMath> y deslizarlo a lo largo de la gráfica
                de la función.
                <br />
                <br />
                <PuntoMovibleF boardId="board2" initialCoordinates={[5, 4]} />
                <br />
                <br />
                Este ejercicio te ayudará a visualizar mejor el comportamiento
                de la función en diferentes rangos de valores de{" "}
                <InlineMath>x</InlineMath> y a relacionarlo con los conceptos
                discutidos anteriormente.
                <br />
                <br />
                Mientras realizas esta actividad, considera las siguientes
                preguntas para reflexionar:
                <br />
                <br />
              </p>
              <ul className="li-preg-reflex">
                <li>
                  ¿A cuánto tiende <InlineMath>f(x)</InlineMath> cuando{" "}
                  <InlineMath>x</InlineMath> es negativo y grande?
                </li>
                <li>
                  ¿Cuál es la tendencia de <InlineMath>f(x)</InlineMath> cuando{" "}
                  <InlineMath>x</InlineMath> es negativo y muy pequeño?
                </li>
                <li>
                  ¿Cuál es la tendencia de <InlineMath>f(x)</InlineMath> cuando{" "}
                  <InlineMath>x</InlineMath> es positivo y muy pequeño?
                </li>
                <li>
                  ¿A cuánto se aproxima <InlineMath>f(x)</InlineMath> cuando{" "}
                  <InlineMath>x</InlineMath> es positivo y grande?
                </li>
                <li>
                  ¿Por qué <InlineMath>f(x)</InlineMath> nunca es igual a cero?
                </li>
              </ul>
              <p>
                <br />
                <br />
                Observa que en la gráfica de <InlineMath>f(x)=2/x</InlineMath>,
                el rango va de <InlineMath>{"-\\infty"}</InlineMath> a{" "}
                <InlineMath>0</InlineMath>
                por la derecha, sin tocarlo, y de{" "}
                <InlineMath>{"+\\infty"}</InlineMath> a cero por la izquierda,
                sin tocarlo. Por lo que se puede concluir que el rango es:
                <BlockMath>
                  {"-\\infty < f(x) < +\\infty,\\ excepto \\ f(x) = 0"}
                </BlockMath>
              </p>
            </Col>
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 4</h6>
                </div>
                <BoardXX boardId="board2" boundingBox={[-27, 130, 27, -80]} />
                <GraficoArrastrePuntosFR boardId="board2" />
              </Row>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row className="main-row">
        <Col>
          <p>
            Examinemos otro caso en el cuál la regla de correspondencia impone
            una restricción al dominio, pero esta vez en cuanto a la
            imposibilidad de sacar raíz cuadrada de un número negativo. Piensa
            en qué casos no es posible evaluar la siguiente regla:
            <BlockMath>{"f(x) = \\sqrt{x}"}</BlockMath>
            Como se mencionó antes, no es posible sacar raíz cuadrada de números
            reales negativos, lo que quiere decir que el dominio consiste sólo
            en números positivos. Pero ¿hasta qué número positivo? En realidad,
            no hay límite en el sentido de que no hay ninguna restricción
            contextual y siempre es posible sacar raíz cuadrada de un número
            cada vez más grande, por lo que el dominio de la función son todos
            los reales positivos y el cero:
            <BlockMath>{"0 <= x < +\\infty"}</BlockMath>
            Por otra parte, para encontrar el rango, graficaremos algunos puntos
            de la función y observemos la tendencia. Completa la <b>
              Tabla 7
            </b>{" "}
            con los datos que faltan y luego grafica los puntos amarillos donde
            les corresponde.
            <br />
            <br />
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={6}>
              <Tabla7 />
              <p>
                <br />
                Los puntos <InlineMath>A-F</InlineMath> son tan solo algunos de
                los puntos que forman a la gráfica de{" "}
                <InlineMath>{"f(x)= \\sqrt(x)"}</InlineMath>, pero muestran cómo
                es su tendencia y dan una idea de su forma.
                <br />
                <br />
                Presiona el siguiente botón para graficar la función, la cuál
                está conformada por todos los pares ordenados{" "}
                <InlineMath>{"(x, \\, \\sqrt(x))"}</InlineMath>
                situados en el plano cartesiano.
              </p>
              <GraficaF boardId="board3" funcionGrafica={(x) => Math.sqrt(x)} />
              <p>
                <br />
                Esta gráfica muestra la tendencia de{" "}
                <InlineMath>f(x)</InlineMath> a medida que{" "}
                <InlineMath>x</InlineMath> cambia. Por ejemplo, observa que{" "}
                <InlineMath>f(x)</InlineMath> se incrementa cuando{" "}
                <InlineMath>x</InlineMath> se incrementa cada vez más. Para
                visualizarlo mejor, puedes graficar el{" "}
                <InlineMath>{"punto \\, M"}</InlineMath> y observar el valor de{" "}
                <InlineMath>f(x)</InlineMath> para distintos valores de{" "}
                <InlineMath>x</InlineMath> cada vez más grandes.
                <br />
              </p>
              <PuntoMovibleF
                boardId="board3"
                initialCoordinates={[7, Math.sqrt(7)]}
              />
              <p>
                <br />
                "Esta tendencia tiene lógica, ya que al calcular la raíz
                cuadrada de números cada vez más grandes, los valores
                resultantes también aumentan. Por lo tanto podemos concluir que
                el rango máximo de <InlineMath>
                  {"f(x)=\\sqrt(x)"}
                </InlineMath>{" "}
                son todos los reales positivos y el cero:
                <BlockMath>{"0 <= f(x) < +\\infty"}</BlockMath>
              </p>
            </Col>
            <Col md={6}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 5</h6>
                </div>
                <BoardXX boardId="board3" boundingBox={[-2, 11, 51, -1]} />
                <GraficoArrastrePuntosFRaiz boardId="board3" />
              </Row>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>
      <Row>
        <Col>
          <p>
            Estos dos casos, a saber, <InlineMath>f(x)=20/x</InlineMath> y{" "}
            <InlineMath>{"f(x)=\\sqrt(x)"}</InlineMath>, son ejemplos de
            funciones que presentan indeterminaciones para ciertos valores de x,
            por lo que para hallar su dominio basta con excluir aquellos valores
            para los cuáles la expresión se indetermina.
          </p>
        </Col>
      </Row>
      <br />
      <Quiz15 />

      <Row>
        <Col>
          <p>
            <br />
            Si bien en estas actividades no estudiaremos funciones racionales ni
            con raíces, es importante conocerlas para entender en qué casos la
            regla misma delimita su dominio.
            <br />
            <br />
            Volvamos a la regla de correspondencia genérica{" "}
            <InlineMath>f(x)=30+8.5x</InlineMath> y piensa en si existe algun
            número en el cuál no podamos evaluar la función. Para ello es
            necesario recordar que en matemáticas las indeterminaciones suceden
            cuando se tiene división entre cero o cuando se intenta sacar raíz
            cuadrada de números negativos. En vista de que{" "}
            <InlineMath>f(x)=30+8.5x</InlineMath> consiste únicamente en una
            suma y un producto, no hay nada que restrinja su dominio y en
            consecuencia su dominio máximo son todos los números reales:
            <BlockMath>{"-\\infty < x < +\\infty"}</BlockMath>
          </p>
        </Col>
      </Row>
      <Row>
        <BoardsContextProvider>
          <GraficaFContextProvider>
            <Col md={5}>
              <p>
                Ahora, para conocer su rango, analicemos cuál es el
                comportamiento de <InlineMath>f(x)</InlineMath> para distintos
                valores de <InlineMath>x</InlineMath>. Para ello podemos
                recordar que ya hemos graficado algunos puntos de la función y
                que incluso unimos dichos puntos con el{" "}
                <InlineMath>{"segmento \\, AG"}</InlineMath>. Esto nos permite
                conocer cómo es la función para{" "}
                <InlineMath>{"0 \\leq x \\leq 30"}</InlineMath>.
                <br />
                <br />
                ¿Qué sucede con <InlineMath>f(x)</InlineMath> conforme{" "}
                <InlineMath>x</InlineMath> se hace más grande que{" "}
                <InlineMath>30</InlineMath> y cada vez mayor? Pues si
                evaluáramos la función en números cada vez más grandes podemos
                ver cómo <InlineMath>f(x)</InlineMath> también se va
                incrementando, esto es, si <InlineMath>x</InlineMath> crece,{" "}
                <InlineMath>f(x)</InlineMath> también crece.
                <br />
                <br />Y ¿cómo es <InlineMath>f(x)</InlineMath> a medida que{" "}
                <InlineMath>x</InlineMath> es menor que cero y cada vez de mayor
                magnitud? En este caso <InlineMath>f(x)</InlineMath> también es
                negativo y cada vez de mayor magnitud.
                <br />
                <br />
                Para confirmar estas observaciones, grafica{" "}
                <InlineMath>f(x)=30+8.5x</InlineMath>, luego grafica el{" "}
                <InlineMath>{"punto \\, M"}</InlineMath> y deslizalo sobre la
                gráfica de la función.
              </p>

              <GraficaF boardId="board4" funcionGrafica={(x) => 30 + 8.5 * x} />
              <br />
              <PuntoMovibleF boardId="board4" initialCoordinates={[7, 89.5]} />
              <p>
                <br />
                Lo anterior quiere decir que <InlineMath>f(x)</InlineMath>{" "}
                abarca valores negativos y de una magnitud tan grande como se
                quiera hasta valores positivos tan grandes como se desee, por lo
                que el rango es:
                <BlockMath>{"-\\infty < f(x) < +\\infty"}</BlockMath>
                Ya que has graficado <InlineMath>f(x)= 30+8.5x</InlineMath>, usa
                los botones de zoom para observar que la gráfica tiene un
                dominio que abarca todos los números reales (de <InlineMath>{"-\\infty"}</InlineMath> a <InlineMath>{"\\infty"}</InlineMath>) y
                su rango también son todos los números reales. Como has
                observado, la gráfica de <InlineMath>f(x)=30+8.5x</InlineMath> es una línea recta.
              </p>
            </Col>
            <Col md={7}>
              <Row className="sticky">
                <div className="tittle-table">
                  <h6>Ventana gráfica 6</h6>
                </div>
                <BoardXX boardId="board4" boundingBox={[-2.5, 295, 32, -10]} />
                <GraficoArrastrePuntosFL boardId="board4" />
              </Row>
            </Col>
          </GraficaFContextProvider>
        </BoardsContextProvider>
      </Row>

      <Row className="row-nuevotema">
        <BoardsContextProvider>
          <FuncLinealContextProvider>
            <Col
              className="border borde-redon"
              md={6}
              style={{ backgroundColor: "#011627" }}
            >
              <br />
              <div className="sticky-act16">
                <div className="tittle-table">
                  <h6 style={{ color: "white" }}>Ventana gráfica 7</h6>
                </div>
                <BoardXX boardId="board5" boundingBox={[-20, 60, 20, -30]} />
                <TextoFuncion />
                <FuncionLineal2 boardId="board5" />
              </div>
            </Col>
            <Col>
              <Quiz16 />
            </Col>
          </FuncLinealContextProvider>
        </BoardsContextProvider>
      </Row>
    </Container>
  );
};

export default GraficosDeFunciones;
