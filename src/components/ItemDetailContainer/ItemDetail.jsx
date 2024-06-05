import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";

const ItemDetail = ({ product }) => {
  const { añadirProducto } = useContext(CartContex);
  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    añadirProducto(productCart);
  };
  return (
    <div>
      <h1>Detail Container</h1>
      <img src={product.image} />
      <div>
        <p>{product.name}</p>
        <p>precio: {product.price}</p>
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  );
};

export default ItemDetail;
