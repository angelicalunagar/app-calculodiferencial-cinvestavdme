import React from "react";
import { FunCuadratContext } from "../../contexts/FunCuadratContext";
import { useContext } from "react";
import { InlineMath } from "react-katex";
import { Fun4toGradoContext } from "../../contexts/Fun4toGradoContext";

const TextoFun4toGrado = () => {
  const { a, b, c, d, e } = useContext(Fun4toGradoContext);

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
          {`f(x) = ${a}x^4 ${b >= 0 ? "+" : ""}${b}x^3 ${
            c >= 0 ? "+" : ""
          }${c}x^2 ${d >= 0 ? "+" : ""}${d}x ${e >= 0 ? "+" : ""}${e}`}
        </InlineMath>
      </p>
    </div>
  );
};

export default TextoFun4toGrado;
