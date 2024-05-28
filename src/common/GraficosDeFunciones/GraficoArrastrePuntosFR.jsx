//GraficoArrastrePuntosX.jsx
import React, { useContext, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

const GraficoArrastrePuntosFR = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      console.log(board);

      // Definir los puntos A, B, D, F
      const puntoA = board.create("point", [-25, -0.8], {
        name: "A",
        size: 3,
        color: "blue",
        fixed: true,
      });

      console.log(puntoA);
      const puntoB = board.create("point", [-8.5, -2.4], {
        name: "B",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoD = board.create("point", [-0.5, -40], {
        name: "D",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoF = board.create("point", [1.5, 13.3], {
        name: "F",
        size: 3,
        color: "blue",
        fixed: true,
      });

      // Definir las coordenadas objetivo de los puntos C, E, G, H
      const coordsObjetivo = {
        C: { x: -1.5, y: -13.3 },
        E: { x: 0.5, y: 40 },
        G: { x: 8.5, y: 2.4 },
        H: { x: 25, y: 0.8 },
      };

      // Definir las coordenadas iniciales de los puntos C, E, G, H
      const coordsInicio = {
        C: { x: 3, y: 60 },
        E: { x: 3, y: 80 },
        G: { x: 3, y: 100 },
        H: { x: 3, y: 120 },
      };

      // Crear puntos C, E, G, H
      const puntoC = board.create("point", [3, 60], {
        name: "C",
        size: 3,
        color: "orange",
      });

      const puntoE = board.create("point", [3, 80], {
        name: "E",
        size: 3,
        color: "orange",
      });

      const puntoG = board.create("point", [3, 100], {
        name: "G",
        size: 3,
        color: "orange",
      });
      const puntoH = board.create("point", [3, 120], {
        name: "H",
        size: 3,
        color: "orange",
      });

      // Función para manejar el arrastre de puntos C, E, G, H
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
        const umbral = 5;
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

      // Agregar manejadores de eventos de arrastre para los puntos C, E, G, H
      puntoC.on("drag", () => handleDragMove(puntoC));
      puntoE.on("drag", () => handleDragMove(puntoE));
      puntoG.on("drag", () => handleDragMove(puntoG));
      puntoH.on("drag", () => handleDragMove(puntoH));

      puntoC.on("up", () => handleDragEnd(puntoC));
      puntoE.on("up", () => handleDragEnd(puntoE));
      puntoG.on("up", () => handleDragEnd(puntoG));
      puntoH.on("up", () => handleDragEnd(puntoH));

      setIds((prevIds) => ({
        ...prevIds,
        idPuntoA: puntoA.id,
        idPuntoB: puntoB.id,
        idPuntoC: puntoC.id,
        idPuntoD: puntoD.id,
        idPuntoE: puntoE.id,
        idPuntoF: puntoF.id,
        idPuntoG: puntoG.id,
        idPuntoH: puntoG.id,
      }));
    }
    console.log(ids);

  }, [brd[boardId]]);

  return <div style={{ backgroundColor: "white" }}></div>;
};

export default GraficoArrastrePuntosFR;
