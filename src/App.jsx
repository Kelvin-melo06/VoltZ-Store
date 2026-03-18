/**
 * App.jsx
 * ----------------------------------------
 * Componente principal da aplicação.
 *
 * Ele é responsável por estruturar toda a interface do site,
 * reunindo os principais componentes visuais e executando
 * comportamentos globais (como animações).
 */

import Header from "@/Components/Layout/Header/Header.jsx";
import HomeSections from "@/Components/sections/HomeSections.jsx";
import useFadeUp from "@/hooks/useFadeUp.js";
import "@/Components/ui/modal/CartModal.jsx";
import CartModal from "@/Components/ui/modal/CartModal.jsx";

function App() {

  /**
   * useFadeUp:
   * ----------
   * Hook responsável por aplicar animações de entrada nos elementos
   * da página conforme eles aparecem na tela durante o scroll.
   *
   * Ele é executado assim que o App é montado, garantindo que todas
   * as seções com a classe "fade-up" sejam observadas e animadas.
   */
  useFadeUp();

  return (
    <div>

      /**
       * Header:
       * -------
       * Componente de navegação principal do site.
       * Contém logo, menu e interações iniciais.
       */
      <Header />

      /**
       * CartModal:
       * ----------
       * Componente responsável pelo modal do carrinho.
       *
       * Ele está conectado ao ModalContext, permitindo abrir/fechar
       * o modal e exibir os produtos adicionados ao carrinho.
       */
      <CartModal />

      /**
       * HomeSections:
       * -------------
       * Componente que reúne todas as seções da página inicial,
       * como:
       * - Hero
       * - Produtos
       * - Reviews
       * - Ofertas
       * - Newsletter
       * - About
       * - FAQ
       *
       * Ele funciona como o "corpo" principal do site.
       */
      <HomeSections />

    </div>
  );
}

export default App;