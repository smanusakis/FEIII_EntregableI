import React from "react";
import styles from "../styles/cabecera.module.css";

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({ totalComprasC }) {
  return (
    <>
      <header className={styles.cabecera}>
        <div className={styles.texto}>
          <h1>Total en el carrito</h1>
          <p>
            {" "}
            className={styles.sticky}
            Cantidad de productos: <span>{totalComprasC}</span>
          </p>
        </div>
      </header>
    </>
  );
}
