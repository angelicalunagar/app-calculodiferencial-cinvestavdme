// Quiz17.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { InlineMath } from "react-katex";

const Quiz18 = () => {
  const md = 12;
  const activityNumber = "18";
  const instruction = (
    <span>
      Continuando con el caso del granjero, éste decidió construir un corral de
      lado <InlineMath>{"x=50 \\, m"}</InlineMath>, donde ha metido a sus gallinas, pero
      se da cuenta de que le falta colocar adentro una mini bodega para guardar
      alimento y utensilios, la cual requiere al menos{" "}
      <InlineMath>{"200 \\, m^2"}</InlineMath>. A partir de esta situación,
      responde las siguientes preguntas.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          Si el granjero aumentara el lado en{" "}
          <InlineMath>{"5 \\, m"}</InlineMath>, es decir si ahora el lado midiera{" "}
          <InlineMath>{"55 \\, m"}</InlineMath>, ¿cuánto aumentaría el área?
        </span>
      ),
      resps: ["225 \\, m^2", "175 \\, m^2", "400 \\, m^2"],
      renderInlineMath: true,
    },

    preg2: {
      preg: (
        <span>
          Qué pasaría si el granjero volviera a aumentar nuevamente en{" "}
          <InlineMath>{"5 \\, m"}</InlineMath> el lado, es decir, si ahora el
          lado midiera <InlineMath>{"60 \\, m"}</InlineMath>. ¿Cuánto aumentaría
          el área con respecto al anterior?
        </span>
      ),
      resps: ["225 \\, m^2", "175 \\, m^2", "400 \\, m^2"],
      renderInlineMath: true,
    },

    preg3: {
      preg: (
        <span>
          A partir de las dos preguntas anteriores se puede concluir que, si
          bien en el intervalo del dominio{" "}
          <InlineMath>{"0 \\geq x \\geq 75"}</InlineMath> el área{" "}
          <InlineMath>A(x)</InlineMath> aumenta:
        </span>
      ),
      resps: [
        "El aumento del área es distinto para intervalos iguales del dominio",
        "El aumento del área es igual para intervalos iguales del dominio",
        "Nunca hay aumento de área",
      ],
      renderInlineMath: false,
    },

    preg4: {
      preg: (
        <span>
          Si el granjero comienza con un corral de lado{" "}
          <InlineMath>{"x=50 \\, m"}</InlineMath>, ¿cuánto deberá aumentar la
          longitud del lado para que el área de su corral se incremente{" "}
          <InlineMath>{"200 \\, m^2"}</InlineMath>?
        </span>
      ),

      resps: ["4.4 \\, m", "5 \\, m", "7.2 \\, m"],
      renderInlineMath: true,
    },

    preg5: {
      preg: (
        <span>
          El granjero decide hacer otro corral de lado <InlineMath>{"x=75 \\, m"}</InlineMath>, pero quiere
          aumentar el lado en <InlineMath>{"10 \\, m"}</InlineMath> con el objetivo de aumentar el área. ¿Qué
          sucederá con el área del corral?
        </span>
      ),

      resps: ["Aumentará \\, 100 \\, m^2", "Disminuirá \\, 100 \\, m^2", "Permanecerá \\, igual"],
      renderInlineMath: true,
    },

    preg6: {
      preg: <span>¿En cuál de los siguientes intervalos <InlineMath>f(x)</InlineMath> disminuye más?	</span>,

      resps: ["75 ≤ x ≤ 85", "95 ≤ x ≤ 105", "120 ≤ x ≤ 130"],
      renderInlineMath: false,
    },

    preg7: {
      preg: (
        <span>
          ¿En cuál de los siguientes intervalos <InlineMath>f(x)</InlineMath> incrementa más?	
        </span>
      ),

      resps: ["55 ≤ x ≤ 65", "70 ≤ x ≤ 75 ", "120 ≤ x ≤ 130"],
      renderInlineMath: false,
    },

    preg8: {
      preg: (
        <span>
          Se puede concluir que la función <InlineMath>A(x) = 150x -x^2</InlineMath>:
        </span>
      ),

      resps: ["Cambia más rápidamente en intervalos del dominio alejados del punto más alto de la gráfica (punto máximo)", "Cambia más rápidamente en intervalos del dominio cercanos al punto más alto de la gráfica (punto máximo)", "Cambia lo mismo a intervalos iguales del dominio"],
      renderInlineMath: false,
    },
  };

  const correctAnswers = {
    preg1: "225 \\, m^2",
    preg2: "175 \\, m^2",
    preg3: "El aumento del área es distinto para intervalos iguales del dominio",
    preg4: "4.4 \\, m",
    preg5: "Disminuirá \\, 100 \\, m^2",
    preg6: "120 ≤ x ≤ 130",
    preg7: "55 ≤ x ≤ 65",
    preg8: "Cambia más rápidamente en intervalos del dominio alejados del punto más alto de la gráfica (punto máximo)",
    
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

export default Quiz18;
