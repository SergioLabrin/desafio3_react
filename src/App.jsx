
import './App.css'
import {NavLink,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Character from './pages/Character'
import  './index.css'
import Characters from './pages/Characters'
import Login from './pages/Login'





function App() {
  
  return (
    <>
    <nav>
        <ul>
          <li><NavLink className={({isActive})=>(isActive ? "isActive":null)} to ="/" >Home</NavLink></li>
          <li><NavLink className={({isActive})=>(isActive ? "isActive":null)} to ="/personajes" >personaje</NavLink></li>
          <li><NavLink className={({isActive})=>(isActive ? "isActive":null)} to ="/login" >login</NavLink></li>
        </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/personajes" element={<Character/>}/>
      <Route path="/personajes/:id" element={<Characters/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
    </>
  )
}

export default App
