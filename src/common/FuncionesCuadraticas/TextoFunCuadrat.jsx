import React from "react";
import { FunCuadratContext } from "../../contexts/FunCuadratContext";
import { useContext } from "react";
import { InlineMath } from "react-katex";

const TextoFunCuadrat = () => {
  const { a, b, c } = useContext(FunCuadratContext);

  return (
    <div
      style={{
        backgroundColor: "#011627",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: "#FF821C", fontWeight: "bold", fontSize: "20px" }}>
        <InlineMath>
          {`f(x) = ${a}x^2 ${b >= 0 ? "+" : ""}${b}x ${c >= 0 ? "+" : ""}${c}`}
        </InlineMath>
      </p>
    </div>
  );
};

export default TextoFunCuadrat;
