import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Animes from './pages/Animes'
import { AnimeDetail } from './pages/AnimeDetail'

const App =() => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/animes' element={<Animes/>}/>
          <Route path='/anime/:animeId' element={<AnimeDetail/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
