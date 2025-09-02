// 1) Sistema de Gestión de Inventario
/**
 * Crea una clase Inventario que permita gestionar un conjunto de productos. Cada producto tendrá un nombre, un precio y una cantidad. El inventario debe garantizar que no se puedan añadir productos duplicados (mismo nombre) y que el precio y la cantidad sean siempre números positivos.
 */

class Inventario {
  _products
  constructor() {
    this._products = new Map()
  }
  añadirProducto(nombre, precio, cantidad) {
    if (this._products.has(nombre)) {
      const productoExistente = this._products.get(nombre)
      try {
        productoExistente.cantidad += cantidad
        productoExistente.precio += precio
        console.log(`Cantidad de '${nombre}' actualizada. Nueva cantidad: '${productoExistente.cantidad}'`)
        console.log(`Precio de '${nombre}' actualizado. Nuevo precio: '${productoExistente.precio}'`)
      } catch (err) {
        throw new Error(`Error al actualizar la cantidad de '${nombre}': '${err.message}'`)
      }
    } else {
      try {
        const nuevoProducto = new Producto(nombre, precio, cantidad)
        this._products.set(nombre, nuevoProducto)
        console.log(`Producto '${nombre}' añadido al inventario`)
      } catch (err) {
        throw new Error(`Error al añadir producto '${nombre}': '${err.message}'`)
      }
    }
  }
  eliminarProducto(nombre) {
    if (this._products.has(nombre)) {
      try {
        this._products.delete(nombre)
        console.log(`Producto '${nombre}' eliminado exítosamente`)
      } catch (err) {
        throw new Error(`Ocurrió un error al eliminar el producto: '${err.message}'`)
      }
    }
  }

  obtenerProducto(nombre) {
    const instanciaProduct = this._products.get(nombre)
    return instanciaProduct instanceof Producto ? instanciaProduct : null
  }

  actualizarCantidad(nombre, nuevaCantidad) {
    if (this._products.has(nombre)) {
      const producto = this._products.get(nombre)
      try {
        producto.cantidad += nuevaCantidad
        console.log(`Cantidad del producto '${nombre}' actualizada a : '${producto.cantidad}'`)
      } catch (err) {
        throw new Error(`Ocurrió un error mientras se actualizaba la cantidad del producto: '${nombre}'`)
      }
    }
  }

  get valorTotalInventario() {
    const totalArray = Array.from(this._products.values()).reduce((acc, { _precio, _cantidad }) => {
      return acc + _precio * _cantidad
    }, 0)
    return totalArray
  }
}

class Producto {
  _nombre
  _precio
  _cantidad
  constructor(nombre, precio = 0, cantidad = 0) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      throw new Error('El nombre del producto no puede estar vacio')
    } else {
      this._nombre = nombre
      this.cantidad = cantidad
      this.precio = precio
    }
  }

  get nombre() {
    return this._nombre
  }

  set precio(newPrecio) {
    if (typeof newPrecio !== 'number' || newPrecio < 0) {
      throw new Error('El precio debe ser un número positivo')
    } else {
      this._precio = newPrecio
    }
  }

  get precio() {
    return this._precio
  }

  set cantidad(newCantidad) {
    if (typeof newCantidad !== 'number' || newCantidad < 0 || !Number.isInteger(newCantidad)) {
      throw new Error('La cantidad debe ser un número positivo y entero')
    } else {
      this._cantidad = newCantidad
    }
  }

  get cantidad() {
    return this._cantidad
  }
}

const inventario = new Inventario()
inventario.añadirProducto('Laptop', 1200, 3)
inventario.añadirProducto('Mouse', 20, 2)
inventario.añadirProducto('Laptop', 1500, 10)
inventario.añadirProducto('Keyboard', 60, 4)
inventario.añadirProducto('Headphones', 150, 6)
inventario.añadirProducto('Mousepad', 15, 25)
inventario.añadirProducto('Couplers', 5, 150)
inventario.añadirProducto('Supply Power', 235, 10)

inventario.eliminarProducto('Mousepad')

console.log(inventario.obtenerProducto('Laptop'))
console.log(inventario.obtenerProducto('Couplers'))

inventario.actualizarCantidad('Couplers', 25)
console.log(inventario.obtenerProducto('Couplers'))

console.log('El valor total del inventario es: ', inventario.valorTotalInventario + '$')
// console.log(inventario)
