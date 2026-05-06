
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Fechar menu mobile ao clicar em um link
const menuLinks = menu.querySelectorAll('a')
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
    })
})

