import ItemList from "../../components/ItemListContainer";
import { productos } from "../../product";
import { useEffect, useState } from "react";
import Item from "../../components/Item/item";
import "./styles.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productos);
      setIsLoading(false);
    }, 1000);
  }, []);
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
};

export default Home;
