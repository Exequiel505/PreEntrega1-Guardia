import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import getProducts from "../../data/data";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((respuesta) => {
        if (idCategory) {
          const productsFilter = respuesta.filter(
            (productRes) => productRes.category === idCategory
          );
          setProducts(productsFilter);
        } else {
          setProducts(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategory]);

  return (
    <div>
      <h2>{saludo}</h2>
      {
      loading ? <div>Cargando...</div> : <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;
