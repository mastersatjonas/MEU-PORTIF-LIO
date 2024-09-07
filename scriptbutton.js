let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// funcão para abrir menu mobile
btnMenu.addEventListener("click", () => {
    menu.classList.add('abrir-menu')
})

// funcão para fechar menu mobile
menu.addEventListener("click", () => {
    menu.classList.remove('abrir-menu')
})
// funcão no overlay para fechar menu mobile
overlay.addEventListener("click", () => {
    menu.classList.remove('abrir-menu')
})