import RouterHandler from './router.js'

window.onhashchange = () => {
<<<<<<< HEAD
  setActiveLinks()
}

function setActiveLinks() {
=======
  setActiveLink()
}

function setActiveLink() {
>>>>>>> 4a8f4ee (??)
  const links = document.querySelectorAll('.header-link')
  links.forEach((link) => {
    const linkPath = link.getAttribute('href')
    const currentPath = window.location.hash
    if (linkPath === currentPath) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

class App {
  constructor() {
    new RouterHandler()
  }
}

new App()
