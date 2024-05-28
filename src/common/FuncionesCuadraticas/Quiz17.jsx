// Quiz17.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { InlineMath } from "react-katex";

const Quiz17 = () => {
  const md = 12;
  const activityNumber = "17";
  const instruction = (
    <span>
      Grafica la función <InlineMath>{"f(x)= 150x-x^2"}</InlineMath> en la
      <em>
        <b>Ventana gráfica 9</b>
      </em>{" "}
      y responde a estas preguntas. Recuerda que por ahora estamos considerando
      a la función dentro del contexto del área del terreno.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          ¿Cuál es la imagen de <InlineMath>x=40</InlineMath>?
        </span>
      ),
      resps: ["4400", "5000", "40", "870"],
      renderInlineMath: true,
    },

    preg2: {
      preg: (
        <span>
          ¿Qué significa que la imagen de <InlineMath>x=50</InlineMath> sea{" "}
          <InlineMath>5000</InlineMath>?
        </span>
      ),
      resps: [
        'Cuando el lado "x" mide 50 m, el área es de 5000 metros cuadrados',
        'Cuando el lado "y" mide 50 m, el área es de 5000 metros cuadrados',
        "El área es de 50 metros cuadrados cuando el lado mide 5000 m",
      ],
      renderInlineMath: false,
    },

    preg3: {
      preg: (
        <span>
          ¿Cuánto vale <InlineMath>x</InlineMath> si su imagen es 3500{" "}
          <InlineMath>m^2</InlineMath>?
        </span>
      ),
      resps: ["x=28.9", "x=31.2", "x=60"],
      renderInlineMath: true,
    },

    preg4: {
      preg: <span>¿Qué valor es más grande f(55) o f(125)?</span>,

      resps: ["f(55)", "f(125)", "Valen lo mismo"],
      renderInlineMath: false,
    },
  };

  const correctAnswers = {
    preg1: "4400",
    preg2: 'Cuando el lado "x" mide 50 m, el área es de 5000 metros cuadrados',
    preg3: "x=28.9",
    preg4: "f(55)",
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

export default Quiz17;
