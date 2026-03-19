/**
 * Arquivo principal (main.jsx)
 * ----------------------------------------
 * Este é o ponto de entrada da aplicação React.
 * É aqui que conectamos o React com o HTML e iniciamos toda a aplicação.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppProviders from './context/providers/AppProviders.jsx';
import './index.css';
import App from './App.jsx';

/**
 * createRoot:
 * -----------
 * Responsável por criar a raiz da aplicação React.
 *
 * Aqui estamos selecionando a div com id="root" (definida no index.html),
 * que é onde todo o conteúdo do React será renderizado.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 
      StrictMode:
      -----------
      Ferramenta do React que ajuda a identificar possíveis problemas no código,
      tornando o ambiente de desenvolvimento mais "rigoroso" com erros e boas práticas.
    */}

    <AppProviders>
      {/* 
        AppProviders:
        -------------
        Componente responsável por agrupar todos os Providers da aplicação.

        Atualmente ele contém:
        - CartContext (carrinho)
        - ModalContext (controle do modal)

        Ele utiliza "children" para envolver o App, permitindo que toda a aplicação
        tenha acesso aos estados globais fornecidos pelos contextos.
      */}

      <App />

      {/* 
        App:
        ----
        Componente principal da aplicação.
        Tudo que aparece na tela está dentro dele.

        Como ele está dentro do AppProviders,
        ele consegue acessar todos os contextos globais (carrinho e modal).
      */}
      
    </AppProviders>
  </StrictMode>
);