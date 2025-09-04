// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     return response.json()
//   })
//   .then(({ name, company: { name: companyName } }) => console.log({ name, companyName }))
//   .catch((error) => console.error(error))

const range = 10
for (let i = 1; i < range; i++) {
  fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
    .then(({ name, company: { name: companyName } }) => console.log({ name, companyName }))
    .catch((error) => console.error(error))
}
