import React from "react";
import { Col, Row } from "react-bootstrap";
import RectanguloArea from "./RectanguloArea";
import "katex/dist/katex.min.css";
import "../styles/Bloque1_1.css";
import { useState} from "react";

import { BlockMath, InlineMath } from "react-katex";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const RectanguloAreaScroll = () => {
  const rectanguloRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rectanguloRef.current) {
        const rectangulo = rectanguloRef.current;
        const columna = rectangulo.parentElement; // Obtiene el elemento padre (la columna)
        const rectanguloTop = rectangulo.getBoundingClientRect().top;
        const columnaTop = columna.getBoundingClientRect().top;
        const distanciaScroll = window.scrollY || window.pageYOffset;
        const nuevaPosicion = rectanguloTop - columnaTop + distanciaScroll + 20; // Ajusta el 20 según sea necesario
        rectangulo.style.top = `${nuevaPosicion}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={rectanguloRef} className="rectangulo-area">
      <RectanguloArea />
    </div>
  );
};

const TuComponente = () => {
  return (
    <Row className="row-nuevotema">
      <Col className="actividad" md={7}>
        <p>
          <b>Actividad 8.</b> Utiliza la ventana gráfica{" "}
          <InlineMath>{"2"}</InlineMath> para encontrar el dominio de{" "}
          <InlineMath>{"x"}</InlineMath> o de <InlineMath>{"y"}</InlineMath>,
          según se solicite, y la imagen de la función
          <InlineMath>{"A(x, y) = xy"}</InlineMath>. Recuerda que{" "}
          <InlineMath>{"x+y=150"}</InlineMath>.
        </p>
        <ul>
          <li>
            Determina el dominio de <InlineMath>{"y"}</InlineMath> y el rango de{" "}
            <InlineMath>{"A"}</InlineMath> para los siguientes dominios de{" "}
            <InlineMath>{"x"}</InlineMath>:
            <ul>
              <li>
                <b>A)</b> Cuando el dominio de <InlineMath>{"x"}</InlineMath> es{" "}
                <InlineMath>{"0 \\leq x \\leq 75"}</InlineMath>:
                <br />
                el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <InlineMath>{"\\leq y \\leq"}</InlineMath>
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <br />y la imagen de la función área es:{" "}
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
              </li>
              <br />
              <br />
              <li>
                <b>B)</b> Cuando{" "}
                <InlineMath>{"0 \\leq x \\leq 150"}</InlineMath>, <br />
                el dominio de <InlineMath>{"y"}</InlineMath> es:{" "}
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <InlineMath>{"\\leq y \\leq"}</InlineMath>
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <br />y la imagen de la función área es:{" "}
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
              </li>
            </ul>
          </li>
          <br />
          <li>
            Determina el dominio de <InlineMath>{"x"}</InlineMath> y el rango de{" "}
            <InlineMath>{"A"}</InlineMath> para el siguiente dominio de{" "}
            <InlineMath>{"y"}</InlineMath>:
            <ul>
              <li>
                <b>A)</b> Cuando <InlineMath>{"0 \\leq y \\leq 40"}</InlineMath>
                , <br />
                el dominio de <InlineMath>{"x"}</InlineMath> es:{" "}
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <InlineMath>{"\\leq x \\leq"}</InlineMath>
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <br />y la imagen de la función área es:{" "}
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
                <InlineMath>{"\\leq A(x, y) \\leq"}</InlineMath>
                <input
                  className="input-act8"
                  type="text"
                  value={respuestasAct5.preg1a}
                  onChange={(e) => handleInputAct5("preg1a", e.target.value)}
                />
              </li>
            </ul>
          </li>
        </ul>
      </Col>
      <Col className="border" md={4}>
        <RectanguloAreaScroll />
      </Col>
    </Row>
  );
};

export default TuComponente;
