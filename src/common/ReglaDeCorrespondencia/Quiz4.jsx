// Quiz15.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz4 = () => {
  const md=10;
  const activityNumber = "4";
  const instruction = (
    <span>
      Selecciona la regla de correspondencia que describe cada situación.
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          Cristina gana 4000 pesos quincenales, de los cuáles gasta 250 pesos diarios. La función que describe que el dinero restante depende del número de días que han trascurrido desde el pago de la quincena es:
        </span>
      ),
      resps: ["d(n)=2000-125n", "d(n)=4000-250n", "d(n)=250n+4000"],
      renderInlineMath: true,
    },

   preg2: {
      preg: (
        <span>
          Un Uber cobra una cuota fija por contratación de $30.00 y adicionalmente $8.50 por km recorrido. La función que describe que el
          precio <InlineMath>p</InlineMath> de un viaje en Uber depende de la distancia recorrida <InlineMath>x</InlineMath> (en km) es:
        </span>
      ),
      resps: ["p(x)=30+8.50x", "p(x)=30-8.50x", "p(x)=-30+8.50x"],
      renderInlineMath: true,
    },

    preg3: {
      preg: (
        <span>
         Un automóvil de carreras avanza 2 km por cada minuto, por lo que la distancia recorrida es función de tiempo transcurrido. ¿Cuál es la función correcta?
        </span>
      ),
      resps: [
        "d(t)=2t + 10",
        "d(t)=-2t",
        "d(t)=2t",
      ],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "d(n)=4000-250n",
    preg2: "p(x)=30+8.50x",
    preg3: "d(t)=2t",
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

export default Quiz4;
