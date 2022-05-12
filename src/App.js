import Navbar from './componet/Navbar'
import Todos from './componet/Todo';
import ThemeContextProvider  from './contexts/ThemeContext'
import ThemeToggle from './componet/ThemeToggle'
import TodoContextProvider from './contexts/TodoContext'
import AuthContextProvider from './contexts/AuthContext'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
           <Todos />
         </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
