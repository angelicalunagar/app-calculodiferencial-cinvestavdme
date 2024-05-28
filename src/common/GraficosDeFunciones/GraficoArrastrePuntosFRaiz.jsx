//GraficoArrastrePuntosX.jsx
import React, { useContext, useEffect } from "react";
import { BoardsContext } from "../../contexts/BoardsContext";

const GraficoArrastrePuntosFRaiz = ({ boardId }) => {
  const { brd, ids, setIds } = useContext(BoardsContext);

  useEffect(() => {
    if (brd[boardId]) {
      const board = brd[boardId];

      console.log(board);

      // Definir los puntos B, C, D
      const puntoB = board.create("point", [4, 2], {
        name: "B",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoC = board.create("point", [9, 3], {
        name: "C",
        size: 3,
        color: "blue",
        fixed: true,
      });

      const puntoD = board.create("point", [20, 4.5], {
        name: "D",
        size: 3,
        color: "blue",
        fixed: true,
      });


      // Definir las coordenadas objetivo de los puntos A, E, F
      const coordsObjetivo = {
        A: { x: 0, y: 0 },
        E: { x: 31.5, y: 5.6 },
        F: { x: 49, y: 7 },
        
      };

      // Definir las coordenadas iniciales de los puntos A, E, F
      const coordsInicio = {
        A: { x: 3, y: 7 },
        E: { x: 3, y: 8 },
        F: { x: 3, y: 9 },
        
      };

      // Crear puntos A, E, F
      const puntoA = board.create("point", [3, 7], {
        name: "A",
        size: 3,
        color: "orange",
      });

      const puntoE = board.create("point", [3, 8], {
        name: "E",
        size: 3,
        color: "orange",
      });

      const puntoF = board.create("point", [3, 9], {
        name: "F",
        size: 3,
        color: "orange",
      });
    

      // Función para manejar el arrastre de puntos A, E, F
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

      // Agregar manejadores de eventos de arrastre para los puntos A, E, F
      puntoA.on("drag", () => handleDragMove(puntoA));
      puntoE.on("drag", () => handleDragMove(puntoE));
      puntoF.on("drag", () => handleDragMove(puntoF));
      

      puntoA.on("up", () => handleDragEnd(puntoA));
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
      }));
    }
    console.log(ids);

  }, [brd[boardId]]);

  return <div style={{ backgroundColor: "white" }}></div>;
};

export default GraficoArrastrePuntosFRaiz;
