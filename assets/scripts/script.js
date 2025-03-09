const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');


menuIcon.addEventListener('click', () => {
   // Basculer la classe active sur le menu burger et le nav
   menuIcon.classList.toggle('active');
   navLinks.classList.toggle('active');

   // if (navLinks.classList.contains('active')) {
   //    navLinks.style.visibility = "visible";
   //    navLinks.style.opacity = "1";
   // } else {
   //    setTimeout(() => {
   //       navLinks.style.visibility = "hidden";
   //       navLinks.style.opacity = "0";
   //    }, 50); // Correspond au temps de l'animation CSS
   // }
});

let carousel = document.querySelector(".carousel");
let items = carousel.children;
let totalItems = items.length;
let visibleItems = 3;
let index = 0;

// Clone les premiers éléments et les ajoute pour créer un effet de boucle infinie
for (let i = 0; i < visibleItems; i++) {
   let clone = items[i].cloneNode(true);
   carousel.appendChild(clone);
}

function moveCarousel() {
   index++;
   carousel.style.transition = "transform 0.5s ease-in-out";
   carousel.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;

   if (index >= totalItems) {
         setTimeout(() => {
            carousel.style.transition = "none";
            index = 0;
            carousel.style.transform = `translateX(0%)`;
         }, 500);
   }
}

setInterval(moveCarousel, 3000);