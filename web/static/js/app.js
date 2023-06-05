const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('bg-cyan-600')
    menu.classList.toggle('min-h-screen')
})