const questions = {  //questions[pregunta].subpreguntas[subpreguntaId]
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
        subpregunta: "¿Qué valores puede adquirir la cantidad de dinero d(n)?",
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
        <InlineMath>{"p(x)=30+20x"}</InlineMath>. Si el taxi no hace viajes más
        largos que <InlineMath>{"30km"}</InlineMath>:
      </em>
    ),
    subpreguntas: [
      {
        id: "preg2_1",
        subpregunta: "¿Qué valores puede adquirir la variable independiente x?",
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
        <InlineMath>{"d(t)=2t"}</InlineMath>. Sabiendo que el motor solo soporta
        estar en funcionamiento <InlineMath>{"30 min"}</InlineMath>:
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
        subpregunta: "¿Qué valores puede adquirir la distancia recorrida d(t)?",
        opciones: ["4 ≤ d(t) ≤ 60", "0 ≤ d(t) ≤ 60", "2 ≤ d(t) ≤ 60"],
        renderInlineMath: true,
      },
    ],
  },
};

const correctAnswers = {
  preg1_1: "{0, 1, 2, 3, ..., 249, 250}",
  preg1_2: "{4000, 3750, 3500, 3250, ..., 500, 250}",
  preg2_1: "0 ≤ x ≤ 30",
  preg2_2: "30 ≤ p(x) ≤ 630",
  preg3_1: "2 ≤ t ≤ 30",
  preg3_2: "0 ≤ d(t) ≤ 60",
};

preguntasAleatorias = {
  preg1: {
    instruccion: "Texto",
    subpreguntas: {
      subPreg1_1: {
        subpregunta: "¿Qué valores…?",
        opciones: [
          "{0, 1, 2, 3, ..., 249, 250}",
          "{0, 1, 2, 4, ..., 3999, 4000}",
          "{0, 1, 2, 4, ...,14, 15}",
        ],
      },
      subPreg1_2: {
        subpregunta: "¿Qué valores…?",
        opciones: [
          "{0, 1, 2, 3, ..., 249, 250}",
          "{0, 1, 2, 4, ..., 3999, 4000}",
          "{0, 1, 2, 4, ...,14, 15}",
        ],
      },
    },
  },
  Preg2: {},
  Preg3: {},
};


respuestasPreguntas = {  //Object.keys(respuestasPreguntas)[pregunta].Subpreguntas.map(subpregunta, index)
  preg1: {
    instruccion: "Texto",
    subpreguntas: {
      preg1_1: {
        subpregunta: "¿Qué valores…?",
        opciones: [
          "{0, 1, 2, 3, ..., 249, 250}",
          "{0, 1, 2, 4, ..., 3999, 4000}",
          "{0, 1, 2, 4, ...,14, 15}",
        ],
        renderInlineMath: true
      },
      preg1_2: {
        subpregunta: "¿Qué valores…?",
        opciones: [
          "{0, 1, 2, 3, ..., 249, 250}",
          "{0, 1, 2, 4, ..., 3999, 4000}",
          "{0, 1, 2, 4, ...,14, 15}",
        ],
      },
    },
  },
  Preg2: {},
  Preg3: {},
};

scrollBycoreUsuario = {
  preg1_1: true,
  preg1_2: true,
  preg2_1: true,
  preg2_2: false,
  preg3_1: false,
  preg3_2: true,
};

respuestasUsuario = {
  preg1_1: true,
  preg1_2: true,
  preg2_1: true,
  preg2_2: false,
  preg3_1: false,
  preg3_2: true,
};

//corrección
useEffect(() => {
  const preguntasAleatorias = {};

  Object.keys(questions).forEach((pregunta) => {
    preguntasAleatorias[pregunta] = {
      instruccion: questions[pregunta].instruccion, // Debería ser 'instruccion' en lugar de 'instruction'
      Subpreguntas: {}, // Inicializa el objeto de subpreguntas
    };

    questions[pregunta].subpreguntas.forEach((subpregunta) => {
      const opcionesAleatorias = shuffleRespuestas([...subpregunta.opciones]); // No es necesario acceder a questions[pregunta].subpreguntas[subpregunta]

      preguntasAleatorias[pregunta].Subpreguntas[subpregunta.id] = {
        // Utiliza 'pregunta' en lugar de 'preguntas' para acceder al objeto principal
        subpregunta: subpregunta.subpregunta,
        opciones: opcionesAleatorias,
      };

      // No estoy seguro de dónde provienen las siguientes líneas, asegúrate de que la lógica sea correcta
      respuestasUsuarioInicial[subpregunta.id] = "";
      scoreUsuarioInicial[subpregunta.id] = null;
    });
  });

  setRespuestasPreguntas(preguntasAleatorias);
}, [questions]);
