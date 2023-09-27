import "./styles.css";
import { useState } from "react";

const CartWidget = () => {
  const [count] = useState(0);

  return (
    <div className="cajaCarrito">
      {count}
      <i className="fa-solid fa-cart-shopping"></i>
    </div>
  );
};
export default CartWidget;
