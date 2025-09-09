class App {
  constructor() {
    this.notes = []
    this.title = ''
    this.text = ''
    this.id = ''

    this.$form = document.querySelector('#form-container')
    this.$formButtons = document.querySelector('#form-buttons')
    this.$formTitle = document.querySelector('#note-title')
    this.$formText = document.querySelector('#note-text')
    this.$notes = document.querySelector('#notes')
    this.$placeholder = document.querySelector('#placeholder')
    this.$formCloseButton = document.querySelector('#form-close-button')
    this.$modal = document.querySelector('.modal')
    this.$modalTitle = document.querySelector('.modal-title')
    this.$modalText = document.querySelector('.modal-text')
    this.$modalCloseButton = document.querySelector('.modal-close-button')
    this.$colorTooltip = document.querySelector('#color-tooltip')

    this.addEventListeners()

    console.log('Estoy funcionando de casualidad??')
  }
  addEventListeners() {
    document.body.addEventListener('click', (event) => {
      this.handleFormClick(event)
      this.selectNote(event)
      this.openModal(event)
      this.deleteNote(event)
    })

    document.body.addEventListener('mouseover', (event) => {
      this.openTooltip(event)
    })

    document.body.addEventListener('mouseout', (event) => {
      this.closeTooltip(event)
    })

    this.$colorTooltip.addEventListener('mouseover', function (event) {
      this.style.display = 'flex'
    })

    this.$colorTooltip.addEventListener('mouseout', function () {
      this.style.display = 'none'
    })

    this.$form.addEventListener('submit', (event) => {
      event.preventDefault()
      const title = this.$formTitle.value
      const text = this.$formText.value
      //Con que haya un titulo o un texto es suficiente para validar la nota
      const hasNote = title || text
      if (hasNote) {
        //Sí hay una nota, entonces la agregamos con el método addNote
        this.addNote({ title, text })
      }
    })

    this.$formCloseButton.addEventListener('click', (event) => {
      event.stopPropagation()
      this.closeForm()
    })

    this.$modalCloseButton.addEventListener('click', (event) => {
      this.closeModal(event)
    })

    this.$colorTooltip.addEventListener('click', (event) => {
      const color = event.target.dataset.color
      console.log(color)
      if (color) {
        this.editColorNote(color)
      }
    })
  }

  handleFormClick(event) {
    const isFormClick = this.$form.contains(event.target)
    const title = this.$formTitle.value
    const text = this.$formText.value
    const hasNote = title || text

    if (isFormClick) {
      //Abrimos el formulario
      this.openForm()
    } else if (hasNote) {
      //Verificamos si hay alguna nota
      this.addNote({ title, text })
    } else {
      //Cerramos el formulario
      this.closeForm()
    }
  }

  openForm() {
    this.$form.classList.add('form-open')
    this.$formButtons.style.display = 'block'
    this.$formTitle.style.display = 'block'
  }

  closeForm() {
    this.$form.classList.remove('form-open')
    this.$formButtons.style.display = 'none'
    this.$formTitle.style.display = 'none'
    this.$formTitle.value = ''
    this.$formText.value = ''
  }

  openModal(event) {
    if (event.target.matches('.toolbar-delete')) return //Para que no abra el modal cuando queramos eliminar
    //Con esto verificamos que el evento al que le estamos dando click, tenga como ancestro más cercano a un elemento con la clase .note
    if (event.target.closest('.note')) {
      this.$modal.classList.toggle('open-modal')
      this.$modalTitle.value = this.title
      this.$modalText.value = this.text
    }
  }

  closeModal(event) {
    this.editNote()
    this.$modal.classList.toggle('open-modal')
  }

  openTooltip(event) {
    if (!event.target.matches('.toolbar-color')) return
    this.id = event.target.dataset.id
    const noteCoords = event.target.getBoundingClientRect()
    const horizontal = noteCoords.left
    const vertical = window.scrollY - 30
    this.$colorTooltip.style.transform = `translate(${horizontal}px, ${vertical}px)`
    this.$colorTooltip.style.display = 'flex'
  }

  closeTooltip(event) {
    if (!event.target.matches('.toolbar-color')) return
    this.$colorTooltip.style.display = 'none'
  }

  selectNote(event) {
    const $selectedNote = event.target.closest('.note')
    if (!$selectedNote) return
    const [$noteTitle, $noteText] = $selectedNote.children
    this.title = $noteTitle.innerText
    this.text = $noteText.innerText
    this.id = $selectedNote.dataset.id
  }

  editNote() {
    const title = this.$modalTitle.value
    const text = this.$modalText.value
    this.notes = this.notes.map((note) => (note.id === Number(this.id) ? { ...note, title, text } : note))
    this.displayNotes()
  }

  editColorNote(color) {
    this.notes = this.notes.map((note) => (note.id === Number(this.id) ? { ...note, color } : note))
    this.displayNotes()
  }

  addNote({ title, text }) {
    const newNote = {
      title,
      text,
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
      color: 'white',
    }
    this.notes = [...this.notes, newNote]
    this.displayNotes()
    this.closeForm()
  }

  deleteNote(event) {
    event.stopPropagation()
    if (!event.target.matches('.toolbar-delete')) return
    console.log(event.target)
    const id = event.target.dataset.id
    this.notes = this.notes.filter((note) => note.id !== Number(id))
    this.displayNotes()
  }

  displayNotes() {
    const hasNotes = this.notes.length > 0
    this.$placeholder.style.display = hasNotes ? 'none' : 'flex'
    this.$notes.innerHTML = this.notes
      .map(
        ({ title, text, color, id }) =>
          `<div style="background: ${color}" class="note" data-id="${id}">
            <div class="${title && 'note-title'}">${title}</div>
            <div class="note-text">${text}</div>
            <div class="toolbar-container">
              <div class="toolbar">
                <svg data-id=${id} class="toolbar-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>

                <svg data-id=${id} class="toolbar-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M576 320C576 320.9 576 321.8 576 322.7C575.6 359.2 542.4 384 505.9 384L408 384C381.5 384 360 405.5 360 432C360 435.4 360.4 438.7 361 441.9C363.1 452.1 367.5 461.9 371.8 471.8C377.9 485.6 383.9 499.3 383.9 513.8C383.9 545.6 362.3 574.5 330.5 575.8C327 575.9 323.5 576 319.9 576C178.5 576 63.9 461.4 63.9 320C63.9 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320zM192 352C192 334.3 177.7 320 160 320C142.3 320 128 334.3 128 352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM448 256C465.7 256 480 241.7 480 224C480 206.3 465.7 192 448 192C430.3 192 416 206.3 416 224C416 241.7 430.3 256 448 256z"/></svg>
              </div>
            </div>
          </div>`,
      )
      .join('')
  }
}

new App()
