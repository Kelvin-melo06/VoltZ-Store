const fadeUpElementos = document.querySelectorAll('.fade-up');
let isScrolling = false;

function checkFadeUpElements(){
    if(!isScrolling){
        window.requestAnimationFrame(() =>{
            fadeUpElementos.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if(elementTop < windowHeight * 0.8){
                element.classList.add('show');
            }
        });
        isScrolling = false;
        })
    }
    isScrolling = true;
}

window.addEventListener('scroll', checkFadeUpElements)

checkFadeUpElements();