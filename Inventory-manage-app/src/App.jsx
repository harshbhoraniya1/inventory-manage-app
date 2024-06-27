import './App.css'
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
