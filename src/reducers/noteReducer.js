import { createSlice, current } from "@reduxjs/toolkit"

// const initialState = [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]

//const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { ...noteToChange, important: !noteToChange.important }
      console.log(current(state)) //Usando current y console log puedo imprimir el estado actual del store en la consola
      return state.map(note => note.id !== id ? note : changedNote) //devuelve un nuevo state donde si el id de la nota es distinto de id se queda igual y la nota con id igual a id se reemplaza por changedNote 
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action){
      return action.payload
    }
  }
})

export const { createNote, toggleImportanceOf, appendNote, setNotes } = noteSlice.actions
export default noteSlice.reducer