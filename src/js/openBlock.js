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
