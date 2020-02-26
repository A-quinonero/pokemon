const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('mostrar');
});
