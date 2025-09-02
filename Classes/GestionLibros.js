class Libro {
  #titulo
  #autor
  #isbn
  #disponible
  constructor(titulo, autor, isbn) {
    if (
      typeof titulo !== 'string' ||
      (titulo.trim() === '' && typeof autor !== 'string') ||
      autor.trim() === ''
    ) {
      throw new Error(
        'El título o el autor no pueden ser cadenas vacias o cadenas en blanco'
      )
    }
    this.#autor = autor
    this.#disponible = true
    this.#isbn = isbn
    this.#titulo = titulo
  }

  get titulo() {
    return this.#titulo
  }

  get autor() {
    return this.#autor
  }

  get isbn() {
    return this.#isbn
  }

  get disponible() {
    return this.#disponible
  }

  set disponible(valor) {
    if (typeof valor !== 'boolean') {
      throw new Error('Solo pueden ser valores booleanos')
    } else {
      this.#disponible = valor
    }
  }
}

class Biblioteca {
  #catalogo
  constructor() {
    this.#catalogo = new Map()
  }

  agregarLibro(titulo, autor, isbn) {
    if (this.#catalogo.has(isbn)) {
      throw new Error('Error: No puedes agregar un libro que ya existe.')
    } else {
      const nuevoLibro = new Libro(titulo, autor, isbn)
      this.#catalogo.set(isbn, nuevoLibro)
      return nuevoLibro
    }
  }

  prestarLibro(isbn) {
    if (!this.#catalogo.has(isbn)) {
      throw new Error('Este libro no se encuentra en el catalogo')
    }
    const findLibro = this.#catalogo.get(isbn)
    if (!findLibro.disponible) {
      throw new Error('Este libro no se encuentra disponible para prestamo')
    } else {
      findLibro.disponible = false
      console.log(`Libro: '${findLibro.titulo}' prestado éxitosamente`)
      return true
    }
  }

  devolverLibro(isbn) {
    if (!this.#catalogo.has(isbn)) {
      throw new Error('El libro no se encuentra en el catalogo')
    }
    const findLibro = this.#catalogo.get(isbn)
    if (findLibro.disponible) {
      throw new Error('No se puede devolver un libro que ya esta disponible')
    } else {
      findLibro.disponible = true
      console.log('La devolución ha sido éxitosa')
      return true
    }
  }

  buscarLibroPorIsbn(isbn) {
    if (this.#catalogo.has(isbn)) {
      const findLibro = this.#catalogo.get(isbn)
      return findLibro
    } else {
      return null
    }
  }

  listarLibrosDisponibles() {
    return Array.from(this.#catalogo.values()).filter(
      (libro) => libro.disponible
    )
  }

  verificarDisponibilidad(isbn) {
    if (this.#catalogo.has(isbn)) {
      const libroEncontrado = this.#catalogo.get(isbn)
      console.log(
        `El libro ${libroEncontrado.titulo} ${
          libroEncontrado.disponible
            ? 'se encuentra disponible'
            : 'no se encuentra disponible en este momento'
        }`
      )
    }
  }

  listarLibrosPrestados() {
    return Array.from(this.#catalogo.values()).filter(
      (libro) => !libro.disponible
    )
  }
}

const miBiblioteca = new Biblioteca()

try {
  const libro1 = miBiblioteca.agregarLibro(
    'Cien años de soledad',
    'Gabriel García Márquez',
    '978-84-376-0494-7'
  )

  const libro2 = miBiblioteca.agregarLibro(
    '1984',
    'George Orwell',
    '978-0451524935'
  )

  const libro3 = miBiblioteca.agregarLibro(
    'Hiliada',
    'Homero',
    '978-0451524578'
  )

  const libro4 = miBiblioteca.agregarLibro(
    'Hitch',
    'J.P Morgan',
    '978-0451524114'
  )
} catch (error) {
  console.error(error.message)
}

miBiblioteca.prestarLibro('978-0451524114')
miBiblioteca.prestarLibro('978-0451524578')
console.log(miBiblioteca.listarLibrosDisponibles())
console.log(miBiblioteca.listarLibrosPrestados())
