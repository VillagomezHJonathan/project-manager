import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/routes/Register'
import Login from './components/routes/Login'
import Home from './components/routes/Home'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Project manager</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>      
    </div>
  )
}

export default App
