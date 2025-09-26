import RouterHandler from './router.ts'

window.onhashchange = function () {
  setActiveLinks()
}

function setActiveLinks() {
  const links = document.querySelectorAll('.header-link')
  links.forEach((link: Element) => {
    const pathLink: string | null = link.getAttribute('href')
    const currentPath: string = window.location.hash
    const areEqual: boolean = pathLink === currentPath
    link.classList.toggle('active', areEqual)
  })
}

class App {
  constructor() {
    new RouterHandler()
  }
}

new App()
