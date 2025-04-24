// scriptmenu.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a');

  // Alterna o menu ao clicar no botão
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('ativo');
  });

  // Fecha o menu ao clicar em um link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('ativo');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Fechar menu ao clicar fora (opcional)
  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('ativo');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Responsividade menu mobile 
document.getElementById('btn-menu').addEventListener('click', () => {
  document.getElementById('menu-mobile').classList.add('active');
  document.getElementById('overlay-menu').classList.add('active');
});

document.querySelector('.btn-fechar').addEventListener('click', () => {
  document.getElementById('menu-mobile').classList.remove('active');
  document.getElementById('overlay-menu').classList.remove('active');
});