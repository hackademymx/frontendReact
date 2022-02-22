import React, { useState } from "react";
import "./styles.css";
export function Boton({ parametro1 }) {
  const [textoBoton, setTextoBoton] = useState("Soy un boton");
  return (
    <button
      className="boton-componente"
      onClick={() => {
        setTextoBoton("Soy Jordi");
      }}
    >
      {parametro1}
    </button>
  );
}
