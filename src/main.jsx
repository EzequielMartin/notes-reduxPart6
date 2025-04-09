import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

//Mi nuevo store va a ser un store con dos parametros (notes,filter), donde notes es un array y filter un string.
//Ahora para poder acceder a la lista de notas tengo que acceder al parametro notes del estado, por ej haciendo state.notes, esto se ve en Notes.jsx
const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)