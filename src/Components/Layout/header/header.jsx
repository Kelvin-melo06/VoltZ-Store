import { Icon } from "../../ui/icon/Icon.jsx";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import Nav from "../nav/nav.jsx";
import CartModal from "../../ui/modal/CartModal.jsx";
import { useState } from "react";
import "./header.css";
import { CartContext } from "../../../context/CartContext.jsx";
import { useContext } from "react";

const Header = () => {
  const { cart, isModalOpen, openModal } = useContext(CartContext);
  

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <header id="header">
        <h1 className="logo">
          Voltz
          <span className="bolt">⚡</span>
        </h1>

        <div className="header-icons">
          <div id="cart-icon" className="cart-shopping">
            <Icon
              icone={FaShoppingCart}
              size={24}
              color="#00BFFF"
              onClick={openModal}
            />

            <span id="cart-count" className="cart-count">
              {cartCount}
            </span>
          </div>

          <div className="hamburguer-icon">
            <Icon icone={FaBars} size={24} color="#00BFFF" />
          </div>
        </div>

        <Nav />

        {isModalOpen && (
          <CartModal/>
        )}
      </header>
    </>
  );
};

export default Header;
