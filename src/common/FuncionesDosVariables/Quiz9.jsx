// Quiz15.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz9 = () => {
  const md = 11;
  const activityNumber = "9";
  const instruction = (
    <span>
      Una empresa de lácteos desea elaborar sus cajas de leche de{" "}
      <InlineMath>{" 1000 \\,  \\text{cm}^3 "}</InlineMath> (1L). De acuerdo con
      el diseñador, la altura de la botella debe medir el doble de uno de sus
      lados de la base. Denotaremos la longitud (en cm) de uno de los lados de
      la base con <InlineMath>{"y"}</InlineMath>, el otro lado con{" "}
      <InlineMath>{"x"}</InlineMath>, y la altura con{" "}
      <InlineMath>{"2x"}</InlineMath>.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          ¿Cuál es la regla de correspondencia que calcula el área de la caja?
          Recuerda que para calcular el área de una caja debes sumar el área de
          sus 6 caras.
        </span>
      ),
      resps: [
        "A(x,y) = 4x^2 + 6xy",
        "A(x,y) = 2x^2y + 8xy",
        "A(x,y) = 2x^2y + 6xy",
      ],
      renderInlineMath: true,
    },

    preg2: {
      preg: (
        <span>
          ¿Cuál es la relación entre las variables <InlineMath>x</InlineMath> y{" "}
          <InlineMath>y</InlineMath>?
        </span>
      ),
      resps: ["1000 = 2x^2", "2000 = 2x^2y", "1000 = 2x^2y"],
      renderInlineMath: true,
    },

    preg3: {
      preg: (
        <span>
          ¿Cuál es la regla de correspondencia que calcula el área de la caja en
          función de <InlineMath>x</InlineMath> únicamente?
        </span>
      ),
      resps: [
        "A(x) = 4x^2 + 2000/x",
        "A(x) = 4x^2 + 3000/x",
        "A(x) = 4x^2 + 4000/x",
      ],
      renderInlineMath: true,
    },

    preg4: {
      preg: (
        <span>
          ¿Cuál es la regla de correspondencia que calcula el área de la caja en
          función de <InlineMath>y</InlineMath> únicamente?
        </span>
      ),
      resps: [
        "A(y)=\\frac{2000}{y}+60\\sqrt{5} \\sqrt{y}",
        "A(y)=\\frac{2000}{y}+60 \\sqrt{y}",
        "A(y)=\\frac{2000}{\\sqrt{y}}+60 \\sqrt{5}",
      ],
      renderInlineMath: true,
    },

    preg5: {
      preg: (
        <span>
          Considerando el área en función del lado{" "}
              <InlineMath>x</InlineMath> únicamente, si el diseñador indica que
              el dominio de <InlineMath>x</InlineMath> debe ser{" "}
              <InlineMath>{"6≤x≤15"}</InlineMath>. ¿Cuál es el rango de{" "}
              <InlineMath>A(x)</InlineMath>?
        </span>
      ),
      resps: [
        "624≤A(x)≤1750",
        "644≤A(x)≤1100",
        "700≤A(x)≤1750",
      ],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "A(x,y) = 4x^2 + 6xy",
    preg2: "1000 = 2x^2y",
    preg3: "A(x) = 4x^2 + 3000/x",
    preg4: "A(y)=\\frac{2000}{y}+60\\sqrt{5} \\sqrt{y}",
    preg5: "644≤A(x)≤1100",
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

export default Quiz9;
