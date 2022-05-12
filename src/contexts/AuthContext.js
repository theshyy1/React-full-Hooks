import React, { createContext, useReducer, useEffect } from 'react'
import { authReducer} from '../reducer/AuthReducer'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    // State 
    // const [IsAuthenticated, setAuthentication] = useState(false)

    // const toggleAuth = () => {
    //     setAuthentication(!IsAuthenticated)
    // }

    const [IsAuthenticated, dispatch] = useReducer(authReducer,false)


    //useEffect
    useEffect(() => {
        alert(IsAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see the todos')
    },[IsAuthenticated])

    //Data 
    const AuthenContextData = {
        IsAuthenticated,
        dispatch
    }

    // Return 
    return (
        <AuthContext.Provider value={AuthenContextData}>
            {children}</AuthContext.Provider>
    )
    
}

export default AuthContextProvider