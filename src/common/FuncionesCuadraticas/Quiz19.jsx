// Quiz19.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { InlineMath } from "react-katex";

const Quiz19 = () => {
  const md = 12;
  const activityNumber = "19";
  const instruction = (
    <span>
      Grafica la función <InlineMath>{"f(x)= 150x-x^2"}</InlineMath> en la{" "}
      <em>
        <b>Ventana gráfica 11</b>
      </em>{" "}
      y responde las siguientes preguntas donde identificarás intervalos del
      dominio donde <InlineMath>A(x)</InlineMath> se incrementa o disminuye, y
      puntos donde <InlineMath>A(x)</InlineMath> es máxima o mínima.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          Desliza el <InlineMath>{"punto \\, M"}</InlineMath> dentro del
          intervalo de dominio <InlineMath>35 ≤ x ≤ 65</InlineMath>,
          incrementando <InlineMath>x</InlineMath> (de izquierda a derecha).
          ¿Cómo varía el área <InlineMath>A(x)</InlineMath> a medida que el{" "}
          <InlineMath>{"punto \\, M"}</InlineMath> se desplaza?
        </span>
      ),

      resps: ["Va aumentando", "Va disminuyendo", "Siempre es igual"],
      renderInlineMath: false,
    },

    preg2: {
      preg: (
        <span>
          ¿Cuál es el intervalo más grande del dominio donde el área{" "}
          <InlineMath>A(x)</InlineMath> va aumentando (cuando te desplazas de
          izquierda a derecha)?
        </span>
      ),

      resps: ["0 ≤ x ≤ 75", "10 ≤ x ≤ 65", "0 ≤ x ≤ 80.5", "90 ≤ x ≤ 120"],
      renderInlineMath: false,
    },

    preg3: {
      preg: (
        <span>
          ¿Cuál es el intervalo más grande del dominio donde el área{" "}
          <InlineMath>A(x)</InlineMath> va disminuyendo (cuando te desplazas de
          izquierda a derecha)?
        </span>
      ),

      resps: ["75 ≤ x ≤ 150", "0 ≤ x ≤ 75", "0 ≤ x ≤ 80.5", "90 ≤ x ≤ 120"],
      renderInlineMath: false,
    },

    preg4: {
      preg: (
        <span>
          ¿Cuál es el área máxima <InlineMath>A(x)</InlineMath> que se puede
          obtener?
        </span>
      ),

      resps: ["5625 \\, m^2", "9657 \\, m^2", "6820 \\, m^2"],
      renderInlineMath: true,
    },

    preg5: {
      preg: (
        <span>
          ¿Cuánto debe medir el lado <InlineMath>x</InlineMath> para que el área{" "}
          <InlineMath>A(x)</InlineMath> sea máxima?
        </span>
      ),

      resps: ["75 \\, m", "85 \\, m", "65 \\, m"],
      renderInlineMath: true,
    },

    preg6: {
      preg: (
        <span>
          ¿En qué punto de la gráfica se alcanza el área{" "}
          <InlineMath>A(x)</InlineMath> máxima?
        </span>
      ),

      resps: [
        "Punto = (75, 5625)",
        "Punto = (80, 5600)",
        "Punto = (110, 4400)",
      ],
      renderInlineMath: false,
    },

    preg7: {
      preg: (
        <span>
          ¿En qué punto de la gráfica se alcanza el área{" "}
          <InlineMath>A(x)</InlineMath> mínima?
        </span>
      ),

      resps: ["Punto = (150, 0)", "Punto = (145, 725)", "Punto = (5, 725)"],
      renderInlineMath: false,
    },

    preg8: {
      preg: <span>¿Cuántos puntos mínimos tiene la función?</span>,

      resps: ["Uno", "Dos", "Tres"],
      renderInlineMath: false,
    },

    preg9: {
      preg: <span>¿Cuántos puntos máximos tiene la función?</span>,

      resps: ["Uno", "Dos", "Tres"],
      renderInlineMath: false,
    },
  };

  const correctAnswers = {
    preg1: "Va aumentando",
    preg2: "0 ≤ x ≤ 75",
    preg3: "75 ≤ x ≤ 150",
    preg4: "5625 \\, m^2",
    preg5: "75 \\, m",
    preg6: "Punto = (75, 5625)",
    preg7: "Punto = (150, 0)",
    preg8: "Dos",
    preg9: "Uno",
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

export default Quiz19;
