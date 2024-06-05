import { useState } from "react";
const itemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleClickAddToCart = () => {
    addProduct(count);
  };
  return (
    <div>
      <button onClick={handleClickDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickAddToCart}>agregar al carrito</button>
    </div>
  );
};

export default itemCount;
