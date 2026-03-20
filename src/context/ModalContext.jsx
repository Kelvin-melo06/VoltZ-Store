/**
 * ModalContext.jsx
 * ----------------------------------------
 * Contexto responsável por controlar o estado do modal.
 *
 * Ele centraliza a lógica do modal em um único lugar,
 * permitindo abrir e fechar o modal de qualquer parte da aplicação
 * sem necessidade de prop drilling.
 */

import { createContext, useState } from "react";

/**
 * ModalContext:
 * -------------
 * Cria o contexto global do modal.
 *
 * Funciona como um "canal de dados" que será preenchido
 * pelo Provider com os valores necessários.
 */
const ModalContext = createContext();

export default function ModalProvider({ children }) {

  /**
   * isModalOpen:
   * ------------
   * Estado que controla se o modal está aberto (true)
   * ou fechado (false).
   *
   * Inicialmente começa como false.
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * toggleModal:
   * ------------
   * Função responsável por alternar o estado do modal.
   *
   * Se estiver aberto, fecha.
   * Se estiver fechado, abre.
   *
   * Utiliza o estado anterior (prevState) para garantir
   * que sempre trabalhe com o valor mais atualizado.
   */
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  /**
   * Provider:
   * ---------
   * Disponibiliza os valores do contexto para toda a aplicação.
   *
   * Valores compartilhados:
   * - isModalOpen -> estado atual do modal
   * - toggleModal -> função para abrir/fechar
   */
  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>

      {/**
       * children:
       * ---------
       * Representa toda a aplicação (App),
       * permitindo que qualquer componente acesse o contexto.
       */}
      {children}

    </ModalContext.Provider>
  );
}

export { ModalContext };