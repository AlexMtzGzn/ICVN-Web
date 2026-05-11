const menuBtn = document.querySelector('#menuBtn');
const navegacion = document.querySelector('#navegacion');

menuBtn.addEventListener('click', () => {
    navegacion.classList.toggle('mostrar');
});