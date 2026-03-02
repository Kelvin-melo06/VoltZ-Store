import { Icon } from "../../ui/icon/Icon.jsx";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import Nav from "../nav/nav.jsx";
import "./header.css";

const Header = ({ cart }) => {
  return (
    <>
      <header id="header">
        <h1 className="logo">
          Voltz
          <span className="bolt">⚡</span>
        </h1>

        <div className="header-icons">
          <div id="cart-icon" className="cart-shopping">
            <Icon icone={FaShoppingCart} size={24} color="#00BFFF" />

            <span id="cart-count" className="cart-count">
              {cart.length}
            </span>
          </div>

          <div className="hamburguer-icon">
            <Icon icone={FaBars} size={24} color="#00BFFF" />
          </div>
        </div>

        <Nav />
      </header>
    </>
  );
};

export default Header;
