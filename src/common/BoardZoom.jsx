import { useContext, useEffect } from "react";
import { JSXGraph } from "jsxgraph";
import { BoardZoomContext } from "../contexts/BoardZoomContext";
import "../styles/BoardZoom.css";

const BoardZoom = () => {
  const { brdZ, setBrdZ } = useContext(BoardZoomContext);

  useEffect(() => {
    if (brdZ === null) {
      const board = JSXGraph.initBoard("jsxgraph-containerZ", {
        boundingbox: [-2.5, 295, 32, -10],
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

      document
        .getElementById("jsxgraph-containerZ")
        .appendChild(buttonContainer);

      setBrdZ(board);
    }
  });

  return (
    <div
      id="jsxgraph-containerZ"
      style={{ width: "100%", height: "400px", backgroundColor: "white" }}
    ></div>
  );
};

export default BoardZoom;
