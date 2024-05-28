//BoardXX.jsx
import { useContext, useEffect, useState } from "react";
import { JSXGraph } from "jsxgraph";
import { BoardsContext } from "../../contexts/BoardsContext";
import "../../styles/Board.css";

const BoardXX = ({ boardId, boundingBox }) => {
  const { addBoard, brd } = useContext(BoardsContext);
  const [initialBoundingBox, setInitialBoundingBox] = useState(boundingBox);

  useEffect(() => {
    if (!brd.hasOwnProperty(boardId)) {
      const board = JSXGraph.initBoard(boardId, {
        boundingbox: boundingBox,
        axis: true,
        showNavigation: true,
        showZoom: true,
        pan: {
          needShiftToPan: true,
          enabled: true,
        },
        showcopyright: false,
      });

      // Agregar los botones de zoom in y zoom out
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";
      buttonContainer.style.position = "absolute";
      buttonContainer.style.top = "10px";
      buttonContainer.style.left = "10px";

      const zoomInButton = document.createElement("button");
      zoomInButton.textContent = "+";
      zoomInButton.addEventListener("click", () => {
        board.zoomIn();
      });
      buttonContainer.appendChild(zoomInButton);

      const zoomOutButton = document.createElement("button");
      zoomOutButton.textContent = "-";
      zoomOutButton.addEventListener("click", () => {
        board.zoomOut();
      });
      buttonContainer.appendChild(zoomOutButton);

      // Agregar botón para restablecer valores iniciales del boundingBox
      const resetButton = document.createElement("button");
      resetButton.textContent = "x";
      resetButton.addEventListener("click", () => {
        board.setBoundingBox(initialBoundingBox);
      });
      buttonContainer.appendChild(resetButton);

      document.getElementById(boardId).appendChild(buttonContainer);

      addBoard(boardId, board);
    }

    //Mano al aplastar la tecla Shift
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        document.getElementById(boardId).style.cursor = "grab";
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Shift") {
        document.getElementById(boardId).style.cursor = "default";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [brd]);

  return (
    <div
      className="border"
      id={boardId}
      style={{ width: "100%", height: "400px", backgroundColor: "white" }}
    ></div>
  );
};

export default BoardXX;
