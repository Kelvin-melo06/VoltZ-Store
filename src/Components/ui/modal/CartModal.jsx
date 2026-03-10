import "./CartModal.css";
import Button from "../button/button";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";

const CartModal = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { closeModal } = useContext(ModalContext);

  const cartTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <div className="cart-content">
      <h2>Carrinho 🛒</h2>

      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}- R$
              {item.price.toFixed(2)}
              {item.quantity > 1 && ` x${item.quantity}`}
              <Button
                text="Remover"
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart-empty">O carrinho está vazio 😔</p>
      )}

      <p>
        <strong>Total: {cartTotal}</strong>
      </p>

      <Button text="fechar" className="close-cart" onClick={closeModal} />
    </div>
  );
};

export default CartModal;
