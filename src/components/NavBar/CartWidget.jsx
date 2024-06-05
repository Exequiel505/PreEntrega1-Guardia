// import carrito from "../../assets/carrito.svg"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContex } from "../../context/CartContex";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContex);
  let cantidad = cantidadTotal();
  return (
    <Link
      to="/cart"
      className={cantidad >= 1 ? "cartwidget cart-red" : "cartwidget cart-blue"}
    >
      <FaShoppingCart />
      <p>{cantidad >= 1 && cantidad}</p>
    </Link>
  );
};

export default CartWidget;
