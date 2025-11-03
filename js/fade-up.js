const fadeUpElementos = document.querySelectorAll('.fade-up');

function checkFadeUpElements(){
    fadeUpElementos.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(elementTop < windowHeight * 0.8){
            element.classList.add('show');
        }
    })
}

window.addEventListener('scroll', checkFadeUpElements)

checkFadeUpElements();