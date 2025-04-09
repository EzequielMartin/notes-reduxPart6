import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return(
  <div>
    <p>all<input type="radio" name="filter" onChange={() => dispatch(filterChange("ALL"))}></input></p>
    <p>important<input type="radio" name="filter" onChange={() => dispatch(filterChange("IMPORTANT"))}></input></p>
    <p>nonimportant<input type="radio" name="filter" onChange={() => dispatch(filterChange("NONIMPORTANT"))}></input></p>
  </div>
  )
}

export default VisibilityFilter