import { connect, useDispatch, useSelector } from "react-redux"
import { UPDATE_TODO_ACTION } from "../store/todoReducer"
import {filteredTodosSelector, todosSelector} from "../store/todosSelectors"
import {deleteTodoAction, toggleTodoAction} from "../store/todosActions"
import { useCallback } from "react"
// import React from 'react'


function TodoItem({todo, onToggle, onDelete}) {
          return (
                    <li>
                              <label>
                                        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}/>
                                        {todo.title}
                                        <button onClick={() => onDelete(todo)}>x</button>
                              </label>
                    </li>
          )
}
export function TodoList({todos, onToggle, onDelete})  {
/*           const todos = useSelector(todosSelector)
          const dispatch = useDispatch()
          const onToggle = useCallback((todo) => {
                    dispatch(toggleTodoAction(todo))
          }) */
          return (
                    <ul>
                              {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />)}
                    </ul>
          )
}

export function TodoListStore() {
          const todos = useSelector(filteredTodosSelector)
          const dispatch = useDispatch()
          const onToggle = useCallback(todo => {
                    dispatch(toggleTodoAction(todo))
          })
          const onDelete = useCallback(todo => {
                    dispatch(deleteTodoAction(todo))
          })
          return <TodoList todos ={todos} onToggle={onToggle} onDelete={onDelete} />
}
/* export const TodoListStore = connect(
          (state) => ({
                    todos: todosSelector(state)/*
          }),
          (dispatch) => ({
                    onToggle: todo => dispatch(toggleTodoAction(todo))
          })
)(TodoList) */