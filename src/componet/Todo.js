import React,{ useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const Todos = () => {
    
    //Load context Todo
    const {todos} = useContext(TodoContext)

    //Load Authen context 
    const {IsAuthenticated} = useContext(AuthContext)
    
    const style = {
        fontSize: '20px',
        textAlign: 'center'
    }
    
    return (
        <div className="todo-list">
            <TodoForm />
            {IsAuthenticated ? (
                <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>  
            ) : <p style={style}>Not Authorised</p>}
        </div>
    )
}

export default Todos