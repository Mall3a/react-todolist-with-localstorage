import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Form = ({
    setInputText,
    inputText,
    todos,
    setTodos,
    setStatus
}) => {

    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if(inputText!=''){
            setAlert(false);
        }else{
            setAlert(true);
        }
    }, [inputText])

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        if(inputText!=''){
            e.preventDefault();
            setTodos([...todos,
                {text: inputText, completed: false, id: Math.random()*1000}]);
            setInputText('');
        }
        
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
            <form onSubmit={submitTodoHandler}>
                <div className="container">
                   <div className="todo-input-button">
                    <input 
                            value={inputText} 
                            onChange={inputTextHandler} 
                            type="text" 
                            className="todo-input" 
                        />
                        <button className="todo-button" type="submit">
                            <i className="fas fa-plus-square"></i>
                        </button>
                   </div>
                    
               
                    <div className="select">
                        <select onChange={statusHandler} name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>

                    <span className="alert-text" style={{visibility: alert ? 'visible' : 'hidden'}}>Debe ingresar un valor</span>
                </div>
            </form> 
    )
}

Form.propTypes = {
    setInputText: PropTypes.func,
    inputText : PropTypes.string,
    todos : PropTypes.array,
    setTodos : PropTypes.func,
    setStatus : PropTypes.func
}

export default Form
