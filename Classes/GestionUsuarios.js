function generarRandomId() {
  return Math.floor(Math.random() * 1000 + 1)
}

class Usuario {
  #id
  #nombreUsuario
  #contrasenaHash
  #roles
  constructor(nombreUsuario, contrasenaHash) {
    this.#id = generarRandomId()
    this.#nombreUsuario = nombreUsuario
    this.#contrasenaHash = contrasenaHash
    this.#roles = ['usuario']
  }

  get id() {
    return this.#id
  }

  get nombreUsuario() {
    return this.#nombreUsuario
  }

  set nombreUsuario(nombre) {
    if (this.#nombreUsuario === '' || nombre === '') {
      throw new Error('El nombre de usuario no puede estar vacio')
    } else {
      this.#nombreUsuario = nombre
    }
  }

  get roles() {
    return [...this.#roles]
  }

  añadirRol(rol) {
    if (this.#roles.includes(rol)) {
      throw new Error(`El rol ${rol} que estas intentando añadir se encuentra duplicado`)
    } else {
      this.#roles.push(rol)
    }
  }

  eliminarRol(rol) {
    if (this.#roles.includes(rol)) {
      console.log(`el rol '${rol}' ha sido eliminado correctamente`)
      this.#roles = this.#roles.filter((element) => element !== rol)
    } else {
      throw new Error(`El rol '${rol}' que estas intentando eliminar no se encuentra.`)
    }
  }

  // cambiarContrasena(nuevaContrasena) {
  //   this.#contrasenaHash =
  // }
}

class SistemaAutenticacion {
  #usuarios
  constructor() {
    this.#usuarios = new Map()
  }

  registrarUsuario(nombreUsuario, contrasena) {
    if (this.#usuarios.has(nombreUsuario)) {
      throw new Error(`El usuario ${nombreUsuario} ya se encuentra registrado`)
    } else {
      const nuevoUsuario = new Usuario(nombreUsuario, contrasena)
      this.#usuarios.set(nombreUsuario, nuevoUsuario)
      console.log(`El usuario '${nombreUsuario}' ha sido registrado éxitosamente`)
    }
  }

  iniciarSesion(nombreUsuario, contrasena) {
    if (this.#usuarios.has(nombreUsuario)) {
      const usuarioEncontrado = this.#usuarios.get(nombreUsuario)
      if (usuarioEncontrado.contrasena === contrasena) {
        console.log(`La autenticación ha sido éxitosa.`)
        return true
      } else {
        console.log(`La autenticación ha fallado.`)
        return false
      }
    }
  }

  obtenerUsuario(nombreUsuario) {
    const usuario = this.#usuarios.get(nombreUsuario)
    return usuario
  }
}

const sistema = new SistemaAutenticacion()

sistema.registrarUsuario('Oswaldo', 1235)
sistema.registrarUsuario('Karolina', 1451)

const usuarioOswaldo = sistema.obtenerUsuario('Oswaldo')

usuarioOswaldo.añadirRol('admin')
usuarioOswaldo.añadirRol('manager')
console.log(usuarioOswaldo.roles)
usuarioOswaldo.eliminarRol('admin')
console.log(usuarioOswaldo.roles)
