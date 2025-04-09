const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload) //Le concateno al array state una nueva nota, recordar que esto devuelve un nuevo array, ya que las funciones deben ser puras
    case "TOGGLE_IMPORTANCE": {
      const id = action.payload.id //El id que voy a usar para buscar la nota lo encuentro en action.payload.id
      const noteToChange = state.find(n => n.id === id) //Busco la nota con el id de la accion que realice
      const changedNote = {...noteToChange, important: !noteToChange.important } //Creo una nueva nota que es una copia de la original pero tiene todos las propiedades iguales menos la propiedad importante que esta cambiada al valor opuesto (de true a false o al revez)
      //Retorno una copia del array state pero que va a tener todas las notas sin modificar iguales y la nota modificada cambiada por changedNote (la nota modificada es la que tiene el id del payload), es importante el hecho de que es una copia del array state pero modificado, ya que las funciones deben ser puras
      return state.map(note => note.id !== id ? note : changedNote)
  }
  default:
    return state //Retorno el nuevo estado
  }
}

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}

export default noteReducer