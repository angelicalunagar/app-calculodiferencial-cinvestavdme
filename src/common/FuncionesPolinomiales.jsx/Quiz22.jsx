// Quiz20.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz22 = () => {
  const md = 12;
  const activityNumber = "22";
  const instruction = (
    <span>
      Interactúa con la <em><b>Ventana gráfica 15</b></em> en donde hemos graficado la función
      <InlineMath>f(x)=x^3+5x^2+x-2</InlineMath>. Contesta las siguientes
      preguntas en donde identificarás ciertas características de la gráfica de
      esta función: dominio, rango, intervalos del dominio donde{" "}
      <InlineMath>f(x)</InlineMath> se incrementa o disminuye, puntos máximos y
      mínimos relativos, intervalos del dominio donde{" "}
      <InlineMath>f(x)</InlineMath> es positiva o negativa, etc.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          ¿Todas las funciones cúbicas tienen el mismo dominio? En caso
          afirmativo, ¿cuál es?
        </span>
      ),

      resps: [
        "-\\infty < x < \\infty",
        "-100 < x < 100",
        "-1000 < x < 1000",
        "No\\,  tienen\\, el\\, mismo\\, dominio",
      ],
      renderInlineMath: true,
    },

    preg2: {
      preg: (
        <span>
          ¿Todas las funciones cúbicas tienen el mismo rango? En caso
          afirmativo, ¿cuál es?
        </span>
      ),

      resps: [
        "-\\infty < x < \\infty",
        "-50 < x < 50",
        "-1000 < x < \\infty",
        "No\\,  tienen\\, el\\, mismo\\, rango",
      ],
      renderInlineMath: true,
    },

    preg3: {
      preg: (
        <span>
          ¿Cuánto vale <InlineMath>x</InlineMath> si{" "}
          <InlineMath>f(x) = 4</InlineMath>?
        </span>
      ),

      resps: ["x=0.93 \\, \\, o \\, \\, x=-1.45 \\, \\, o \\, \\, x=-4.48", "x=0.80", "x=-1.45", "x=-1.45, \\, -4.48"],
      renderInlineMath: true,
    },

    preg4: {
      preg: (
        <span>
          ¿Cuánto vale <InlineMath>f(x)</InlineMath> cuando{" "}
          <InlineMath>x = 6</InlineMath>, es decir, cuánto vale{" "}
          <InlineMath>f(6)</InlineMath>?
        </span>
      ),

      resps: ["f(6)= 400", "f(6)= 369", "f(6)= 460", "f(6)=200"],
      renderInlineMath: true,
    },

    preg5: {
      preg: (
        <span>
          Grafica el <b>punto M</b> para observar el comportamiento de{" "}
          <InlineMath>f(x)</InlineMath> conforme <InlineMath>x</InlineMath> se
          incrementa, es decir, mientras <b>M</b> se mueve de izquierda a
          derecha. ¿En qué intervalo <InlineMath>f(x)</InlineMath> va
          disminuyendo?
        </span>
      ),

      resps: [
        "-3.23 < x < -0.10",
        "-4 < x < 0",
        "-5 < x 0.15 ",
        "-4.7 < x 0.52",
      ],
      renderInlineMath: false,
    },

    preg6: {
      preg: (
        <span>
          ¿En qué intervalo del dominio <InlineMath>f(x)</InlineMath> aumenta?
        </span>
      ),

      resps: [
        "-\\infty < x < \\infty, \\, excepto \\, -3.23 < x < -0.10",
        "-\\infty < x < \\infty",
        "-\\infty < x < -3.23 ",
        "-0.10 < x < \\infty",
      ],
      renderInlineMath: true,
    },

    preg7: {
      preg: (
        <span>
          Máximo relativo es aquella pareja <InlineMath>(x, f(x))</InlineMath>{" "}
          para la cual <InlineMath>f(x)</InlineMath> es el máximo valor posible
          en su vecindad (intervalo), aunque no necesariamente en todo
          el dominio. Se encuentra donde <InlineMath>f(x)</InlineMath> cambia de
          ir incrementándose a ir disminuyendo. ¿Cuál de los siguientes puntos
          de la función es un punto máximo relativo?
        </span>
      ),

      resps: [
        "Punto = (-3.23, 13.24)",
        "Punto = (-3, 13)",
        "Punto = (0, -2)",
        "Punto = (-0.10, -2.05)",
      ],
      renderInlineMath: false,
    },

    preg8: {
      preg: (
        <span>
          Mínimo relativo es aquella pareja <InlineMath>(x, f(x))</InlineMath>{" "}
          para la cual <InlineMath>f(x)</InlineMath> es el mínimo valor posible
          en su vecindad, aunque no necesariamente en todo el dominio. Se
          encuentra donde <InlineMath>f(x)</InlineMath> cambia de ir
          disminuyendo a ir aumentando. ¿Cuál de los siguientes puntos de la
          función es un punto mínimo relativo?
        </span>
      ),

      resps: [
        "Punto = (-0.10, -2.05)",
        "Punto = (-3.23, 13.24)",
        "Punto = (-3, 13)",
        "Punto = (0, -2)",
      ],
      renderInlineMath: false,
    },

    preg9: {
      preg: (
        <span>
          ¿Cuál es la imagen del intervalo del dominio{" "}
          <InlineMath>{"0 < x < 2"}</InlineMath>? Puedes apoyarte visualizando
          intervalos del dominio y sus correspondientes imágenes mediante el
          botón{" "}
          <b>
            <em>Graficar intervalo</em>
          </b>
          .
        </span>
      ),

      resps: [
        "-2 < f(x) < 28",
        "-5 < f(x) < 30",
        "-2.5 < f(x) < 27",
        "-5 < f(x) < 35",
      ],
      renderInlineMath: true,
    },
    preg10: {
      preg: (
        <span>
          ¿Cuál es la imagen del intervalo del dominio{" "}
          <InlineMath>{"-4.3 < x < 2"}</InlineMath>?
        </span>
      ),
      resps: [
        "-2.05 < f(x) < 28",
        "-5 < f(x) < 30",
        "-2.5 < f(x) < 30",
        "-6.62 < f(x) < 28",
      ],
      renderInlineMath: true,
    },
    preg11: {
      preg: (
        <span>
          ¿Cuál es la imagen del intervalo del dominio{" "}
          <InlineMath>{"-5 < x < 2.2"}</InlineMath>?
        </span>
      ),

      resps: [
        "-7 < f(x) < 35.05",
        "-2.05 < f(x) < 34",
        "-6 < f(x) < 34",
        "-5 < f(x) < 35",
      ],
      renderInlineMath: true,
    },
    preg12: {
      preg: (
        <span>
          ¿Cuál es la imagen de <InlineMath>x=-2</InlineMath>? ¿Es positiva o
          negativa?
        </span>
      ),

      resps: [
        "f(-2)=8. Es positiva",
        "f(-2)=28. Es positiva",
        "f(-2)=-8. Es negativa",
        "f(2)=8. Es positiva",
      ],
      renderInlineMath: false,
    },
    preg13: {
      preg: (
        <span>
          Encuentra todos los valores del dominio que tienen una imagen positiva{" "}
          <InlineMath>{"(f(x) > 0 )"}</InlineMath>:
        </span>
      ),

      resps: [
        "-4.7 < x < -0.82 \\, \\, y \\, \\, 0.52 < x < \\infty",
        "-4.7 < x < -0.82",
        "0.52 < x < \\infty",
        "-4.7 < x < \\infty",
      ],
      renderInlineMath: true,
    },
    preg14: {
      preg: (
        <span>
          Encuentra todos los valores del dominio que tienen una imagen negativa{" "}
          <InlineMath>{"(f(x) < 0 )"}</InlineMath>:
        </span>
      ),

      resps: [
        "-\\infty < x < -4.7 \\, \\, y \\, \\, -0.82 < x < 0.52",
        "-\\infty < x < -4.7",
        "-0.82  < x < 0.52",
        "-\\infty < x < 0.52",
      ],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "-\\infty < x < \\infty",
    preg2: "-\\infty < x < \\infty",
    preg3: "x=0.93 \\, \\, o \\, \\, x=-1.45 \\, \\, o \\, \\, x=-4.48",
    preg4: "f(6)= 400",
    preg5: "-3.23 < x < -0.10",
    preg6: "-\\infty < x < \\infty, \\, esxcepto \\, -3.23 < x < -0.10",
    preg7: "Punto = (-3.23, 13.24)",
    preg8: "Punto = (-0.10, -2.05)",
    preg9: "-2 < f(x) < 28",
    preg10: "-2.05 < f(x) < 28",
    preg11: "-7 < f(x) < 35.05",
    preg12: "f(-2)=8. Es positiva",
    preg13: "-4.7 < x < -0.82 \\, \\, y \\, \\, 0.52 < x < \\infty",
    preg14: "-\\infty < x < -4.7 \\, \\, y \\, \\, -0.82 < x < 0.52",
  };

  return (
    <div>
      <Quiz
        activityNumber={activityNumber}
        instruction={instruction}
        questions={questions}
        correctAnswers={correctAnswers}
        md={md}
      />
    </div>
  );
};

export default Quiz22;
