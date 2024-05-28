// Quiz20.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz20 = () => {
  const md = 12;
  const activityNumber = "20";
  const instruction = (
    <span>
      Dada la gráfica de la función
      <BlockMath>f(x)=150x-x^2</BlockMath>
      dibuja el punto <InlineMath>M</InlineMath> sobre la gráfica y responde las
      siguientes preguntas. Considera que ahora el dominio y rango son los
      máximos, puesto que no estamos considerando contexto alguno.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          ¿Cuánto vale <InlineMath>x</InlineMath> si{" "}
          <InlineMath>f(x) = 3000</InlineMath>?
        </span>
      ),

      resps: ["23.8", "25.4","21.2"],
      renderInlineMath: false,
    },

    preg2: {
      preg: (
        <span>
          ¿Cuánto vale <InlineMath>f(x)</InlineMath> cuando{" "}
          <InlineMath>x = 20</InlineMath>, es decir, cuánto vale{" "}
          <InlineMath>f(20)</InlineMath>?
        </span>
      ),

      resps: ["2600", "3000", "1950", "3300"],
      renderInlineMath: false,
    },

    preg3: {
      preg: (
        <span>
          ¿En qué intervalo <InlineMath>f(x)</InlineMath> va aumentando?
        </span>
      ),

      resps: ["-\\infty < x < 75", "0 < x < \\infty", "-\\infty < x < \\infty"],
      renderInlineMath: true,
    },

    preg4: {
      preg: (
        <span>
          ¿En qué intervalo <InlineMath>f(x)</InlineMath> va disminuyendo?
        </span>
      ),

      resps: ["75 < x < \\infty", "0 < x < \\infty", "-\\infty < x < \\infty"],
      renderInlineMath: true,
    },

    preg5: {
      preg: (
        <span>
          Puntos máximos de la gráfica de una función son aquellas parejas{" "}
          <InlineMath>(x, f(x))</InlineMath> para la cuáles{" "}
          <InlineMath>f(x)</InlineMath> es el máximo valor posible del rango.
          ¿Cuál de los siguientes puntos de la función es un punto máximo?
        </span>
      ),

      resps: [
        "Punto = (75, 5625)",
        "Punto = (80, 5600)",
        "Punto = (110, 5700)",
      ],
      renderInlineMath: false,
    },

    preg6: {
      preg: (
        <span>
          Puntos mínimos de la gráfica de una función son aquellas parejas{" "}
          <InlineMath>(x, f(x))</InlineMath> para las cuáles{" "}
          <InlineMath>f(x)</InlineMath> es el mínimo valor posible del rango.
          ¿Cuáles de los siguientes son puntos mínimos de{" "}
          <InlineMath>f(x)</InlineMath>?
        </span>
      ),

      resps: [
        "A = (-10, -1600) y B = (160, -1600)",
        "A = (-100, -25000) y B = (250, -25000)",
        "No hay puntos mínimos",
      ],
      renderInlineMath: false,
    },

    preg7: {
      preg: (
        <span>
          ¿Cuál es la imagen de <InlineMath>x=40</InlineMath>? ¿Es positiva o negativa? 
        </span>
      ),

      resps: ["f(40)=4400, f(40) es positiva", "f(40)=-4400, f(40) es negativa", "f(40)=0, f(40) no es ni positiva ni negativa"],
      renderInlineMath: false,
    },

    preg8: {
      preg: <span>¿Qué valores del dominio tienen una imagen positiva (<InlineMath>{"f(x) > 0"}</InlineMath>)?</span>,

      resps: ["0 < x < 150", "150 < x < \\infty", "-\\infty < x < 0"],
      renderInlineMath: true,
    },

    preg9: {
      preg: <span>¿Qué valores del dominio tienen una imagen negativa (<InlineMath>{"f(x) < 0"}</InlineMath>)?</span>,

      resps: ["-\\infty < x < \\infty,\\ excepto \\  0 < x < 150", "0 < x \\leq 150", "-\\infty < x < \\infty"],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "23.8",
    preg2: "2600",
    preg3: "-\\infty < x < 75",
    preg4: "75 < x < \\infty",
    preg5: "Punto = (75, 5625)",
    preg6: "No hay puntos mínimos",
    preg7: "f(40)=4400, f(40) es positiva",
    preg8: "0 < x < 150",
    preg9: "-\\infty < x < \\infty,\\ excepto \\  0 < x < 150",
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

export default Quiz20;
