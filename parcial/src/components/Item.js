// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import { useState } from "react";
import styles from "../styles/item.module.css";

export default function Item({ nombre, descripcion, stock, totalComprasN }) {
  const [stockActual, setStock] = useState(stock);

  const restCompras = () => {
    stockActual > 0 && setStock(stockActual - 1);
    totalComprasN();
  };

  return (
    <div className={styles.producto}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        Unidades:{" "}
        {stockActual > 0 ? (
          <span> {stockActual}</span>
        ) : (
          <span className="agotado">Agotado</span>
        )}{" "}
      </h5>
      {stockActual > 0 ? (
        <button className={styles.btn} onClick={restCompras}>
          Comprar
        </button>
      ) : (
        <button className={styles.btnOS} disabled>
          Sin Stock
        </button>
      )}
    </div>
  );
}
