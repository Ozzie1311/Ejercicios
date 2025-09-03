class Vehiculo {
  #matricula
  #marca
  #modelo
  #color
  #tipo
  constructor(matricula, marca, modelo, color, tipo) {
    this.#matricula = matricula
    this.#marca = marca
    this.#modelo = modelo
    this.#color = color
    this.#tipo = tipo
  }

  get matricula() {
    return this.#matricula
  }

  get marca() {
    return this.#marca
  }

  get modelo() {
    return this.#modelo
  }

  get color() {
    return this.#color
  }

  get tipo() {
    return this.#tipo
  }

  set marca(nuevaMarca) {
    if (typeof nuevaMarca !== 'string' || nuevaMarca.trim() === '') {
      throw new Error('La marca no puede ser un espacio en blanco')
    } else {
      this.#marca = nuevaMarca.trim()
    }
  }

  set modelo(nuevoModelo) {
    if (nuevoModelo.trim() === '') {
      throw new Error('El modelo no puede ser un espacio vacio')
    } else {
      this.#modelo = nuevoModelo.trim()
    }
  }

  set color(nuevoColor) {
    if (nuevoColor.trim() === '') {
      throw new Error('El color no puede ser un espacio en blanco')
    } else {
      this.#color = nuevoColor.trim()
    }
  }

  set tipo(nuevoTipo) {
    if (nuevoTipo.trim() === '') {
      throw new Error('El tipo no puede ser un espacio en blanco')
    } else {
      this.#tipo = nuevoTipo.trim()
    }
  }

  obtenerDescripcion() {
    const mensaje = `"${this.#tipo.charAt(0).toUpperCase() + this.#tipo.slice(1)} ${this.#marca} '${this.#modelo}' ${
      this.#color
    }, matrícula '${this.#matricula}', tipo ${this.#tipo}"`
    return mensaje
  }
}

class Estacionamiento {
  #capacidadMaxima
  #vehiculosEstacionados
  constructor(capacidadMaxima = 0) {
    this.#capacidadMaxima = capacidadMaxima
    this.#vehiculosEstacionados = new Map()
  }

  get espaciosDisponibles() {
    const calculoEspacios = this.#capacidadMaxima - this.#vehiculosEstacionados.size
    return calculoEspacios
  }

  get capacidadMaxima() {
    return this.#capacidadMaxima
  }

  estacionarVehiculo(vehiculo) {
    if (this.espaciosDisponibles <= 0) {
      throw new Error('En este momento no quedan espacios disponibles')
    }
    if (this.#vehiculosEstacionados.has(vehiculo.matricula)) {
      return false
    } else {
      this.#vehiculosEstacionados.set(vehiculo.matricula, vehiculo)
      return true
    }
  }

  retirarVehiculo(matricula) {
    if (this.#vehiculosEstacionados.has(matricula)) {
      // const vehiculoEncontrado = this.#vehiculosEstacionados.get(matricula)
      this.#vehiculosEstacionados.delete(matricula)
      return true
    } else {
      throw new Error('El vehículo que estas tratando de eliminar no se encuentra estacionado')
    }
  }

  buscarVehiculo(matricula) {
    if (this.#vehiculosEstacionados.has(matricula)) {
      const vehiculoEncontrado = this.#vehiculosEstacionados.get(matricula)
      return vehiculoEncontrado
    } else {
      throw new Error(`El vehículo con la matricula ${matricula} no se encuentra en el estacionamiento`)
    }
  }

  get obtenerListaVehiculos() {
    return [...this.#vehiculosEstacionados.values()]
  }
}

const miEstacionamiento = new Estacionamiento(5)

console.log(`Capacidad máxima: ${miEstacionamiento.capacidadMaxima} espacios`)
console.log(`Espacios disponibles: ${miEstacionamiento.espaciosDisponibles} espacios`)

const coche1 = new Vehiculo('ABC-123', 'Nissan', 'Qashqai', 'Azul', 'coche')
const moto1 = new Vehiculo('XYZ-789', 'Honda', 'CBR500R', 'Rojo', 'moto')
const coche2 = new Vehiculo('DEF-456', 'Ford', 'Focus', 'Negro', 'coche')

// console.log(coche1.obtenerDescripcion())
// console.log(moto1.obtenerDescripcion())
// console.log(coche2.obtenerDescripcion())

console.log(miEstacionamiento.estacionarVehiculo(coche1))
console.log(miEstacionamiento.estacionarVehiculo(moto1))
console.log(miEstacionamiento.estacionarVehiculo(coche2))
console.log(miEstacionamiento.estacionarVehiculo(new Vehiculo('GHI-012', 'BMW', 'X3', 'Blanco', 'coche')))
console.log(miEstacionamiento.estacionarVehiculo(new Vehiculo('JKL-345', 'Mercedes', 'Clase A', 'Gris', 'coche')))
console.log(miEstacionamiento.espaciosDisponibles)

const buscarCoche = miEstacionamiento.buscarVehiculo('DEF-456')
if (buscarCoche) {
  console.log(`Encontrado: ${buscarCoche.marca} ${buscarCoche.modelo} ${buscarCoche.color}`)
  buscarCoche.color = 'Gris Oscuro'
  console.log(buscarCoche.obtenerDescripcion())
}

console.log('\nVehículos Encontrados:')
miEstacionamiento.obtenerListaVehiculos.forEach((vehiculo) => console.log(vehiculo.obtenerDescripcion()))

console.log(`Retirando coche1: ${miEstacionamiento.retirarVehiculo('ABC-123')}`)
console.log(`Espacios disponibles después de retirar: ${miEstacionamiento.espaciosDisponibles}`)

console.log(`Retirando un vehículo inexistente: ${miEstacionamiento.retirarVehiculo('111-111')}`)
