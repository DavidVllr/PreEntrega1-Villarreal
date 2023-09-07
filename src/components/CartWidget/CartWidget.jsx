import "./styles.css";
import { useState } from "react";

const CartWidget = () => {

    const [count , setcount] = useState(0)

    return (
        <div className="cajaCarrito">
            <i className="fa-solid fa-cart-shopping"></i>
            {count}
        </div>
    );
}
export default CartWidget;