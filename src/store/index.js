import { combineReducers, createStore } from "redux"
import { filterReducer } from "./filterReducer"
import { todosReducer } from "./todoReducer"

export default createStore(
          combineReducers({
                    todos: todosReducer,
                    filter: filterReducer
          }),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)