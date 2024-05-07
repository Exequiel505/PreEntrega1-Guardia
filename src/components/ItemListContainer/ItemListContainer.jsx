import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizo la promesa");
      });
  }, []);

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
