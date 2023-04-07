const navBar = document.querySelector(".nav-bar");
const abrir = document.querySelector("#abrir");
// const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    navBar.classList.toggle('visible');
})

// cerrar.addEventListener('click', ()=> {
//     menu.classList.remove('visible');
// })