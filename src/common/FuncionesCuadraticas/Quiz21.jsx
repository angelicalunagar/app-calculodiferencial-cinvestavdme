// Quiz21.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz21 = () => {
  const md = 12;
  const activityNumber = "21";
  const instruction = (
    <span>
      En la <em><b>Ventana gráfica 14</b></em> hemos graficado la función{" "}
      <InlineMath>f(x)=150x-x^2</InlineMath>. Modifica el coeficiente de{" "}
      <InlineMath>x^2</InlineMath>, al cual denotaremos con{" "}
      <InlineMath>a</InlineMath>, el coeficiente del término lineal{" "}
      <InlineMath>x</InlineMath> (denotado con <InlineMath>b</InlineMath>) y el
      término independiente (denotado con <InlineMath>c</InlineMath>). Observa
      cómo se modifica la gráfica de la función y contesta las siguientes
      preguntas:
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          Mueve el coeficiente <InlineMath>a</InlineMath> para que valga{" "}
          <InlineMath>-8</InlineMath>. ¿Qué sucedió con la concavidad de la
          parábola?
        </span>
      ),

      resps: ["Es menos abierta", "Es más abierta", "Permaneció igual"],
      renderInlineMath: false,
    },

    preg2: {
      preg: (
        <span>
          Mueve el coeficiente <InlineMath>a</InlineMath> para que valga{" "}
          <InlineMath>8</InlineMath>. ¿Qué sucedió con la concavidad de la
          parábola con respecto a la anterior?
        </span>
      ),

      resps: [
        "Es cóncava hacia arriba",
        "Es cóncava hacia abajo",
        "Permaneció igual",
      ],
      renderInlineMath: false,
    },

    preg3: {
      preg: (
        <span>
          Siempre que el coeficiente <InlineMath>a</InlineMath> es positivo, la
          parábola:
        </span>
      ),

      resps: [
        "Es cóncava hacia arriba",
        "Es cóncava hacia abajo",
        "Abre hacia la derecha",
      ],
      renderInlineMath: false,
    },

    preg4: {
      preg: (
        <span>
          Siempre que el coeficiente <InlineMath>a</InlineMath> es negativo, la
          parábola:
        </span>
      ),

      resps: [
        "En cóncava hacia arriba",
        "Es cóncava hacia abajo",
        "Abre hacia la izquierda",
      ],
      renderInlineMath: false,
    },

    preg5: {
      preg: (
        <span>
          ¿Cuál de las siguientes funciones es una parábola más abierta hacia
          arriba?
        </span>
      ),

      resps: ["f(x)=0.5x^2+5", "f(x)=10x^2-5", "f(x)=4x^2+5"],
      renderInlineMath: true,
    },

    preg6: {
      preg: (
        <span>
          ¿Cuál de las siguientes funciones es una parábola más abierta hacia
          abajo?
        </span>
      ),

      resps: ["f(x)=-2.3x^2+5", "f(x)=-11x^2+5 ", "f(x)=-5x^2+5"],
      renderInlineMath: true,
    },

    preg7: {
      preg: (
        <span>
          ¿Cuál de las siguientes funciones es la parábola menos abierta (sin
          importar la dirección de la apertura)?
        </span>
      ),

      resps: ["f(x)=10x^2+10", "f(x)=-7x^2+10", "f(x)=x^2+10"],
      renderInlineMath: true,
    },

    preg8: {
      preg: (
        <span>
          Mueve el término independiente <InlineMath>c</InlineMath> para que
          valga <InlineMath>-1000</InlineMath>. ¿En qué punto la parábola intersecta al{" "}
          <InlineMath>{"eje \\, y"}</InlineMath>?
        </span>
      ),

      resps: ["Punto=(0, -1000)", "Punto=(0, 0)", "Punto=(40, -100)"],
      renderInlineMath: false,
    },

    preg9: {
      preg: (
        <span>
          ¿Qué indica el término independiente <InlineMath>c</InlineMath>?
        </span>
      ),

      resps: [
        'La coordenada "y" del punto donde la gráfica intersecta al "eje y"',
        'La coordenada "x" del punto donde la gráfica intersecta al "eje y"',
        'El punto donde la gráfica intersecta al "eje y"',
      ],
      renderInlineMath: false,
    },

    preg10: {
      preg: (
        <span>
          ¿Cuál de las siguientes parábolas pasa por el punto <InlineMath>(0, -500)</InlineMath>?
        </span>
      ),

      resps: ["f(x)=15x^2-500", "f(x)=5x^2-1500", "f(x)=5x^2+500"],
      renderInlineMath: true,
    },
    preg11: {
      preg: (
        <span>
          ¿Cuál de las siguientes parábolas pasa por el punto{" "}
          <InlineMath>(0, -6)</InlineMath> y es cóncava hacia arriba?
        </span>
      ),

      resps: ["f(x)=5x^2-6", "f(x)=-5x^2-6", "f(x)=-6x^2-6"],
      renderInlineMath: true,
    },
    preg12: {
      preg: (
        <span>
          ¿En dónde se encuentra el vértice de la parábola cuando el coeficiente
          del término lineal <InlineMath>b</InlineMath> es cero?
        </span>
      ),

      resps: [
        'El vértice se encuentra sobre el eje "y"',
        'El vértice se encuentra sobre el eje "x"',
        'El vértice se encuentra en un lugar distinto del eje "y" y del eje "x"',
      ],
      renderInlineMath: false,
    },
    preg13: {
      preg: (
        <span>
          ¿Cuál dirías que es la forma general de una función cuadrática?
        </span>
      ),

      resps: ["f(x) = ax^2 + bx +c", "f(x) = x^2 + x +c", "f(x) = ax^2 + bx"],
      renderInlineMath: true,
    },
    preg14: {
      preg: (
        <span>
          ¿Cuál es el número máximo de raíces que puede tener una función
          cuadrática (de segundo grado)?
          {/* Oprime el siguiente botón para dibujar las raíces. */}
        </span>
      ),

      resps: ["Una", "Dos", "Tres"],
      renderInlineMath: false,
    },
    preg15: {
      preg: (
        <span>
          ¿Todas las funciones cuadráticas comparten el mismo dominio? En caso
          afirmativo, ¿cuál es ese dominio?
        </span>
      ),

      resps: [
        "Sí, \\, -\\infty < x < \\infty",
        "Sí, \\, 0 < x < \\infty",
        "No",
      ],
      renderInlineMath: true,
    },
    preg16: {
      preg: (
        <span>
          ¿Todas las funciones cuadráticas comparten el mismo rango? En caso afirmativo, ¿cuál es ese rango?
        </span>
      ),

      resps: [
        "Sí, \\, -\\infty < x < \\infty",
        "Sí, \\, 0 < x < \\infty",
        "No",
      ],
      renderInlineMath: true,
    },
    preg17: {
      preg: (
        <span>
          ¿Cuál es el rango de la función <InlineMath>f(x) = -5x^2+100x+350</InlineMath>?
        </span>
      ),

      resps: ["-\\infty < f(x) < 850", "860 < f(x) < \\infty", "-\\infty < f(x) < 860"],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "Es menos abierta",
    preg2: "Es cóncava hacia arriba",
    preg3: "Es cóncava hacia arriba",
    preg4: "Es cóncava hacia abajo",
    preg5: "f(x)=0.5x^2+5",
    preg6: "f(x)=-2.3x^2+5",
    preg7: "f(x)=10x^2+10",
    preg8: "Punto=(0, -1000)",
    preg9: 'La coordenada "y" del punto donde la gráfica intersecta al "eje y"',
    preg10: "f(x)=15x^2-500",
    preg11: "f(x)=5x^2-6",
    preg12: 'El vértice se encuentra sobre el eje "y"',
    preg13: "f(x) = ax^2 + bx +c",
    preg14: "Dos",
    preg15: "Sí, \\, -\\infty < x < \\infty",
    preg16: "No",
    preg17: "-\\infty < f(x) < 850",
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

export default Quiz21;
