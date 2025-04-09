import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return(
    <li  onClick={handleClick}>
      {note.content} 
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => {
    switch (state.filter) {
      case "ALL":
        return state.notes // Ahora que mi state es combinado tengo que acceder al parametro que quiero, es este caso es a notes.
      case "IMPORTANT":
        return state.notes.filter(note => note.important === true)
      case "NONIMPORTANT":
        return state.notes.filter(note => note.important === false)
      default:
        return state.notes
    }
  }) 

  return(
    <ul>
      {notes.map(note => <Note key={note.id} note={note} handleClick={() => dispatch(toggleImportanceOf(note.id))} />)}
    </ul>
  )
}

export default Notes