import React from "react"
import { TodoContext } from "../../TodoContext"
import "./TodoSearch.css"
/* Ahora este componenete necesita dos parametros Props para actualizar */
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  /* Ahora vamos a trabajar con estados */
  /* Estado inicial | Funcion que actualiza el valor atravez del evento onChange que tiene como props */
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
    /* Con el event.target.value y el evento onChange llamamos el valor cada vez que se escribe */
  }
  return (
    <div className='input_container'>
      <input
        className='inputToDo'
        placeholder='Search To Do...'
        value={searchValue} // Esto guardara el valor inicial que es un string vacio
        onChange={onSearchValueChange}
        /* Evento que reacciona ante un cambio en el contenido  que cambiara el estado inicial por el setSearchValue*/
      />
    </div>
  )
}

export { TodoSearch }
