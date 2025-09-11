class App {
  constructor() {
    this.notes = []
    this.title = ''
    this.text = ''
    this.id = ''

    this.$form = document.querySelector('#form-container')
    this.$formTitle = document.querySelector('#note-title')
    this.$formText = document.querySelector('#note-text')
    this.$formButtons = document.querySelector('#form-buttons')
    this.$notes = document.querySelector('#notes')
    this.$placeholder = document.querySelector('#placeholder')
    this.$formCloseButton = document.querySelector('#form-close-button')
    this.$modal = document.querySelector('.modal')
    this.$modalTitle = document.querySelector('.modal-title')
    this.$modalText = document.querySelector('.modal-text')

    this.addEventListeners()
  }

  addEventListeners() {
    document.body.addEventListener('click', (event) => {
      this.handleFormClick(event)
      this.selectNote(event)
      this.openModal(event)
    })

    this.$form.addEventListener('submit', (event) => {
      event.preventDefault()
      const title = this.$formTitle.value
      const text = this.$formText.value
      const hasNote = title || text

      if (hasNote) {
        this.addNote({ title, text })
      }
    })

    this.$formCloseButton.addEventListener('click', (event) => {
      event.stopPropagation()
      this.closeForm()
    })
  }

  handleFormClick(event) {
    //Aquí lo que estoy preguntando es si el formulario tiene un evento de clic, es decir, si le hicieron clic dentro
    const isFormClicked = this.$form.contains(event.target)

    if (isFormClicked) {
      this.openForm()
    } else {
      this.closeForm()
    }
  }

  openForm() {
    this.$form.classList.add('form-open')
    this.$formTitle.style.display = 'block'
    this.$formButtons.style.display = 'block'
  }

  closeForm() {
    this.$form.classList.remove('form-open')
    this.$formTitle.style.display = 'none'
    this.$formButtons.style.display = 'none'
    this.$formTitle.value = ''
    this.$formText.value = ''
  }

  openModal(event) {
    if (event.target.matches('.toolbar-delete')) return
    if (event.target.closest('.note')) {
      this.$modal.classList.toggle('open-modal')
      this.$modalTitle.value = this.title
      this.$modalText.value = this.text
    }
  }

  selectNote(event) {
    const $selectedNote = event.target.closest('.note')
    if (!$selectedNote) return
    const [$noteTitle, $noteText] = $selectedNote.children
    this.title = $noteTitle.innerText
    this.text = $noteText.innerText
    this.id = $selectedNote.dataset.id
  }

  addNote({ title, text }) {
    const newNote = {
      title,
      text,
      color: 'white',
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
    }
    this.notes = [...this.notes, newNote]
    this.displayNotes()
    this.closeForm()
  }

  displayNotes() {
    this.$placeholder.style.display = this.notes.length > 0 ? 'none' : 'flex'
    this.$notes.innerHTML = this.notes
      .map(
        ({ title, text, id, color }) =>
          `<div style="background: ${color}" class="note" data-id="${id}">
            <div class="${title && 'note-title'}">${title}</div>
            <div class="note-text">${text}</div>
            <div class="toolbar-container">
              <div class="toolbar">
              
             <svg data-id=${id} class="toolbar-delete" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              
             <svg data-id=${id} class="toolbar-color"   xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.498 0 10 4.002 10 9c0 1.351 -.6 2.64 -1.654 3.576c-1.03 .914 -2.412 1.424 -3.846 1.424h-2.516a1 1 0 0 0 -.5 1.875a1 1 0 0 1 .194 .14a2.3 2.3 0 0 1 -1.597 3.99l-.156 -.009l.068 .004l-.273 -.004c-5.3 -.146 -9.57 -4.416 -9.716 -9.716l-.004 -.28c0 -5.523 4.477 -10 10 -10m-3.5 6.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m8 0a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m-4 -3a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" /></svg>

              <svg data-id=${id} class="toolbar-edit"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
              </div>
            </div>
          </div>`,
      )
      .join('')
  }
}

new App()
