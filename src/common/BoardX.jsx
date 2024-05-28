//BoardX.jsx
import { useContext, useEffect } from "react";
import { JSXGraph } from "jsxgraph";
import { BoardsContext } from "../contexts/BoardsContext";
import "../styles/Board.css";

const BoardX = ( { boardId, boundingBox } ) => {
  const { addBoard, brd }  = useContext(BoardsContext);

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

      // Agregar manualmente los botones de zoom in y zoom out
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

      document.getElementById(boardId).appendChild(buttonContainer);

      addBoard(boardId, board);
    }
  
  }, [brd]);

  return (
    <div
      id={boardId}
      style={{ width: "100%", height: "400px", backgroundColor: "white" }}
    ></div>
  );
};

export default BoardX;
