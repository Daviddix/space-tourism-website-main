// variables
const menuBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', (e)=>{
    menuBtn.style.display = 'none'
    nav.classList.add('slide')
})

closeBtn.addEventListener('click', (e)=>{
    menuBtn.style.display = 'initial'
    nav.classList.remove('slide')
})