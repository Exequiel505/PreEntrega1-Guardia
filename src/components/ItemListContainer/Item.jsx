import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState(false);
  const handleMouseOver = () => {
    setExpandir(true);
  };
  const handleMouseLeave = () => {
    setExpandir(false);
  };
  const estiloCard = {
    transform: expandir ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <Link
      className="item"
      to={`/detail/${product.id}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={estiloCard}
    >
      <img src={product.image} className="image-item" />
      <p className="item-name">{product.name}</p>
    </Link>
  );
};

export default Item;
