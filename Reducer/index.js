// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 }
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }
//     default:
//       return state
//   }
// }

// const variable = counterReducer(5, { type: 'INCREMENT' })
// console.log(variable)

const initialUser = {
  name: 'Oswaldo',
  email: 'oswaldo@oswaldo.com',
}

function userReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_NAME':
      return { ...state, name: payload.name }
    case 'CHANGE_EMAIL':
      return { ...state, email: payload.email }
    default:
      return state
  }
}

const userVariable = userReducer(initialUser, { type: 'CHANGE_NAME', payload: { name: 'OswaldoEmilio' } })
const changeEmail = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'rodriosw13@gmail.com' } })
console.log(changeEmail.email === 'rodriosw13@gmail.com')
