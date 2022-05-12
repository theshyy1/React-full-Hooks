import React,{ createContext, useReducer , useEffect } from "react";
import { todoReducer } from "../reducer/TodoReducer";
import {GET_TODOS} from '../reducer/types'
import {SAVE_TODOS} from '../reducer/types'




export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    // Started
    // const [todos, setTodos] = useState([])
    const [todos, dispatch] = useReducer(todoReducer, [])


    // useEffect
    useEffect(() => {
        dispatch({
            type : GET_TODOS,
            payload: null
        }) 
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: {todos} 
        })
    }, [todos])
    

    const todoContextData = {
        todos,
        dispatch
    }

    // return 
    return (
    <TodoContext.Provider value={todoContextData}>
        {children}</TodoContext.Provider>
    )
}

export default TodoContextProvider