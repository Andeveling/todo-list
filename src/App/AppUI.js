import React from "react"
import { TodoContext } from "../TodoContext"
import { TodoCounter } from "../components/TodoCounter"
import { TodoSearch } from "../components/TodoSearch"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, totalTodos, setOpenModal, searchValue } =
    React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>has an error...</p>}
        {loading && <p>Loading...</p>}
        {!loading && searchValue.length === 0 && totalTodos === 0 && <p>Add a new TO-DO!</p>}
        {!loading && !totalTodos.length && searchValue.length > 1 && <p>Not todo match</p>}

        {searchedTodos?.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export { AppUI }
