// Quiz14.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz14 = () => {
  const md = 10;
  const activityNumber = "14";
  const instruction = (
    <span>
      Moviendo el punto <b>M</b> de la Ventana gráfica 3, contesta las
      siguientes preguntas sobre el caso del taxista.
      <br />
      <br />
      Recuerda que el segmento <InlineMath>AG</InlineMath> de la Actividad 13
      representa a la función que describe el precio{" "}
      <InlineMath>p(x)</InlineMath> de un viaje en taxi en función de la
      distancia recorrida <InlineMath>x</InlineMath>:
    
      <BlockMath>p(x)=30+8.5</BlockMath>
      <BlockMath>{"0 ≤ x ≤ 30"}</BlockMath>
      <BlockMath>{"30 ≤ p(x) ≤ 630"}</BlockMath>
    </span>
  );

  const questions = {  
    preg1: {
      preg: (
        <span>
          <InlineMath>{"f(x) = \\sqrt{x + 2}"}</InlineMath>
        </span>
      ),
      resps: ["x \\geq -2", "x \\geq -4", "x \\geq 2"], 
      renderInlineMath: true,
    },

    preg2: {
      preg: (
        <span>
          <InlineMath>{"f(x) = \\sqrt{x - 3}"}</InlineMath>
        </span>
      ),
      resps: ["x \\geq 2", "x \\geq 3", "x \\geq 4"],
      renderInlineMath: true,
    },

    preg3: {
      preg: (
        <span>
          <InlineMath>{"f(x) = \\frac{20}{x - 1}"}</InlineMath>
        </span>
      ),
      resps: [
        "-\\infty < x < +\\infty,\\ excepto \\ x = -1",
        "-\\infty < x < +\\infty,\\ excepto \\ x = 0",
        "-\\infty < x < +\\infty,\\ excepto \\ x = 1",
      ],
      renderInlineMath: true,
    },

    preg4: {
      preg: (
        <span>
          <InlineMath>{"f(x) = \\frac{5}{x + 3}"}</InlineMath>
        </span>
      ),
      resps: [
        "-\\infty < x < +\\infty,\\ excepto \\ x = -3",
        "-\\infty < x < +\\infty,\\ excepto \\ x = -4",
        "-\\infty < x < +\\infty,\\ excepto \\ x = -5",
      ],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "x \\geq -2",
    preg2: "x \\geq 3",
    preg3: "-\\infty < x < +\\infty,\\ excepto \\ x = 1",
    preg4: "-\\infty < x < +\\infty,\\ excepto \\ x = -3",
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

export default Quiz15;
