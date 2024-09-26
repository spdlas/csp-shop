const sideBox = document.querySelector('.side-box')
const openButton = document.getElementById('burgerLeft')
const closeButton = document.getElementById('closeBurgerLeft')
const main = document.querySelector('.main')
const overlay = document.getElementById('overlay')

// Открытие меню и показ затемняющего слоя
openButton.addEventListener('click', function () {
  sideBox.classList.toggle('side-box--open')
  overlay.classList.add('overlay--active') // Показать overlay
})

// Закрытие меню и скрытие затемняющего слоя
closeButton.addEventListener('click', function () {
  sideBox.classList.toggle('side-box--open')
  overlay.classList.remove('overlay--active') // Скрыть overlay
})

// Закрытие меню при клике на затемнение
overlay.addEventListener('click', function () {
  sideBox.classList.remove('side-box--open')
  overlay.classList.remove('overlay--active')
})
