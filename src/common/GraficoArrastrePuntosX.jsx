//GraficoArrastrePuntosX.jsx
import React, { useContext, useEffect } from "react";
import { BoardsContext } from "../contexts/BoardsContext";


const GraficoArrastrePuntosX = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      console.log(board);

      // Definir los puntos A, B, G
      const puntoA = board.create("point", [0, 30], {
        name: "A",
        size: 3,
        color: "blue",
        fixed: true,
      });

      console.log(puntoA);
      const puntoB = board.create("point", [5, 72.5], {
        name: "B",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoG = board.create("point", [30, 285], {
        name: "G",
        size: 3,
        color: "blue",
        fixed: true,
      });

      // Definir las coordenadas objetivo de los puntos C, D, E, F
      const coordsObjetivo = {
        C: { x: 10, y: 115 },
        D: { x: 15, y: 157.5 },
        E: { x: 20, y: 200 },
        F: { x: 25, y: 242.5 },
      };

      // Definir las coordenadas iniciales de los puntos C, D, E, F
      const coordsInicio = {
        C: { x: 5, y: 280 },
        D: { x: 5, y: 260 },
        E: { x: 5, y: 240 },
        F: { x: 5, y: 220 },
      };

      // Crear puntos C, D, E, F
      const puntoC = board.create("point", [5, 280], {
        name: "C",
        size: 3,
        color: "orange",
      });

      const puntoD = board.create("point", [5, 260], {
        name: "D",
        size: 3,
        color: "orange",
      });

      const puntoE = board.create("point", [5, 240], {
        name: "E",
        size: 3,
        color: "orange",
      });
      const puntoF = board.create("point", [5, 220], {
        name: "F",
        size: 3,
        color: "orange",
      });

      // Función para manejar el arrastre de puntos D, E, F
      const handleDragMove = (punto) => {
        const puntoArrastrado = punto.name;
        const coordsArrastrado = punto.coords.usrCoords;
        //console.log(coordsArrastrado);

        // Verificar si el punto se acerca a las coordenadas objetivo
        const distancia = Math.sqrt(
          Math.pow(coordsObjetivo[puntoArrastrado].x - coordsArrastrado[1], 2) +
            Math.pow(coordsObjetivo[puntoArrastrado].y - coordsArrastrado[2], 2)
        );

        // Si la distancia es menor que un umbral, acercar automáticamente el punto a las coordenadas objetivo
        const umbral = 1;
        if (distancia < umbral) {
          punto.moveTo(
            [
              coordsObjetivo[puntoArrastrado].x,
              coordsObjetivo[puntoArrastrado].y,
            ],
            0
          );
          //punto.setAttribute({ fixed: true });
        }
      };

      // Función para manejar el evento cuando se suelta el punto arrastrado
      const handleDragEnd = (punto) => {
        const puntoArrastrado = punto.name;
        const coordsArrastrado = punto.coords.usrCoords;

        // Verificar si el punto se soltó en la coordenada correcta
        if (
          coordsArrastrado[1] === coordsObjetivo[puntoArrastrado].x &&
          coordsArrastrado[2] === coordsObjetivo[puntoArrastrado].y
        ) {
          // Si es correcto, dejar el punto en su lugar
          punto.setAttribute({ fixed: true });
        } else {
          // Si es incorrecto, devolver el punto a la esquina superior izquierda
          punto.moveTo(
            /* [5, 280 - Object.keys(coordsObjetivo).indexOf(puntoArrastrado)],
          0 */
            [coordsInicio[puntoArrastrado].x, coordsInicio[puntoArrastrado].y],
            0
          );
        }
      };

      // Agregar manejadores de eventos de arrastre para los puntos C, D, E, F
      puntoC.on("drag", () => handleDragMove(puntoC));
      puntoD.on("drag", () => handleDragMove(puntoD));
      puntoE.on("drag", () => handleDragMove(puntoE));
      puntoF.on("drag", () => handleDragMove(puntoF));

      puntoC.on("up", () => handleDragEnd(puntoC));
      puntoD.on("up", () => handleDragEnd(puntoD));
      puntoE.on("up", () => handleDragEnd(puntoE));
      puntoF.on("up", () => handleDragEnd(puntoF));

      setIds((prevIds) => ({
        ...prevIds,
        idPuntoA: puntoA.id,
        idPuntoB: puntoB.id,
        idPuntoC: puntoC.id,
        idPuntoD: puntoD.id,
        idPuntoE: puntoE.id,
        idPuntoF: puntoF.id,
        idPuntoG: puntoG.id,
      }));
    }
    console.log(ids);

  }, [brd[boardId]]);

  return <div style={{ backgroundColor: "white" }}></div>;
};

export default GraficoArrastrePuntosX;
