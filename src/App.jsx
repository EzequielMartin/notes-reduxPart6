import { useDispatch } from "react-redux"
import NewNote from "./components/newNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
import { useEffect } from "react"
import noteService from "./services/notes"
import { setNotes } from "./reducers/noteReducer"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    noteService
      .getAll().then(notes => dispatch(setNotes(notes)))
  }, [])

  return(
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
