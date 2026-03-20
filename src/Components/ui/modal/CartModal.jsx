/**
 * CartModal.jsx
 * ----------------------------------------
 * Componente responsável por exibir o modal do carrinho.
 *
 * Ele utiliza:
 * - CartContext -> para acessar os itens do carrinho e remover itens
 * - ModalContext -> para controlar abertura e fechamento do modal
 *
 * Também contém lógicas como:
 * - Fechar o modal ao clicar fora
 * - Fechar ao pressionar a tecla ESC
 * - Calcular o valor total do carrinho
 */

import Button from "@/Components/ui/button/Button.jsx";
import { CartContext } from "@/context/CartContext.jsx";
import { ModalContext } from "@/context/ModalContext.jsx";
import { useContext, useEffect } from "react";

const CartModal = () => {

  /**
   * Context API:
   * ------------
   * Acessa:
   * - cart -> lista de produtos no carrinho
   * - removeFromCart -> função para remover itens
   * - closeModal -> função para fechar o modal
   * - isModalOpen -> controla se o modal está aberto
   */
  const { cart, removeFromCart } = useContext(CartContext);
  const { toggleModal, isModalOpen } = useContext(ModalContext);

  /**
   * useEffect - Tecla ESC:
   * ---------------------
   * Adiciona um listener para detectar quando o usuário
   * pressiona a tecla "Escape".
   *
   * Se pressionado, o modal é fechado.
   */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") toggleModal();
    };

    window.addEventListener("keydown", handleEsc);

    /**
     * Cleanup:
     * Remove o listener ao desmontar o componente
     */
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen,toggleModal]);

  /**
   * Renderização condicional:
   * -------------------------
   * Se o modal não estiver aberto, não renderiza nada.
   */
  if (!isModalOpen) return null;

  /**
   * cartTotal:
   * ----------
   * Calcula o valor total do carrinho
   * (preço * quantidade de cada item)
   */
  const cartTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div

      /**
       * Overlay:
       * --------
       * Área escura ao fundo do modal.
       *
       * Ao clicar nela, o modal é fechado.
       */
      onClick={toggleModal}
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
    >
      <div

        /**
         * Container do modal:
         * -------------------
         * Aqui fica o conteúdo do carrinho.
         *
         * stopPropagation evita que o clique dentro
         * do modal feche ele acidentalmente.
         */
        className="cart-neon"
        onClick={(e) => e.stopPropagation()}
      >

        {/* TÍTULO */}
        <h2 className="
          text-3xl text-center font-bold mb-8
          bg-gradient-to-r from-white to-cyan-300
          bg-clip-text text-transparent
        ">
          Carrinho 🛒
        </h2>

        {/**
         * Renderização condicional:
         * ------------------------
         * Se houver itens no carrinho, renderiza a lista.
         * Caso contrário, mostra mensagem de vazio.
         */}
        {cart.length > 0 ? (
          <ul className="
            list-none
            mb-6
            max-h-[300px]
            overflow-y-auto
            pr-2
          ">
            {cart.map((item) => (
              <li
                key={item.id}
                className="
                  flex items-center justify-between
                  gap-4
                  p-4 mb-4
                  rounded-xl
                  text-white
                  font-bold
                  border border-cyan-400/20
                  bg-cyan-400/5
                  transition-all duration-300
                "
              >

                {/*
                  Informações do produto:
                  - Nome
                  - Preço
                  - Quantidade (se > 1)
                */}
                <div className="flex flex-col text-left">
                  <span>{item.name}</span>
                  <span className="text-cyan-300 text-sm">
                    R${item.price.toFixed(2)}
                    {item.quantity > 1 && ` x${item.quantity}`}
                  </span>
                </div>

                {/*
                  Botão de remover item:
                  ---------------------
                  Remove uma unidade do produto do carrinho
                */}
                <Button
                  text="🗑"
                  onClick={() => removeFromCart(item.id)}
                  className="btn-danger"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart-empty">
            O Carrinho está Vazio 😔
          </p>
        )}

        {/*
          Total do carrinho:
          ------------------
          Exibe o valor total calculado
        */}
        <p className="
          text-xl text-center mb-6 p-4
          bg-cyan-400/10
          border border-cyan-400/20
          rounded-xl
        ">
          <strong className="text-cyan-300 text-2xl font-bold">
            Total: {cartTotal}
          </strong>
        </p>

        {/*
          Botão de fechar:
          ----------------
          Fecha o modal manualmente
        */}
        <Button
          text="Fechar"
          onClick={toggleModal}
          className="btn-primary"
        />
      </div>
    </div>
  );
};

export default CartModal;