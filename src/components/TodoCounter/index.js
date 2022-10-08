import React from "react"
import { TodoContext } from "../../TodoContext"
import "./TodoCounter.css"

function TodoCounter() {
  // aca le pasamos como props las propiedades que colocamos en TodoCounter en el archivo App que los define "Algo"
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  return (
    <div className='title_container'>
      <h1>Your Tasks</h1>
      <h3>
        Complete {completedTodos} of {totalTodos}
      </h3>
    </div>
  )
}

export { TodoCounter } // Ahora se debe importar en el archivo APP
