import "./TodoForm.css"
import { TodoContext } from "../TodoContext"
import { useContext } from "react"
import { useState } from "react"

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext)
  const [todo, setTodo] = useState("")
  const onCancel = () => {
    setOpenModal((state) => !state)
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todo)
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit} className='form__todo'>
      <label id='new-todo'>
        <h1>New Todo</h1>
      </label>
      <textarea
        id='new-todo'
        name='new-todo'
        autoFocus
        className='new-todo'
        placeholder='Add your todo'
        rows={2}
        value={todo}
        onChange={handleChange}
      />
      <div className='todoForm_container-button'>
        <button className='todoForm-button' type='button' onClick={onCancel}>
          cancel
        </button>
        <button className='todoForm-button' type='submit'>
          add
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
