import { Link } from "react-router-dom";

const item = ({ product }) => {
  return (
    <div>
      <img src={product.image} />
      <p>{product.name}</p>
      <p> precio : {product.price}</p>
      <Link to={`/detail/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default item;
