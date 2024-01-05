import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Animes from './pages/Animes'

const App =() => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/animes' element={<Animes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
