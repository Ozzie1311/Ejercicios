class Inventario {
  #products
  constructor() {
    this.#products = new Map()
  }

  añadirProducto(nombre, precio, cantidad) {
    if (this.#products.has(nombre)) {
      const productoEncontrado = this.#products.get(nombre)
      productoEncontrado.cantidad += cantidad
      console.log(`Se ha actualizado el producto: '${nombre}'`)
    } else {
      const nuevoProducto = new Producto(nombre, precio, cantidad)
      this.#products.set(nombre, nuevoProducto)
      console.log(`Producto: '${nombre}' agregado con éxito`)
    }
  }

  eliminarProducto(nombre) {
    if (this.#products.has(nombre)) {
      this.#products.delete(nombre)
      console.log(`El producto: '${nombre}' fue eliminado éxitosamente`)
    }
  }

  obtenerProducto(nombre) {
    const instanciaProducto = this.#products.get(nombre)
    return instanciaProducto instanceof Producto ? instanciaProducto : null
  }

  actualizarCantidad(nombre, nuevaCantidad) {
    if (this.#products.has(nombre)) {
      const productoEncontrado = this.#products.get(nombre)
      productoEncontrado.cantidad = nuevaCantidad
      console.log(`Cantidad del producto ${nombre} fue actualizada a ${nuevaCantidad}`)
    } else {
      throw new Error('El producto que intentas actualizar no se encuentra.')
    }
  }
  get products() {
    return new Map(this.#products)
  }

  get valorTotal() {
    return Array.from(this.#products.values()).reduce((acc, currentProduct) => {
      return acc + currentProduct.precio * currentProduct.cantidad
    }, 0)
  }
}

class Producto {
  #nombre
  #precio
  #cantidad
  constructor(nombre, precio = 0, cantidad = 0) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      throw new Error('El nombre no puede ser un espacio en blanco')
    } else {
      this.#nombre = nombre
    }
    this.#precio = precio
    this.#cantidad = cantidad
  }

  get nombre() {
    return this.#nombre
  }

  set precio(nuevoPrecio) {
    if (typeof nuevoPrecio !== 'number' || nuevoPrecio < 0 || !Number.isInteger(nuevoPrecio)) {
      throw new Error('El precio debe ser un valor númerico entenero')
    } else {
      this.#precio = nuevoPrecio
    }
  }

  set cantidad(nuevaCantidad) {
    if (typeof nuevaCantidad !== 'number' || nuevaCantidad < 0 || !Number.isInteger(nuevaCantidad)) {
      throw new Error('La cantidad debe ser un valor númerico entero y positivo')
    } else {
      this.#cantidad = nuevaCantidad
    }
  }

  get precio() {
    return this.#precio
  }

  get cantidad() {
    return this.#cantidad
  }
}

const inventario = new Inventario()

inventario.añadirProducto('Laptop', 1200, 4)
inventario.añadirProducto('Mouse', 20, 10)
inventario.añadirProducto('Keyboard', 45, 5)
inventario.eliminarProducto('Mouse')
inventario.añadirProducto('Headphones', 150, 10)
inventario.actualizarCantidad('Keyboard', 10)

console.log(inventario.products)
console.log(inventario.valorTotal)
