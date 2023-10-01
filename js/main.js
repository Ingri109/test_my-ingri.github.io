
//dutton open content cats

const duttonContent = document.querySelectorAll('[data-content-button]')

duttonContent.forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('click')
        const contentCat = document.querySelector('#' + this.dataset.contentButton)
        contentCat.classList.toggle('flex')
        if (contentCat.classList.toggle('hidden')) {
            this.textContent = 'Прочитати більше'
        } else {
            this.textContent = 'Закрити'
        }
    })
})

// Темна сторона  сайту
const topic = document.querySelector('#topic')
const sait = document.querySelector('html')

topic.addEventListener('click', function(){
        if(sait.classList.toggle('dark')){
            sait.classList.remove('light')
        }else{
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