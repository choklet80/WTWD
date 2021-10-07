const hamburger = document.querySelector('.menu_btn')
const adapt_menu = document.querySelector('.navigation_adapt')
const body = document.querySelector('body')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    adapt_menu.classList.toggle('active')
    body.classList.toggle('active')
})
