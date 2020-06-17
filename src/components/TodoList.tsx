import * as React from 'react'
import { useRecoilValue } from 'recoil'

import { filteredTodoListState } from '~/recoil/selectors'

import {
  TodoListStats,
  TodoListFilters,
  TodoItemCreator,
  TodoItem,
} from '~/components'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
