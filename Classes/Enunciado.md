Ejercicio: Sistema de Gestión de Libros para una Biblioteca
Objetivo: Desarrollar un sistema básico para gestionar libros en una biblioteca.
Requisitos:
Clase Libro:
Debe tener las siguientes propiedades privadas: titulo, autor, isbn, y disponible (un booleano que indica si el libro está disponible para préstamo).
El constructor debe inicializar titulo, autor, e isbn. Por defecto, un libro recién creado debe estar disponible.
Debe tener getters para titulo, autor, e isbn.
Debe tener un getter para disponible que devuelva true o false.
Debe tener un setter para disponible. Este setter solo debe permitir cambiar el estado de disponibilidad a true o false (no a otros tipos de datos).
Validación en el constructor:
titulo y autor no pueden ser cadenas vacías o solo espacios en blanco.
isbn debe ser una cadena de caracteres única (aunque en este ejercicio no lo validaremos contra una base de datos global, asegúrate de que se almacene como una cadena).
Clase Biblioteca:
Debe tener una propiedad privada llamada catalogo, que será un Map donde las claves serán los ISBN de los libros y los valores serán instancias de Libro.
El constructor no necesita inicializar nada más allá de la propiedad catalogo.
Método agregarLibro(titulo, autor, isbn):
Crea una nueva instancia de Libro con los datos proporcionados.
Si ya existe un libro con el mismo isbn en el catalogo, el método debe lanzar un Error indicando que el libro ya existe.
Si el libro es nuevo, agrégalo al catalogo.
Devuelve la instancia del Libro recién agregado.
Método prestarLibro(isbn):
Busca el libro por su isbn en el catalogo.
Si el libro no se encuentra, lanza un Error.
Si el libro se encuentra pero no está disponible, lanza un Error.
Si el libro está disponible, cambia su estado a false (no disponible) usando el setter de la clase Libro.
Devuelve true si el préstamo fue exitoso.
Método devolverLibro(isbn):
Busca el libro por su isbn en el catalogo.
Si el libro no se encuentra, lanza un Error.
Si el libro se encuentra pero ya está disponible, lanza un Error (no se puede devolver un libro que ya está disponible).
Si el libro no está disponible, cambia su estado a true (disponible) usando el setter de la clase Libro.
Devuelve true si la devolución fue exitosa.
Método buscarLibroPorIsbn(isbn):
Busca el libro por su isbn.
Devuelve la instancia de Libro si la encuentra, o null si no.
Método listarLibrosDisponibles():
Devuelve un array con todos los libros que están actualmente disponibles.

// Uso
const miBiblioteca = new Biblioteca();

// Agregar libros
try {
const libro1 = miBiblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", "978-84-376-0494-7");
console.log(`Agregado: ${libro1.titulo} por ${libro1.autor}`);

    const libro2 = miBiblioteca.agregarLibro("1984", "George Orwell", "978-0451524935");
    console.log(`Agregado: ${libro2.titulo} por ${libro2.autor}`);

    // Intentar agregar un libro con ISBN duplicado
    // miBiblioteca.agregarLibro("Rebelión en la granja", "George Orwell", "978-0451524935"); // Esto debería lanzar un error

} catch (error) {
console.error(error.message);
}

// Prestar un libro
try {
miBiblioteca.prestarLibro("978-84-376-0494-7");
console.log("Libro 'Cien años de soledad' prestado.");
console.log("¿Está disponible 'Cien años de soledad'?", miBiblioteca.buscarLibroPorIsbn("978-84-376-0494-7").disponible);
} catch (error) {
console.error(error.message);
}

// Intentar prestar un libro no disponible
try {
miBiblioteca.prestarLibro("978-84-376-0494-7"); // Esto debería lanzar un error
} catch (error) {
console.error(error.message);
}

// Devolver un libro
try {
miBiblioteca.devolverLibro("978-84-376-0494-7");
console.log("Libro 'Cien años de soledad' devuelto.");
console.log("¿Está disponible 'Cien años de soledad'?", miBiblioteca.buscarLibroPorIsbn("978-84-376-0494-7").disponible);
} catch (error) {
console.error(error.message);
}

// Listar libros disponibles
console.log("\nLibros disponibles:");
miBiblioteca.listarLibrosDisponibles().forEach(libro => {
console.log(`- ${libro.titulo} (${libro.autor})`);
});
