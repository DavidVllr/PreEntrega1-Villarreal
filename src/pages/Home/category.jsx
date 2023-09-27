import { productos } from "../../product";
import { useEffect, useState } from "react";
import Item from "../../components/Item/item";
import "./styles.css";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemListContainer";

const category = () => {
  const { masas } = useParams();
  const [Products, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchProduct = productos.filter((prod) => prod.categoria === "masas");
  useEffect(() => {
    setTimeout(() => {
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);
  if (searchProduct !== 1) {
    return (
      <main className="miDiv">
        <ItemList>
          {isLoading ? (
            <p>cargando. . .</p>
          ) : (
            Products.map((prod) => (
              <Item
                id={prod.id}
                thumbnailUrl={prod.thumbnailUrl}
                nombre={prod.nombre}
                descripcion={prod.descripcion}
                precio={prod.precio}
              />
            ))
          )}
        </ItemList>
      </main>
    );
  }
};

export default category;
