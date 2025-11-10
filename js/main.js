// main.js - CÓDIGO ATUALIZADO

console.log("main.js carregado");

// **********************************************
// 1. LÓGICA DE FEEDBACK (Contador)
// **********************************************

function updateCartCount() {
    // Estas funções (loadCart, getCartTotal) estão em cart.js
    const cart = loadCart();
    const cartCountSpan = document.getElementById('cart-count'); 
    
    if (!cartCountSpan) return;

    // Calcula o total de produtos (somando a quantidade de todos os itens)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    cartCountSpan.textContent = totalItems;

    // Mostra/esconde o contador no header
    if (totalItems > 0) {
        cartCountSpan.style.display = 'inline-block'; 
    } else {
        // Esconder o contador quando o carrinho estiver vazio
        cartCountSpan.style.display = 'none'; 
    }
}


// **********************************************
// 2. LÓGICA DO MODAL (Criação Dinâmica)
// **********************************************

function showCartModal(){
    const cart = loadCart();

    // 1. Remove modal antigo
    const oldModal = document.querySelector(".cart-modal");
    if(oldModal) oldModal.remove();
    updateCartCount(); // Atualiza o contador (caso tenha removido itens por outro lugar)

    // 2. Cria modal
    const modal = document.createElement("div");
    modal.classList.add("cart-modal", "show-modal");

    const total = getCartTotal();

    modal.innerHTML = `
        <div class="cart-content">
            <h2>Carrinho 🛒</h2>
            ${
                cart.length > 0 
                ? `<ul>
                    ${cart.map(item => `
                        <li>
                            ${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}
                            <button class="remove-item" data-id="${item.id}">Remover</button>
                        </li>
                    `).join("")}
                </ul>
                <p><strong>Total:</strong> R$${total}</p>`
                : "<p class = \"cart-empty\">O carrinho está vazio 😔</p>"
            }
            <button class="close-cart">Fechar</button>
        </div>
    `;

    document.body.appendChild(modal);

    // 3. Fechar modal 
    modal.querySelector(".close-cart").addEventListener("click", () => {

        modal.classList.add('closing');

        setTimeout(() =>{
            modal.remove();
            updateCartCount();
        }, 300);
    });

    // 4. Remover item e atualizar
    modal.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
            updateCartCount(); // Atualiza o contador
            showCartModal(); // Chama novamente para RENDERIZAR a lista atualizada
        });
    });
    
    // 5. Fechar ao clicar no backdrop
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('closing');

            setTimeout(() =>{
                modal.remove();
            }, 300);
        }
    });
}


// **********************************************
// 3. INICIALIZAÇÃO DA INTERFACE
// **********************************************

function setupAddButtons(){
    const buttons = document.querySelectorAll(".add-button");

    buttons.forEach((btn, index) => {
        const product = products[index];
        if(!product) return;

        btn.dataset.id = product.id;

        btn.addEventListener("click", (ev) => {
            ev.preventDefault();
            addToCart(product);
            updateCartCount(); // Ação principal: adicionar e ATUALIZAR O CONTADOR
        });
    });
}

function setupFAQ(){
    const faqItem = document.querySelectorAll('.faq-item');

    faqItem.forEach((item) => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');

        if(question && answer){
            question.addEventListener('click', () =>{
                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                    // Abre: Define a altura máxima para a altura real do conteúdo
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    // Fecha: Define a altura máxima como zero
                    answer.style.maxHeight = null; 
                }
            })
        }
    })
}

function main(){
    setupAddButtons();
    setupFAQ();
}


document.addEventListener("DOMContentLoaded", () => {
    main(); 

    // 1. INICIALIZA O CONTADOR (para mostrar o valor se o carrinho não estiver vazio)
    updateCartCount(); 

    // 2. CONECTA O ÍCONE DO CARRINHO PARA ABRIR O MODAL
    const openCartBtn = document.getElementById('cart-icon'); 
    
    if (openCartBtn) {
        openCartBtn.addEventListener('click', showCartModal); 
    }
});