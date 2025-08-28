// const user1 = { name: 'Oswaldo' }
// const user2 = { name: 'Karolina' }

// const pw1 = '123456'
// const pw2 = '654321'

// const userMap = new Map()
// userMap.set(user1, pw1)
// userMap.set(user2, pw2)

// console.log(userMap)

// const user = {
//   name: 'john',
//   verified: true,
// }

// const newMap = new Map()
// newMap.set('name', 'john')
// newMap.set('verified', true)

// console.log(newMap.get('name'))

// Challenge:
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

// const favouritePlace = {
//   music: 'jazz',
//   name: 'Paris House',
// }

// const map = new Map()
// map.set('music', 'jazz')
// map.set('name', 'Paris House')
// map.set('visited', true)
// map.set('averageBill', 5)

// console.log(map.get('name'))

/*** ----- */
const userData = {
  username: 'Reed',
  title: 'JavaScript Programmer',
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`)
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`)
    }, 1000)
  },
}

userData.getBio()
userData.askToFriend()
