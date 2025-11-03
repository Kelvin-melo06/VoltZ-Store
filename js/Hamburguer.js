const nav = document.querySelector('nav');
const hamburguerIcon = document.querySelector('.hamburguer-icon');

function toggleMenu(){
   nav.classList.toggle('open');
}

hamburguerIcon.addEventListener('click', toggleMenu)