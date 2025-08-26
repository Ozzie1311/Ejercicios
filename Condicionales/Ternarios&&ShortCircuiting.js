// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated
// let isAuthenticated = true
// const shoppingCart = isAuthenticated ? 'iPad' : ''

// console.log('Shopping: ', shoppingCart)

// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
// const age = 15
// const allowedAccess = age >= 18 ? true : false

// console.log('Allowed Access: ', allowedAccess)

/* Challenge 3: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143
const isModerator = true

const hasEnoughKarma = karma > 100 ? true : false

const canUpvote = isModerator || hasEnoughKarma
console.log('canUpvote: ', canUpvote)

/* Challenge 4: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

const canDelete = isModerator && hasEnoughKarma
console.log('canDelete: ', canDelete)

// Challenge 5: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?
const response = 'JohnDoe'
const hasValidEmail = false
const user = hasValidEmail && (response || 'guest')

console.log(user)
