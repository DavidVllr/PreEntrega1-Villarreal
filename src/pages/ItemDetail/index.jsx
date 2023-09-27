import { Link, useParams } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import { productos } from "../../product";
import Item from "../../components/Item/item";

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [Products, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );
  useEffect(() => {
    setTimeout(() => {
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <p>cargando. . .</p>
      ) : (
        <Item
          id={Products.id}
          thumbnailUrl={Products.thumbnailUrl}
          nombre={Products.nombre}
          descripcion={Products.descripcion}
          precio={Products.precio}
        />
      )}
      <div className="volver">
        <Link to={"/"}>
          <button className="btn2">volver</button>
        </Link>
      </div>
    </>
  );
};

export default ItemDetail;
