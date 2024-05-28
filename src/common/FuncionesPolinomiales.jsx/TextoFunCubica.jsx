import React from "react";
import { FunCuadratContext } from "../../contexts/FunCuadratContext";
import { useContext } from "react";
import { InlineMath } from "react-katex";
import { FunCubicaContext } from "../../contexts/FunCubicaContext";

const TextoFunCubica = () => {
  const { a, b, c, d } = useContext(FunCubicaContext);

  return (
    <div
      style={{
        backgroundColor: "#011627",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <p style={{ color: "#FF821C", fontWeight: "bold", fontSize: "20px", margin: "0.5rem"}}>
        <InlineMath>
          {`f(x) = ${a}x^3 ${b >= 0 ? "+" : ""}${b}x^2 ${
            c >= 0 ? "+" : ""
          }${c}x ${d >= 0 ? "+" : ""}${d}`}
        </InlineMath>
      </p>
    </div>
  );
};

export default TextoFunCubica;
