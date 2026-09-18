// =================================
// MENU MOVIL HERMED PREMIUM
// =================================


const toggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const links = document.querySelectorAll(".mobile-menu a");



// Abrir / cerrar menú

toggle.addEventListener("click", ()=>{


mobileMenu.classList.toggle("active");

document.body.classList.toggle("menu-open");


});



// Cerrar al seleccionar una opción

links.forEach(link=>{


link.addEventListener("click",()=>{


mobileMenu.classList.remove("active");

document.body.classList.remove("menu-open");


});


});
