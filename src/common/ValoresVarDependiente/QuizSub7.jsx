// QuizSub7.js
import React from "react";
import QuizSub from "../Utilerias/QuizSub";
import { BlockMath, InlineMath } from "react-katex";

const QuizSub7 = () => {
  const md = 10;
  const activityNumber = "7";
  const instruction = (
    <span>
      Determina los valores que pueden adquirir las variables independiente y
      dependiente en cada situación.
    </span>
  );

  const questions = {
    preg1: {
      instruccion: (
        <em>
          Durante la quincena, la cantidad de dinero de Cristina depende del
          número de días que pasan de acuerdo con la regla de correspondencia{" "}
          <InlineMath>{"d(n)=4000-250n"}</InlineMath>.
        </em>
      ),
      subpreguntas: [
        {
          id: "preg1_1",
          subpregunta: "¿Qué valores puede adquirir el número de días n?",
          opciones: [
            "{0, 1, 2, 3, ..., 249, 250}",
            "{0, 1, 2, 4, ..., 3999, 4000}",
            "{0, 1, 2, 4, ...,14, 15}",
          ],
          renderInlineMath: true,
        },
        {
          id: "preg1_2",
          subpregunta:
            "¿Qué valores puede adquirir la cantidad de dinero d(n)?",
          opciones: [
            "{4000, 3750, 3500, 3250, ..., 500, 250}",
            "{0, 250, 500, 750, ..., 3750, 4000}",
            "{250, 500, 750, 1000, ..., 3750, 4000}",
          ],
          renderInlineMath: true,
        },
      ],
    },
    preg2: {
      instruccion: (
        <em>
          Un taxi calcula el precio <InlineMath>{"p(x)"}</InlineMath> de sus
          viajes en función de la distancia recorrida{" "}
          <InlineMath>{"x"}</InlineMath> de acuerdo con la expresión{" "}
          <InlineMath>{"p(x)=30+20x"}</InlineMath>. Si el taxi no hace viajes
          más largos que <InlineMath>{"30 \\, km"}</InlineMath>:
        </em>
      ),
      subpreguntas: [
        {
          id: "preg2_1",
          subpregunta:
            "¿Qué valores puede adquirir la variable independiente x?",
          opciones: ["0 ≤ x ≤ 30", "20 ≤ x ≤ 30", "0 ≤ x ≤ 20"],
          renderInlineMath: true,
        },
        {
          id: "preg2_2",
          subpregunta:
            "¿Qué valores puede adquirir la variable dependiente p(x)?",
          opciones: ["630 ≤ p(x) ≤ 0", "30 ≤ p(x) ≤ 630", "20 ≤ p(x) ≤ 630"],
          renderInlineMath: true,
        },
      ],
    },
    preg3: {
      instruccion: (
        <em>
          La distancia recorrida (en km) de un automóvil de carreras es función
          del tiempo transcurrido (en min) de acuerdo con la expresión{" "}
          <InlineMath>{"d(t)=2t"}</InlineMath>. Sabiendo que el motor solo
          soporta estar en funcionamiento <InlineMath>{"30 \\, min"}</InlineMath>:
        </em>
      ),
      subpreguntas: [
        {
          id: "preg3_1",
          subpregunta: "¿Qué valores puede adquirir el tiempo t?",
          opciones: ["2 ≤ t ≤ 30", "1 ≤ t ≤ 30", "0 ≤ t ≤ 30"],
          renderInlineMath: true,
        },
        {
          id: "preg3_2",
          subpregunta:
            "¿Qué valores puede adquirir la distancia recorrida d(t)?",
          opciones: ["4 ≤ d(t) ≤ 60", "0 ≤ d(t) ≤ 60", "2 ≤ d(t) ≤ 60"],
          renderInlineMath: true,
        },
      ],
    },
  };

  const correctAnswers = {
      preg1_1: "{0, 1, 2, 4, ...,14, 15}",
      preg1_2: "{4000, 3750, 3500, 3250, ..., 500, 250}",
      preg2_1: "0 ≤ x ≤ 30",
      preg2_2: "30 ≤ p(x) ≤ 630",
      preg3_1: "0 ≤ t ≤ 30",
      preg3_2: "0 ≤ d(t) ≤ 60",
  };

  return (
    <div>
      <QuizSub
        activityNumber={activityNumber}
        instruction={instruction}
        questions={questions}
        correctAnswers={correctAnswers}
        md={md}
      />
    </div>
  );
};

export default QuizSub7;
