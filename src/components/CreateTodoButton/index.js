import React from "react"
import "./CreateTodoButton.css"

function CreateTodoButton({ setOpenModal, openModal }) {
  const onClickButton = () => {
    setOpenModal((state) => !state)
  }

  return (
    <button className='CreateTodoButton' onClick={onClickButton}>
      +
    </button>
  )
}

export { CreateTodoButton }
