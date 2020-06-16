import * as React from 'react'
import { useSetRecoilState } from 'recoil'

import { todoListState } from '~/recoil/todoList'

// utility for creating unique Id
let id = 0
const getId = () => {
  return id++
}

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
