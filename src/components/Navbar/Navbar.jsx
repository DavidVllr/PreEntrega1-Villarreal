import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import { BrowserRouter } from "react-router-dom";

const Navbar = (categoria) => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <h1>
              Tasy<span>Dv</span>
            </h1>
          </a>
        </div>
        <nav>
          <a href={"/"}>Inicio</a>
          <a href={`/category/${categoria.masas}`}>Masas</a>
          <a href="#">Bebidas</a>
          <div className="indicator"></div>
        </nav>
      </div>
      <CartWidget />
    </BrowserRouter>
  );
};
export default Navbar;
