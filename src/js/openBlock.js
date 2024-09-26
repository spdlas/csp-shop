const about = document.querySelector('.about__more')
const aboutOpen = document.getElementById('buttonAbout')
const aboutText = document.getElementById('aboutText')

aboutOpen.addEventListener('click', function () {
  if (about.classList.contains('about-text--open')) {
    about.style.height = '0px'
  } else {
    const fullHeight = about.scrollHeight + 'px'
    about.style.height = fullHeight
  }

  about.classList.toggle('about-text--open')
  aboutOpen.classList.toggle('about-text--rotate')

  aboutText.textContent = about.classList.contains('about-text--open')
    ? 'Скрыть'
    : 'Читать далее'
})

const readA = document.getElementById('readTextA')
const part = document.querySelector('.swiper-partners')
readA.addEventListener('click', function () {
  if (part.classList.contains('.swiper-partners--open')) {
    part.style.height = '180px'
  } else {
    const fullHeight = part.scrollHeight + 'px'
    part.style.height = fullHeight
  }

  part.classList.toggle('.swiper-partners--open')

  const textA = readA.querySelector('.read-text__title')
  textA.textContent = part.classList.contains('.swiper-partners--open')
    ? 'Скрыть'
    : 'Показать все'

  const image = readA.querySelector('img')
  image.style.transform = part.classList.contains('.swiper-partners--open')
    ? 'rotate(180deg)'
    : 'rotate(0deg)'
})
const openTextB = document.getElementById('openTextB')
const partB = document.querySelector('.swiper-tech')

openTextB.addEventListener('click', function () {
  if (partB.classList.contains('swiper-tech--open')) {
    partB.style.height = '190px'
  } else {
    const fullHeight = partB.scrollHeight + 'px'
    partB.style.height = fullHeight
  }

  partB.classList.toggle('swiper-tech--open')

  const textB = openTextB.querySelector('.read-text__title')
  textB.textContent = partB.classList.contains('swiper-tech--open')
    ? 'Скрыть'
    : 'Показать все'

  const imageB = openTextB.querySelector('img')
  imageB.style.transform = partB.classList.contains('swiper-tech--open')
    ? 'rotate(180deg)'
    : 'rotate(0deg)'
})
