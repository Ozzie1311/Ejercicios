// Challenge:
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// const bar = 'Next'
// const cafe = 'TP Café'
// const restaurant = "Cake's Lunch"

// const favoritePlaces = {
//   bar,
//   cafe,
//   restaurant,
//   greeting() {
//     console.log('This is a message logged out in the console')
//   },
// }

// favoritePlaces.greeting()
// // console.log(`My favorite restaurant is: ${favoritePlaces.restaurant}`)
// // console.log(greeting)

// const colors = {
//   yellow: 'ff0',
//   blue: 'f00',
//   orange: 'f70',
// }

// const getColors = (key) => colors[key]

// console.log(getColors('blue'))
// console.log(getColors('yellow'))
// console.log(getColors('orange'))

// const user = {
//   name: 'Oswaldo',
//   age: 32,
// }

// function getStatus(obj) {
//   console.log(user[obj])
// }

// getStatus('age')
/* 
  ------------------------------
*/
// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

// const recommendations = {
//   pancakes: 'Nowhere Man',
//   riceBowls: 'Pompoko',
//   beer: 'The Craft Beer Co.',
//   coffee: 'Coffee Roasters',
//   small_plates: 'Venetian Plates',
//   music: {
//     traditional: "Fiddler's Elbow",
//     jazz: 'The Paris House',
//   },
// }

// const getInfo = ({ music: { traditional, jazz } }) => {
//   console.log(`${traditional} ${jazz}`)
// }

// getInfo(recommendations)

// const user = {
//   name: 'Oswaldo',
//   age: 32,
//   gender: 'male',
//   proffesion: 'Former developer',
// }

// const newUser = {
//   name: 'Pedro',
//   age: 22,
// }

// // const newCopy = Object.assign({}, user, newUser)
// // console.log(user)
// // console.log(newCopy)
// const newCopy = { ...user, ...newUser }
// console.log(user)
// console.log(newCopy)

/**
 * Algunos Ejercicios para practicar la desestructuración.
 */

// const usuario = {
//   name: 'Oswaldo',
//   edad: 32,
//   ciudad: 'Maturín',
// }

// const { name: NombreCompleto, ciudad } = usuario
// console.log(NombreCompleto, ciudad)

//Enunciado: Tienes un objeto producto que podría o no tener una propiedad stock. Desestructura nombre y stock. Si stock no existe, asigna un valor por defecto de 0. Imprime nombre y stock en la consola.

// const producto1 = {
//   nombre: 'Camiseta',
//   precio: 20,
// }

// const producto2 = {
//   nombre: 'Pantalón',
//   precio: 40,
//   stock: 15,
// }

// const destructuring = (product) => {
//   const { stock = 10, nombre } = product
//   console.log('Stock:', stock)
//   console.log('Producto:', nombre)
// }

// destructuring(producto1)
// destructuring(producto2)

//Enunciado: Crea una función llamada mostrarInfoProducto que reciba un objeto item como parámetro. Dentro de la función, desestructura las propiedades nombre, precio y cantidad (con un valor por defecto de 1 si no existe) directamente en los parámetros de la función. La función debe imprimir un mensaje como: "Producto: [nombre], Precio: [precio], Cantidad: [cantidad]".

// const item1 = {
//   nombre: 'Libro',
//   precio: 15,
// }

// const item2 = {
//   nombre: 'Bolígrafo',
//   precio: 2,
//   cantidad: 5,
// }

// const mostrarInfoProducto = ({ nombre, precio, cantidad = 1 }) => {
//   console.log(`Producto: [${nombre}], Precio: [${precio}] Cantidad: [${cantidad}]`)
// }

// mostrarInfoProducto(item1)
// mostrarInfoProducto(item2)

//Desestructura calle y ciudad del objeto anidado dirección
// const empresa = {
//   nombre: 'Tech Solutions',
//   fundacion: 2000,
//   direccion: {
//     calle: 'Av. Siempre Viva',
//     numero: 123,
//     ciudad: 'Springfield',
//   },
// }

// const {
//   direccion: { calle, ciudad },
// } = empresa

// console.log(ciudad, calle)

//Enunciado: Tienes un objeto pedido con id, cliente, total y productos. Desestructura id y cliente en variables separadas. Luego, usa la sintaxis de "rest" para recolectar las propiedades restantes (total y productos) en un nuevo objeto llamado detallesAdicionales. Imprime id, cliente y detallesAdicionales.
// const pedido = {
//   id: 'ABC-123',
//   cliente: 'Juan Pérez',
//   total: 150.75,
//   productos: ['Laptop', 'Ratón', 'Teclado'],
// }

// const { id, cliente, ...detallesAdicionales } = pedido
// console.log('ID: ', id)
// console.log('Cliente: ', cliente)
// console.log('Detalles Adicionales: ', detallesAdicionales)

// 7) Enunciado: Tienes un array de objetos libros, donde cada objeto tiene titulo, autor y detalles (que es un objeto anidado con paginas y genero).
// Crea una función llamada listarLibros que reciba este array de libros. La función debe iterar sobre el array y, para cada libro, desestructurar titulo y autor directamente. También debe desestructurar genero del objeto detalles (renombrándolo a categoriaLiteraria) y paginas.
// La función debe devolver un nuevo array de strings, donde cada string tenga el formato:
// "El libro '[titulo]' de [autor] es de género [categoriaLiteraria] y tiene [paginas] páginas."

// const libros = [
//   {
//     titulo: 'Cien años de soledad',
//     autor: 'Gabriel García Márquez',
//     detalles: {
//       paginas: 496,
//       genero: 'Realismo mágico',
//     },
//   },
//   {
//     titulo: '1984',
//     autor: 'George Orwell',
//     detalles: {
//       paginas: 328,
//       genero: 'Distopía',
//     },
//   },
//   {
//     titulo: 'El señor de los anillos',
//     autor: 'J.R.R. Tolkien',
//     detalles: {
//       paginas: 1178,
//       genero: 'Fantasía épica',
//     },
//   },
// ]

// const listarLibros = (arrLibros) => {
//   return arrLibros.map(({ titulo, autor, detalles: { genero: categoriaLiteraria, paginas } }) => {
//     return `El libro '${titulo}' de ${autor} es de género ${categoriaLiteraria} y tiene ${paginas} páginas`
//   })
// }

// const response = listarLibros(libros)
// console.log(response)
/** ----------------------------------------------- */

//Enunciado: Tienes una función actualizarPerfilUsuario que recibe dos argumentos: idUsuario y un objeto datosActualizados.
// El objeto datosActualizados puede contener propiedades como nombre, email, telefono y otras propiedades adicionales que no están predefinidas (ej. preferencias, direccionEnvio).
// La función debe:
// Desestructurar idUsuario.
// Desestructurar nombre y email del objeto datosActualizados.
// Recolectar el resto de las propiedades de datosActualizados en un objeto llamado otrosDatos.
// La función debe devolver un nuevo objeto que represente el perfil de usuario actualizado. Este objeto debe incluir el idUsuario, el nombre y email actualizados, y todas las propiedades de otrosDatos "esparcidas" en el nivel superior del objeto resultante.

// const perfilInicial = {
//   id: 'user-001',
//   nombre: 'Ana García',
//   email: 'ana.garcia@example.com',
//   telefono: '555-1234',
//   rol: 'admin',
// }

// const nuevosDatos = {
//   nombre: 'Ana María García',
//   email: 'anita.garcia@newdomain.com',
//   preferencias: { tema: 'oscuro', notificaciones: true },
//   direccionEnvio: 'Calle Falsa 123',
// }

// const actualizarPerfilUsuario = ({ id }, datosActualizados) => {
//   const { nombre, email, ...otrosDatos } = datosActualizados
//   return { id, nombre, email, ...otrosDatos }
// }

// const nuevoUsuario = actualizarPerfilUsuario(perfilInicial, nuevosDatos)
// console.log(nuevoUsuario)

/** --- **/
//Enunciado: Tienes un objeto configuracion que puede contener propiedades tituloPagina, fuente (con un objeto anidado familia y tamano), y opcionalmente colorFondo y modo.
// Crea una función generarEstilos que reciba este objeto configuracion. La función debe:
// Desestructurar tituloPagina renombrándolo a nombreSitio. Si no existe, su valor por defecto debe ser "Mi Sitio Web".
// Desestructurar familia de fuente renombrándolo a tipoFuente. Si fuente o familia no existen, tipoFuente debe tener un valor por defecto de "Arial".
// Desestructurar colorFondo con un valor por defecto de "#FFFFFF" (blanco).
// Desestructurar modo con un valor por defecto de "light".
// La función debe devolver un objeto CSS-like con estas propiedades desestructuradas.

const config1 = {
  tituloPagina: 'Mi Blog Personal',
  fuente: {
    familia: 'Roboto',
    tamano: 16,
  },
  colorFondo: '#F0F0F0',
}

const config2 = {
  fuente: {
    tamano: 14,
  },
  modo: 'dark',
}

const generarEstilos = ({
  tituloPagina: nombreSitio = 'Mi sitio web',
  fuente: { familia: tipoFuente = 'Arial' },
  colorFondo = '#FFFFFF',
  modo = 'light',
}) => {
  return {
    nombreSitio,
    tipoFuente,
    colorFondo,
    modo,
  }
}

const estilo1 = generarEstilos(config1)
const estilo2 = generarEstilos(config2)
console.log(estilo1)
console.log(estilo2)
