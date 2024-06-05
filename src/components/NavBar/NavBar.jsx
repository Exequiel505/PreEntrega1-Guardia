import CartWidget from "./CartWidget";
import Logo from "./Logo";
import logo from "../../assets/carrito.svg";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <Logo />
      </Link>
      <ul className="categorias">
        <Link to="/category/mundo abierto" className="categoria">
          Mundo Abierto
        </Link>
        <Link to="/category/shooter" className="categoria">
          Shooter
        </Link>
        <Link to="/category/survival" className="categoria">
          Survival
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
