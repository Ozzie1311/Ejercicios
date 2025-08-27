const getData = (baseUrl) => (route) => (callback) => {
  fetch(`${baseUrl}${route}`)
    .then((response) => response.json())
    .then((data) => callback(data))
}

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com')
const getSocialMediaPosts = getSocialMediaData('/posts')
const getSocialMediaComments = getSocialMediaData('/comments')

const render = (list) => list.forEach(({ body }) => console.log(body))

getSocialMediaPosts(render)
getSocialMediaComments(render)
