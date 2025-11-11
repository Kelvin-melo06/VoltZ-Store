// fade-up.js - CÓDIGO FINAL OTIMIZADO

const fadeUpElementos = document.querySelectorAll('.fade-up');
let isScrolling = false;

function checkFadeUpElements(){
    if(!isScrolling){
        window.requestAnimationFrame(() => {
            fadeUpElementos.forEach((elements) => {
                const elementsTop = elements.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if(elementsTop < windowHeight * 0.8){
                    elements.classList.add('show');
                }
            })
            isScrolling = false;
        })
    }
    isScrolling = true;
}

window.addEventListener('scroll', checkFadeUpElements);
checkFadeUpElements();