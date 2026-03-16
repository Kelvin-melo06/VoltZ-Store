import { Icon } from "../../ui/icon/Icon.jsx";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Nav from "../nav/nav.jsx";
import { CartContext } from "../../../context/CartContext.jsx";
import { ModalContext } from "../../../context/ModalContext.jsx";
import { useContext, useState, useEffect } from "react";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { openModal } = useContext(ModalContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 w-full z-50 backdrop-blur-md flex justify-between items-center
          ${scrolled ? "py-3 bg-black/95" : "py-5 bg-[rgba(13,13,13,0.95)]"}
          px-[5%] border-b border-[rgba(0,191,255,0.1)]
        `}
      >
        <h1 className="flex items-center gap-2 text-2xl font-black text-white">
          Voltz
          <span className="text-[#00BFFF] drop-shadow-[0_0_10px_#00BFFF]">⚡</span>
        </h1>

        <div className="flex items-center gap-6">
          {/* Ícone do carrinho */}
          <div className="relative cursor-pointer text-[#00BFFF] hover:text-[#5CE1E6] transition">
            <Icon
              icone={FaShoppingCart}
              size={24}
              color="#00BFFF"
              onClick={openModal}
            />
            <span className="absolute -top-3 -right-4 bg-[#00BFFF]/20% text-xs font-bold px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          </div>

          {/* Ícone do hamburguer */}
          <div className="block md:hidden z-50" onClick={toggleMenu}>
            <Icon icone={menuOpen ? FaTimes : FaBars} size={24} color="#00BFFF" />
          </div>
        </div>

        {/* Nav */}
        <Nav menu={menuOpen} />

        {/* Overlay para fechar menu mobile */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}

        
      </header>
    </>
  );
};

export default Header;