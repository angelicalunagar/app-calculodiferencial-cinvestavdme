import {React, useState }from 'react'
import {Form} from "react-bootstrap";
import { BlockMath, InlineMath } from "react-katex";

const CuestionarioFR = () => {
  const [respuestasCFR, setRespuestasCFR] = useState({
    preg1: "",
    preg2: "",
    preg3: "",
    preg4: "",
  });

  const handleRespChangeCFR = (e, preg) => {
    const { value } = e.target;
    setRespuestasCFR((prevRespuestas) => ({
      ...prevRespuestas,
      [preg]: value,
    }));
  };
  return (
    <>
  <p>
    Contesta las siguientes preguntas: 
  </p>
      <ul className='cuest-fr'>
            <li>
              ¿Qué punto tiene una coordenada <InlineMath>x</InlineMath> negativa y de gran magnitud?
              ¿Cómo es <InlineMath>f(x)</InlineMath> en este caso?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA1"
                    name="opciones1"
                    value="a"
                    checked={respuestasCFR.preg1 === "a"}
                    onChange={(e) => handleRespChangeCFR(e, "preg1")}
                    label='Punto A. f(x) es casi cero'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB1"
                    name="opciones1"
                    value="b"
                    checked={respuestasCFR.preg1 === "b"}
                    onChange={(e) => handleRespChangeCFR(e, "preg1")}
                    label='Punto B. f(x) es negativo y casi cero'
                  />
                </Form.Group>
              </Form>
            </li>
            <br />
            <li>
              ¿Qué punto tiene una coordenada <InlineMath>x</InlineMath> negativa y muy cercana a cero?
              ¿Cómo es <InlineMath>f(x)</InlineMath>?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA2"
                    name="opciones2"
                    value="a"
                    checked={respuestasCFR.preg2 === "a"}
                    onChange={(e) => handleRespChangeCFR(e, "preg2")}
                    label='Punto B. f(x) es negativo y casi cero'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB2"
                    name="opciones2"
                    value="b"
                    checked={respuestasCFR.preg2 === "b"}
                    onChange={(e) => handleRespChangeCFR(e, "preg2")}
                    label='Punto D. f(x) es negativo muy grande'
                  />
                </Form.Group>
              </Form>
            </li>
            <br />
            <li>
              ¿Qué punto tiene una coordenada <InlineMath>x</InlineMath> positiva y muy cercana a cero?
              ¿Cómo es <InlineMath>f(x)</InlineMath>?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA3"
                    name="opciones3"
                    value="a"
                    checked={respuestasCFR.preg3 === "a"}
                    onChange={(e) => handleRespChangeCFR(e, "preg3")}
                    label='Punto E. f(x) es positivo muy grande'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB3"
                    name="opciones3"
                    value="b"
                    checked={respuestasCFR.preg3 === "b"}
                    onChange={(e) => handleRespChangeCFR(e, "preg3")}
                    label='Punto H. f(x) es positivo y casi cero'
                  />
                </Form.Group>
              </Form>
            </li>
            <br />
            <li>
              ¿Qué punto tiene una coordenada <InlineMath>x</InlineMath> positiva y de gran magnitud?
              ¿Cómo es <InlineMath>f(x)</InlineMath> en este caso?
              <Form>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="opcionA4"
                    name="opciones4"
                    value="a"
                    checked={respuestasCFR.preg4 === "a"}
                    onChange={(e) => handleRespChangeCFR(e, "preg4")}
                    label='Punto F. f(x) es positivo y casi cero'
                  />
                  <Form.Check
                    type="checkbox"
                    id="opcionB4"
                    name="opciones4"
                    value="b"
                    checked={respuestasCFR.preg4 === "b"}
                    onChange={(e) => handleRespChangeCFR(e, "preg4")}
                    label='Punto H. f(x) es positivo y casi cero'
                  />
                </Form.Group>
              </Form>
            </li>
            <br />
          </ul>
    </>
  )
}

export default CuestionarioFR