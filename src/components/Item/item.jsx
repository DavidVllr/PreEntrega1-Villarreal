import "./index.css";
import { Link } from "react-router-dom";

const Item = ({ id, thumbnailUrl, nombre, precio, descripcion }) => {
  return (
    <div className="card card0">
      <div className="border">
        <h2>{nombre}</h2>
        <img src={thumbnailUrl} />
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-dribbble" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <p>{descripcion}</p>
        </div>
        <div className="compra">
          <Link to={`/item/${id}`}>
            <button className="btn">detalles</button>
          </Link>
          <button className="btn">buy</button>
          <p>${precio}</p>
        </div>
      </div>
    </div>
  );
};
export default Item;
