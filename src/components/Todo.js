import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({
    id,
    text,
    completed,
    todos,
    setTodos
}) => {

    const deleteHandler = () => {
        //trae todos los 'todos' que son distintos al id seleccionado 
        //y setealos como la lista de 'todos'
        setTodos(todos.filter( (todo) => todo.id !== id));
    }

    const completeHandler = () => {
        //recorre todos los 'todos', y retorna la misma lista pero con el esstado completed cambiado
         //y setealos como la lista de 'todos'
        setTodos(todos.map( (item) => {
            if(item.id === id){
                return {
                    ...item,
                    completed : !item.completed
                }
            }
            return item;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${completed && 'completed'}`}>{text}</li>
            <button 
                onClick={completeHandler}
                className="complete-btn"
            >
                <i className="fas fa-check"></i>
            </button>
            <button 
                onClick={deleteHandler}
                className="trash-btn"
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

Todo.propTypes = {
    id : PropTypes.number,
    text : PropTypes.string,
    completed: PropTypes.bool,
    todos: PropTypes.array,
    setTodos: PropTypes.func
}

export default Todo
