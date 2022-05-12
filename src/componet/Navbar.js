import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'
import { TOGGLE_AUTH} from '../reducer/types'
const Navbar = () => {

    //Load theme contxt
    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark

    //Load Auth context
    const {IsAuthenticated, dispatch} = useContext(AuthContext)

    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {IsAuthenticated ? 'You are logged in'   : ''}
                    <button onClick={() => {
                        dispatch({
                            type: TOGGLE_AUTH
                        })
                    }}>
                    {IsAuthenticated ? 'Logout' : 'Login'}
                    </button>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar