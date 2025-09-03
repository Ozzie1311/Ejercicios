Requisitos:
Clase Usuario:
Debe tener propiedades privadas para \_id (un identificador único), \_nombreUsuario, \_contrasenaHash (para simular una contraseña hasheada, no guardaremos la contraseña real), y \_roles.
El \_id debe generarse automáticamente al crear el usuario (puedes usar un contador simple o un Math.random() para este ejercicio).
El \_contrasenaHash no debe poder modificarse directamente desde fuera de la clase una vez establecido.
Debe tener un getter para id que permita acceder al ID del usuario.
Debe tener un getter para nombreUsuario.
Debe tener un setter para nombreUsuario que valide que el nombre de usuario no esté vacío.
Debe tener un getter para roles que devuelva una copia del array de roles para evitar modificaciones externas directas.
Debe tener un método agregarRol(rol) que permita añadir un rol al usuario, asegurándose de que no se añadan roles duplicados.
Debe tener un método eliminarRol(rol) que permita quitar un rol al usuario.
Debe tener un método cambiarContrasena(nuevaContrasena) que "hashee" la nueva contraseña y la asigne a \_contrasenaHash.
Clase SistemaAutenticacion:
Debe tener una propiedad privada \_usuarios que sea un Map (o un array, pero Map es más eficiente para buscar por ID o nombre de usuario).
Debe tener un método registrarUsuario(nombreUsuario, contrasena) que:
Cree una nueva instancia de Usuario.
Asigne un rol predeterminado (por ejemplo, "usuario") al nuevo usuario.
Agregue el usuario a la lista \_usuarios.
Valide que el nombreUsuario no exista ya.
Debe tener un método obtenerUsuarioPorId(id) que devuelva una instancia de Usuario o null si no se encuentra.
Debe tener un método iniciarSesion(nombreUsuario, contrasena) que:
Busque el usuario por nombreUsuario.
"Verifique" la contraseña (para este ejercicio, simplemente compara la contraseña proporcionada con el \_contrasenaHash).
Devuelva true si la autenticación es exitosa, false en caso contrario.
