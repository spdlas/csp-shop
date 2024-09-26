const sideBox = document.querySelector('.side-box')
const openButton = document.getElementById('burgerLeft')
const closeButton = document.getElementById('closeBurgerLeft')
const main = document.querySelector('.main')
const overlay = document.getElementById('overlay')

const buttonFB = document.getElementById('buttonFeedB')
const buttonFB2 = document.getElementById('buttonFeedB2')
const feedBox = document.querySelector('.feedback')
const closeFB = document.getElementById('closeFB')
const send = document.getElementById('buttonSend')

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
  feedBox.classList.remove('feedback--open')
  callback.classList.remove('callback--open')
})

buttonFB.addEventListener('click', function () {
  feedBox.classList.toggle('feedback--open')
  sideBox.classList.remove('side-box--open')
  callback.classList.remove('callback--open')
  overlay.classList.add('overlay--active')
})

buttonFB2.addEventListener('click', function () {
  feedBox.classList.toggle('feedback--open')
  sideBox.classList.remove('side-box--open')
  overlay.classList.add('overlay--active')
})

closeFB.addEventListener('click', function () {
  feedBox.classList.remove('feedback--open')
  overlay.classList.remove('overlay--active')
})

send.addEventListener('click', function () {
  feedBox.classList.remove('feedback--open')
  overlay.classList.remove('overlay--active')
})

const callbackButton = document.getElementById('buttonCall')
const callback = document.querySelector('.callback')
const closeCall = document.getElementById('closeCall')
const callbackButton2 = document.getElementById('buttonCall2')
const sendCall = document.getElementById('buttonSendCall')

callbackButton.addEventListener('click', function () {
  callback.classList.toggle('callback--open')
  overlay.classList.add('overlay--active')
  sideBox.classList.remove('side-box--open')
})
callbackButton2.addEventListener('click', function () {
  callback.classList.toggle('callback--open')
  overlay.classList.add('overlay--active')
})
closeCall.addEventListener('click', function () {
  callback.classList.remove('callback--open')
  overlay.classList.remove('overlay--active')
})
sendCall.addEventListener('click', function () {
  callback.classList.remove('callback--open')
  overlay.classList.remove('overlay--active')
  sideBox.classList.remove('side-box--open')
})
