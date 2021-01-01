import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo)=>todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  useEffect(() => {
    //Se gatilla solo al comienzo
    getLocalTodos();
  }, []);

  useEffect(() => {
    //se gatilla filtro cada vez que se agregue un todo o cambie el filtro
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);


  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      const localStorageItems = JSON.parse(localStorage.getItem('todos'))
      setTodos(localStorageItems);
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
}

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList 
        todos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
