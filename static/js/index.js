// Темна сторона  сайту
const topic = document.querySelector('#topic')
const sait = document.querySelector('html')

topic.addEventListener('click', function () {
    if (sait.classList.toggle('dark')) {
        sait.classList.remove('light')
    } else {
        sait.classList.add('light')
        sait.classList.remove('dark')
    }
})

// Системна тема
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

localStorage.theme = 'light'

localStorage.theme = 'dark'

localStorage.removeItem('theme')

// Модальне вікно
const open = document.querySelector('#open-model')
const close = document.querySelector('#close-model')
const menu = document.querySelector('#modal')

open.addEventListener('click', function () {
    
    menu.classList.remove('hidden')
    close.addEventListener('click', function () {
        menu.classList.add('hidden')
    })

    menu.querySelector('.modal-window').addEventListener('click', function(event){
        event.stopPropagation();
    })
    
    menu.addEventListener('click', function () {
        menu.classList.add('hidden');
    })


})

