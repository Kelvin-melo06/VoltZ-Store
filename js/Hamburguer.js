const nav = document.querySelector('nav');
const hamburguer = document.querySelector('.hamburguer-icon i');


function toggleMenu(){
   const willOpen = !nav.classList.contains('open');

   nav.classList.toggle('open');

   hamburguer.classList.toggle('hamburguer-anim');

   requestAnimationFrame(() =>{
      setTimeout(() =>{
         if(willOpen){
            hamburguer.classList.replace('fa-bars', 'fa-xmark');
         }else{
            hamburguer.classList.replace('fa-xmark', 'fa-bars');
         }
      }, 180);
   });
}

hamburguer.addEventListener('click', toggleMenu)