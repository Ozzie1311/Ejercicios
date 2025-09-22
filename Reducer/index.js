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

// const initialUser = {
//   name: 'Oswaldo',
//   email: 'oswaldo@oswaldo.com',
// }

// function userReducer(state, action) {
//   const { type, payload } = action
//   switch (type) {
//     case 'CHANGE_NAME':
//       return { ...state, name: payload.name }
//     case 'CHANGE_EMAIL':
//       return { ...state, email: payload.email }
//     default:
//       return state
//   }
// }

// const userVariable = userReducer(initialUser, { type: 'CHANGE_NAME', payload: { name: 'OswaldoEmilio' } })
// const changeEmail = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'rodriosw13@gmail.com' } })
// console.log(changeEmail.email === 'rodriosw13@gmail.com')

//Creando un contador que pueda incrementar y decrementar un número
// const initialState = {
//   contador: 0,
// }

// function reducerContador(state = initialState, action) {
//   console.log('Reducer llamado con estado:', state, 'y acción:', action)

//   switch (action.type) {
//     case 'INCREMENTAR':
//       return { ...state, contador: state.contador + 1 }
//     case 'DECREMENTAR':
//       return { ...state, contador: state.contador - 1 }
//     default:
//       console.log('No podemos simular esta acción rara.')
//       return state
//   }
// }

// let estadoActual = initialState
// console.log('Estado inicial:', estadoActual)

// estadoActual = reducerContador(estadoActual, { type: 'INCREMENTAR' })
// estadoActual = reducerContador(estadoActual, { type: 'INCREMENTAR' })
// estadoActual = reducerContador(estadoActual, { type: 'INCREMENTAR' })
// estadoActual = reducerContador(estadoActual, { type: 'INCREMENTAR' })
// estadoActual = reducerContador(estadoActual, { type: 'DECREMENTAR' })

// estadoActual = reducerContador(estadoActual, { type: 'ACCION_RARA' })
// console.log('Despues de incrementar y decrementar', estadoActual)

//Gestionando Lista de Tareas

// const initialState = {
//   tareas: [
//     { id: 1, texto: 'Aprender sobre state', completada: true },
//     { id: 2, texto: 'Practicar con los reducers', completada: true },
//     { id: 3, texto: 'Seguir practicando mucho más.', completada: true },
//   ],
// }

// function reducerTareas(state = initialState, action) {
//   const { type, payload } = action
//   // console.log('Reducer llamado con el estado:', state, 'y con la acción:', type)

//   switch (type) {
//     case 'AÑADIR_TAREA':
//       const nuevaTarea = {
//         id: Date.now(),
//         title: payload.texto,
//         completada: false,
//       }
//       return {
//         ...state,
//         tareas: [...state.tareas, nuevaTarea],
//       }
//     case 'ELIMINAR_TAREA':
//       const tareasFiltradas = state.tareas.filter((tarea) => tarea.id !== payload.id)
//       return { ...state, tareas: tareasFiltradas }
//     case 'MARCAR_COMPLETADA':
//       const tareaModificada = state.tareas.map((tarea) =>
//         tarea.id === payload.id ? { ...tarea, completada: !tarea.completada } : tarea,
//       )
//       return { ...state, tareas: tareaModificada }
//     case 'EDITAR_TAREA':
//       const tareaEditada = state.tareas.map((tarea) =>
//         tarea.id === payload.id ? { ...tarea, texto: payload.nuevoTexto } : tarea,
//       )
//       return { ...state, tareas: tareaEditada }
//     default:
//       return state
//   }
// }

// let estadoActualTareas = initialState
// // console.log('Estado inicial de tareas:', estadoActualTareas)

// //Añadir nueva tarea
// estadoActualTareas = reducerTareas(estadoActualTareas, {
//   type: 'AÑADIR_TAREA',
//   payload: { texto: 'Entender la inmutabilidad' },
// })
// console.log('Despues de añadir la tarea:', estadoActualTareas)

// //Eliminar una Tarea
// estadoActualTareas = reducerTareas(estadoActualTareas, {
//   type: 'ELIMINAR_TAREA',
//   payload: { id: 1 },
// })
// console.log('Después de eliminar la Tarea:', estadoActualTareas)

// //Modificar el estado de la tarea
// estadoActualTareas = reducerTareas(estadoActualTareas, {
//   type: 'MARCAR_COMPLETADA',
//   payload: { id: 3 },
// })
// console.log('Despues de ejecutar el marcar completada:', estadoActualTareas)

// //Editando el texto de la tarea
// estadoActualTareas = reducerTareas(estadoActualTareas, {
//   type: 'EDITAR_TAREA',
//   payload: { id: 2, nuevoTexto: 'Estoy modificando este texto' },
// })

// console.log('Despues de modificar el texto mediante el reducer:', estadoActualTareas)

// function reducerDelContador(estado = { contador: 0 }, action) {
//   const { type } = action
//   switch (type) {
//     case 'INCREMENTAR':
//       return { ...estado, contador: estado.contador + 1 }
//     case 'DECREMENTAR':
//       return { ...estado, contador: estado.contador - 1 }
//     default:
//       return estado
//   }
// }

// function crearStore(reducer) {
//   let estado

//   function getState() {
//     return estado
//   }

//   function dispatch(action) {
//     estado = reducer(estado, action)
//     console.log('Actualizando contador', estado)
//   }

//   dispatch({ type: '@@INIT' })

//   return { getState, dispatch }
// }

// const tienda = crearStore(reducerDelContador)

// console.log('Estado inicial:', tienda.getState())

// console.log('Despachando acción INCREMENTAR...')
// tienda.dispatch({ type: 'INCREMENTAR' })
// tienda.dispatch({ type: 'INCREMENTAR' })
// tienda.dispatch({ type: 'INCREMENTAR' })
// tienda.dispatch({ type: 'INCREMENTAR' })
// tienda.dispatch({ type: 'INCREMENTAR' })
// tienda.dispatch({ type: 'INCREMENTAR' })
// console.log('Despachando acción DECREMENTAR...')
// tienda.dispatch({ type: 'DECREMENTAR' })
// console.log('Nuevo estado:', tienda.getState())

initialTodoState = {
  todos: [
    { id: 1, title: 'Aprender sobre state', isCompleted: false },
    { id: 2, title: 'Practicar con los reducers', isCompleted: false },
    { id: 3, title: 'Seguir practicando mucho más.', isCompleted: false },
  ],
}

const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
}

function todoReducer(state = initialTodoState, action) {
  const { type, payload } = action
  const { ADD_TODO, REMOVE_TODO } = ACTIONS
  switch (type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        title: payload.title,
        isCompleted: payload.isCompleted,
      }
      return { ...state, todos: [...state.todos, newTodo] }
    case REMOVE_TODO:
      const filterTodos = state.todos.filter((todo) => todo.id !== payload.id)
      return { ...state, todos: filterTodos }
    default:
      return state
  }
}

function createStore(reducer) {
  let state

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
  }

  dispatch({ type: '@@INIT' })

  return { getState, dispatch }
}

const store = createStore(todoReducer)

store.dispatch({ type: ACTIONS.ADD_TODO, payload: { title: 'Walking out the dog', isCompleted: true } })
store.dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: 3 } })
console.log(store.getState())
