import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import db from "../../db/db.js";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef).then((productsDb) => {
      const data = productsDb.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setProducts(data);
    });
  };
  const getProductsByCategory = () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));
    getDocs(q).then((productsDb) => {
      const data = productsDb.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setProducts(data);
    });
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div>
      <h2>
        {idCategory
          ? `Filtrado por categoria: ${idCategory}`
          : "Bienvenidos a mi eccomerce"}
      </h2>
      {loading ? <div>Cargando...</div> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
