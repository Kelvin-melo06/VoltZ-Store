## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%E2%9A%A1%F0%9F%94%8BVoltZ-Store%E2%9A%A1%F0%9F%94%8B" alt="Typing SVG" /></a>

O **VoltZ Store** é um e-commerce conceitual de acessórios tech/gamer, desenvolvido para demonstrar proficiência em **JavaScript moderno, Performance de Animação** e **Arquitetura modular de Front-end**.

Este projeto foca em um design Dark Mode Futurista, implementando interações complexas de forma limpa e otimizada, utilizando apenas **HTML, CSS (Sass/Puro) e JavaScript**.

---

## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%F0%9F%94%8BFuncionalidades%F0%9F%94%8B" alt="Typing SVG" /></a>

| Sistema | Detalhes Técnicos |
| :--- | :--- |
| **Carrinho de Compras** | Lógica completa de adição/remoção de itens e cálculo de total, com dados persistidos no **LocalStorage**. |
| **Criação Dinâmica de UI** | O modal do carrinho é **criado e renderizado** dinamicamente pelo JavaScript (`showCartModal`), garantindo que a interface esteja sempre atualizada com os dados do cliente. |
| **Performance de Scroll** | Implementação do **`fade-up`** (Animate on Scroll) com **`requestAnimationFrame`** e Throttling, garantindo animações fluidas e eficientes em 60 FPS. |
| **UX/UI Neon Design** | Uso de `backdrop-filter: blur()`, **texto gradiente** e sombras duplas (`box-shadow`) para criar a estética futurista coesa da marca. |
| **Menu Hambúrguer** | Navegação mobile com transição suave (`max-height` + `transition`) e lógica de alternância de ícones. |
| **Acordeão Interativo** | Lógica do FAQ (Perguntas Frequentes) implementada com `max-height` e `scrollHeight` para animação suave de abertura e fechamento. |

---

## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%F0%9F%94%8BEstrutura+Do+Projeto%F0%9F%94%8B" alt="Typing SVG" /></a>

O projeto é estruturado em um *Design System* que garante consistência visual e eficiência.

| Seletor / Padrão | Propósito | Exemplo de Uso |
| :--- | :--- | :--- |
| **Classes de Feedback** | Controlam a interatividade e o estado visual. | `.cta-button:hover`, `.cart-modal.show-modal`. |
| **Grids e Layout** | Define o layout responsivo das galerias de produtos e depoimentos. | `display: grid;`, `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`. |
| **Pseudo-Elementos** | Cria detalhes estéticos sem poluir o HTML. | `::before` (Brilho do modal), `::after` (Sublinhado dos links). |
| **Animações Reutilizáveis** | Define o movimento de elementos em loops ou na entrada. | `@keyframes pulse`, `@keyframes flutuante`, `animation: slideIn ...`. |

---

## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%F0%9F%94%8BTecnologias+Utilizadas%F0%9F%94%8B" alt="Typing SVG" /></a>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="19" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="19" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="19" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="19" />
</div>  

---

## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%F0%9F%94%8BLogica+De+Funcionamento%F0%9F%94%8B" alt="Typing SVG" /></a>

**Inicialização:** Ao carregar a página, o `main.js` chama `updateCartCount()`, que lê o `localStorage` e exibe o número correto de itens no ícone do carrinho.
2.  **Adição de Item:** O clique em "Adicionar" executa `addToCart()` (atualiza o `localStorage`) e **`updateCartCount()`** (feedback visual imediato).
3.  **Visualização Dinâmica:** O clique no ícone do carrinho chama **`showCartModal()`**, que remove qualquer modal antigo, **cria um novo** e usa o método `map` para **renderizar o HTML da lista** com os dados atualizados.
4.  **Remoção de Item:** Ao clicar em "Remover", o `main.js` chama `removeFromCart()` e em seguida **chama `showCartModal()` novamente** para forçar o redesenho e exibir a lista com o item excluído.

---

## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%F0%9F%94%8BConceitos+Aplicados%F0%9F%94%8B" alt="Typing SVG" /></a>

- **Performance:** Throttling com `requestAnimationFrame` para otimização de scroll.
- **Manipulação de DOM:** Criação de elementos (`createElement`) e renderização com Template Literals e `.innerHTML`.
- **E-commerce:** Persistência de dados via `localStorage` e lógica de carrinho (find, filter, reduce).
- **CSS Avançado:** `cubic-bezier` para timing de animação, `transform: translate(-50%, -50%)` para centralização.

---

## <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=0B79D9&width=435&lines=%F0%9F%94%8BAprendizado%F0%9F%94%8B" alt="Typing SVG" /></a>

> “**Prioridade de Performance:** Dominar o uso de **`requestAnimationFrame` e Throttling** para otimizar a rolagem, garantindo uma experiência de usuário suave (60 FPS).
- **Ciclo de Vida do DOM:** Aprender a usar a **criação e destruição dinâmica** (`createElement`, `modal.remove()`) como alternativa ao simples `display: none`, especialmente em componentes complexos como o modal do carrinho.
- **Separação de Responsabilidades:** Reforçar a arquitetura modular, mantendo a lógica de **Dados (`cart.js`)** separada da **Interface (`main.js`)**.
- **Composição de Animações:** Entender como utilizar o **`cubic-bezier`** para injetar personalidade nas animações e como o `animation-fill-mode: forwards` é essencial para transições de saída limpas.”

---
