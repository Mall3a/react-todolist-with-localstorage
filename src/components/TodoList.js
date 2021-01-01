import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({
    todos,
    setTodos
}) => {
    return (
        <div className="todo-container">
                <ul className="todo-list">
                   {
                       todos.map( (todo) => {
                            
                        return (
                            <Todo 
                                key={todo.id} 
                                {...todo}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        )
                       })
                   }
                </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func
}

export default TodoList
