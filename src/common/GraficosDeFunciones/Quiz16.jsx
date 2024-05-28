// Quiz16.js
import React from "react";
import Quiz from "../Utilerias/Quiz";
import { BlockMath, InlineMath } from "react-katex";

const Quiz16 = () => {
  const md=12;
  const activityNumber = "16";
  const instruction = (
    <span>
      En la ventana gráfica <InlineMath>7</InlineMath> hemos graficado{" "}
      <InlineMath>f(x)=8.5x+30</InlineMath>. Modifica el coeficiente de{" "}
      <InlineMath>x</InlineMath>, al cual denotaremos con{" "}
      <InlineMath>m</InlineMath>, y el término independiente, denotado con{" "}
      <InlineMath>b</InlineMath>. Observa cómo se modifica la gráfica de la
      función y contesta las siguientes preguntas:
    </span>
  );

  const questions = {
    preg1: {
      preg: (
        <span>
          Mueve el coeficiente <InlineMath>m</InlineMath> para que valga{" "}
          <InlineMath>2</InlineMath>. ¿Qué sucedió con la inclinación de la
          recta?
        </span>
      ),
      resps: ["Aumentó", "Disminuyó", "Permaneció igual"],
      renderInlineMath: false,
    },

  
    preg3: {
      preg: (
        <span>
          Siempre que el coeficiente <InlineMath>m</InlineMath> es positivo, la
          recta:
        </span>
      ),
      resps: [
        "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
        "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
        "No es creciente ni decreciente (horizontal).",
      ],
      renderInlineMath: false,
    },

    preg4: {
      preg: (
        <span>
          Siempre que el coeficiente <InlineMath>m</InlineMath> es negativo, la
          recta:
        </span>
      ),
      resps: [
        "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
        "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
        "No es creciente ni decreciente (horizontal).",
      ],
      renderInlineMath: false,
    },

    preg5: {
      preg: (
        <span>
          ¿Cuánto tendría que valer el coeficiente <InlineMath>m</InlineMath>{" "}
          para que la recta no fuera ni creciente ni decreciente?
        </span>
      ),

      resps: ["m=0", "m > 0", "m < 0"],
      renderInlineMath: true,
    },

    preg6: {
      preg: (
        <span>
          ¿Cuál de las siguientes reglas de correspondencia tiene una gráfica
          más inclinada?
        </span>
      ),

      resps: ["f(x)=45x+30", "f(x)=20x+30", "f(x)=x+30"],
      renderInlineMath: true,
    },

    preg7: {
      preg: (
        <span>
          ¿Cuál de las siguientes reglas de correspondencia tiene una gráfica
          más inclinada?
        </span>
      ),

      resps: ["f(x)=-45x+30", "f(x)=-20x+30", "f(x)=-x+30"],
      renderInlineMath: true,
    },

    preg8: {
      preg: (
        <span>
          ¿Cuál de las siguientes reglas de correspondencia tiene una gráfica
          más inclinada (sin importar el sentido de la inclinación)?
        </span>
      ),

      resps: ["f(x)=-50x+30", "f(x)=40x+30", "f(x)=4x+30"],
      renderInlineMath: true,
    },

    preg9: {
      preg: (
        <span>
          Mueve el término independiente <InlineMath>b</InlineMath> para que
          valga <InlineMath>-10</InlineMath>. ¿En qué punto la recta cruza
          (intersecta) al eje <InlineMath>y</InlineMath>?
        </span>
      ),

      resps: ["Punto=(0, -10)", "Punto=(0, 0)", "Punto=(2, -10)"],
      renderInlineMath: true,
    },

    preg10: {
      preg: (
        <span>
          Mueve el término independiente <InlineMath>b</InlineMath> para que
          valga <InlineMath>29</InlineMath>. ¿En qué punto la recta cruza
          (intersecta) al eje <InlineMath>y</InlineMath>?
        </span>
      ),

      resps: ["Punto=(0, 29)", "Punto=(29, 0)", "Punto=(0, -29)"],
      renderInlineMath: true,
    },

    preg11: {
      preg: (
        <span>
          ¿Qué indica el término independiente <InlineMath>b</InlineMath>?
        </span>
      ),

      resps: [
        'El punto en el cual la recta cruza al eje "y"',
        'La coordenada “y” del punto en el cual la recta cruza al eje "y"',
        "La coordenada “x” del punto en el cual la recta cruza al eje “y”",
      ],
      renderInlineMath: false,
    },

    preg12: {
      preg: (
        <span>
          ¿Cuál de las siguientes rectas pasa por el origen del plano
          cartesiano?
        </span>
      ),

      resps: ["f(x)=5x", "f(x)=5x+30", "f(x)=35x-20"],
      renderInlineMath: true,
    },

    preg13: {
      preg: (
        <span>
          ¿Cuál de las siguientes rectas NO pasa por el origen del plano
          cartesiano?
        </span>
      ),

      resps: ["f(x)=8x", "f(x)=7x+3", "f(x)=7x"],
      renderInlineMath: true,
    },

    preg14: {
      preg: (
        <span>
          ¿Cuánto tiene que valer el término independiente <InlineMath>b</InlineMath> para que la recta pase por el origen del plano?
        </span>
      ),

      resps: ["b=0", "b>0", "b<0"],
      renderInlineMath: true,
    },
  };

  const correctAnswers = {
    preg1: "Disminuyó",
    preg3:
      "Es creciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos subiendo.",
    preg4:
      "Es decreciente, lo que quiere decir que si camináramos de izquierda a derecha sobre su gráfica estaríamos bajando.",
    preg5: "m=0",
    preg6: "f(x)=45x+30",
    preg7: "f(x)=-45x+30",
    preg8: "f(x)=-50x+30",
    preg9: "Punto=(0, -10)",
    preg10: "Punto=(0, 29)",
    preg11: 'La coordenada “y” del punto en el cual la recta cruza al eje "y"',
    preg12: "f(x)=5x",
    preg13: "f(x)=7x+3",
    preg14: "b=0",
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

export default Quiz16;
