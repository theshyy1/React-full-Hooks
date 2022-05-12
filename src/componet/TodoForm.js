import React, { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { v4 as uuidv4} from 'uuid'
import { TodoContext } from '../contexts/TodoContext'
import { ADD_TODO } from '../reducer/types'

const TodoForm = () => {
    //Load context theme
    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark
    
    // Load context todos
    const { dispatch } = useContext(TodoContext)

    const [title, setTitle] = useState('')

    

    // FOr this component
    const onTitleChange = event => {
        setTitle(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: ADD_TODO,
            payload: {
                todo: {
                    id: uuidv4(),
                    title
                }
            }
        })
        setTitle('')
    }
  
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder='Enter a new todo..'
        onChange={onTitleChange}
        value={title}
        required
        />
        <input type="submit" value="Add" style={style}/>
    </form>
  )
}

export default TodoForm