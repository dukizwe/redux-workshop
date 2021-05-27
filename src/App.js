import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { TodoList, TodoListStore } from './components/TodoList';
import { TodoFilter, TodoFilterStore } from './components/TodoFilter';

function App() {
          return (
                    <Provider store={store}>
                              {/* <TodoListStore /> */}
                              <TodoListStore />
                              <TodoFilterStore />
                    </Provider>
          );
}

export default App;
