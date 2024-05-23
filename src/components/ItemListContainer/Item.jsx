import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState (false)
  const handleMouseOver = () =>{
    setExpandir(true)
  }
  const handleMouseLeave =() =>{
    setExpandir(false)
  }
  const estiloCard = {
    transform : expandir ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out"
  }
  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={estiloCard}>
      <img src={product.image} />
      <p>{product.name}</p>
      <p> precio : {product.price}</p>
      <Link to={`/detail/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
