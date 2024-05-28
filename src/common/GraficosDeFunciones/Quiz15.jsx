// Quiz15.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz15 = () => {
  const md=10;
  const activityNumber = "15";
  const instruction = (
    <span>
      Determina el dominio máximo de las siguientes reglas de correspondencia:
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
