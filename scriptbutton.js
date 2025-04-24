// scriptbutton.js

// Alternar menu mobile
const btnAbrirMenu = document.querySelector('.btn-abrir-menu');
const menuMobile = document.querySelector('.menu-mobile');

btnAbrirMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('ativo');
});

// Alternar texto do botão
const botaoTrocarTexto = document.getElementById('botaoTrocar');

botaoTrocarTexto.addEventListener('click', function () {
  this.textContent = this.textContent === 'Iniciar' ? 'Parar' : 'Iniciar';
});

// Recarregar a página ao clicar no botão
const botaoRecarregar = document.getElementById('botaoRecarregar');

botaoRecarregar.addEventListener('click', () => {
  window.location.reload();
});
const toggleBtn = document.getElementById('theme-toggle');
let darkMode = false;

toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  toggleBtn.textContent = darkMode ? '🌙' : '🌞';
});
