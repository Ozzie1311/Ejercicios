/** 1)
 * Descripción:
Escribe una función asíncrona llamada getUsersAndProcess que realice las siguientes tareas:
Obtenga una lista de usuarios de la API https://jsonplaceholder.typicode.com/users.
Filtre los usuarios para incluir solo aquellos cuya id sea un número par.
Para cada usuario filtrado, cree un nuevo objeto que contenga solo id, name y email.
Devuelva un array con estos nuevos objetos.
 */

// async function getUsersAndProcess() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     if (!response.ok) {
//       throw new Error('No se pudieron obtener los usuarios')
//     }
//     const usersData = await response.json()
//     const filterUsers = usersData
//       .filter((user) => user.id % 2 === 0)
//       .map(({ id, name, email }) => {
//         return {
//           id,
//           name,
//           email,
//         }
//       })
//     console.log(filterUsers)
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// getUsersAndProcess()

/** 2)
 * Crea una función asíncrona llamada getPostDetailsAndAuthor que reciba un postId como argumento. La función debe:
Obtener los detalles del post con el postId dado de https://jsonplaceholder.typicode.com/posts/{postId}.
Una vez obtenidos los detalles del post, usar el userId de ese post para obtener los detalles del autor de https://jsonplaceholder.typicode.com/users/{userId}.
Devolver un objeto que contenga las propiedades del post y una nueva propiedad authorName con el nombre del autor.
 */

// async function getPostDetailsAndAutor(postId) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`
//     )
//     if (!response.ok) {
//       throw new Error('An error ocurred while fetching')
//     }
//     const postData = await response.json()

//     const response2 = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${postData.userId}`
//     )
//     if (!response.ok) {
//       throw new Error('An error ocurred while fetching')
//     }
//     const { name } = await response2.json()
//     // console.log({ ...postData, authorName: name })
//     return { ...postData, authorName: name }
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// const getInformation = getPostDetailsAndAutor(1)
// console.log(getInformation)

/*  3) 
  Descripción:
Escribe una función asíncrona llamada getCommentsForPosts que reciba un array de postIds como argumento. La función debe:
Para cada postId en el array, obtener los comentarios asociados de https://jsonplaceholder.typicode.com/posts/{postId}/comments.
Utilizar Promise.all para realizar todas las solicitudes de comentarios concurrentemente.
Devolver un array de arrays, donde cada sub-array contiene los comentarios para un postId específico, manteniendo el orden de los postIds originales.
*/

// async function fetchDataById(postId) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//     )
//     if (!response.ok) {
//       throw new Error('An error ocurred while fetching')
//     }
//     const postData = await response.json()
//     return postData
//   } catch (error) {
//     throw new Error(
//       `Error fetching comments for post ${postId}: ${response.status}`
//     )
//   }
// }

// async function getCommentsForPosts(postIds) {
//   try {
//     const response = await Promise.all(postIds.map((id) => fetchDataById(id)))
//     console.log(response)
//   } catch (error) {
//     console.error('Error procesing posts', error.message)
//   }
// }
// getCommentsForPosts([1, 2, 3, 4])

/** 4)
 * Descripción:
    Crea una función asíncrona llamada createPost que reciba un objeto postData con las propiedades title, body y userId. La función debe:
    Enviar una solicitud POST a https://jsonplaceholder.typicode.com/posts con el postData proporcionado.
    La solicitud debe tener el Content-Type adecuado (application/json).
    Devolver el objeto de respuesta del servidor (que incluirá un nuevo id)
*/

const objetoPost = {
  title: 'Este es un post bien chevere',
  body: 'Este es el cuerpo de este post, aquí van cosas muy interesantes',
  userId: 1,
}

async function createPost(postData) {
  try {
    const response = await fetch('https://jsonplaceholder.typcode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }
    const newPost = await response.json()
    console.log(newPost)
    return newPost
  } catch (error) {
    console.error('Error al crear post: ', error.message)
  }
}

createPost(objetoPost)
