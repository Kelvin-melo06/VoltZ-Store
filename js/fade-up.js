// fade-up.js - CÓDIGO FINAL OTIMIZADO

const fadeUpElementos = document.querySelectorAll('.fade-up');
let isScrolling = false;

function checkFadeUpElements(){
    // Throttling: Se já estiver agendado, não faz nada
    if (!isScrolling) {
        
        window.requestAnimationFrame(() => { // Sincroniza com o frame de renderização
            
            fadeUpElementos.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Gatilho em 80% da tela
                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('show');
                }
            });

            isScrolling = false; // Libera o Throttling para o próximo frame
        });
    }
    isScrolling = true; // Seta a flag para 'ocupado'
}

window.addEventListener('scroll', checkFadeUpElements);
checkFadeUpElements();