/**
 * CartContext.jsx
 * ----------------------------------------
 * Context responsável por centralizar toda a lógica do carrinho de compras.
 *
 * Ele resolve o problema de "prop drilling", permitindo que qualquer componente
 * da aplicação acesse e manipule o carrinho sem precisar passar props por vários níveis.
 *
 * Funcionalidades:
 * - Adicionar produtos ao carrinho
 * - Remover produtos do carrinho
 * - Persistir dados no localStorage
 * - Compartilhar estado global via Context API
 */

import { createContext, useState, useEffect } from "react";

/**
 * Criação do contexto:
 * --------------------
 * Funciona como um "canal" global que será alimentado pelo Provider.
 */
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  /**
   * cart (state):
   * -------------
   * Estado que armazena os produtos do carrinho.
   *
   * Inicialização com função:
   * - Busca dados no localStorage
   * - Se existir, converte de string para objeto (JSON.parse)
   * - Se não existir, inicia como array vazio
   */
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  /**
   * addToCart:
   * ----------
   * Adiciona um produto ao carrinho.
   *
   * Lógica:
   * - Verifica se o produto já existe no carrinho (find)
   * - Se existir: aumenta a quantidade
   * - Se não existir: adiciona um novo item com quantity = 1
   */
  const addToCart = (product) => {
    setCart((prevCart) => {

      // Verifica se o produto já está no carrinho
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      /**
       * Se já existir:
       * Atualiza a quantidade utilizando map (imutabilidade)
       */
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      /**
       * Se não existir:
       * Cria um novo item no carrinho com quantidade inicial = 1
       */
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  /**
   * removeFromCart:
   * ----------------
   * Remove uma unidade de um produto do carrinho.
   *
   * Lógica:
   * - Diminui a quantidade do item (map)
   * - Remove itens com quantidade <= 0 (filter)
   */
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        /**
         * Atualiza a quantidade
         */
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )

        /**
         * Remove itens com quantidade zero
         */
        .filter((item) => item.quantity > 0)
    );
  };

  /**
   * saveCartToLocalStorage:
   * -----------------------
   * Salva o carrinho no localStorage.
   *
   * O localStorage armazena apenas strings,
   * por isso usamos JSON.stringify.
   */
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  /**
   * useEffect - Persistência:
   * -------------------------
   * Executado sempre que o estado do carrinho muda.
   *
   * Responsável por manter os dados sincronizados
   * com o localStorage.
   */
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    /**
     * Provider:
     * ---------
     * Disponibiliza os dados e funções do carrinho
     * para toda a aplicação.
     */
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;