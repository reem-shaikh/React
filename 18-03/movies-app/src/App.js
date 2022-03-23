import Header from './components/Header'
import Container from '@mui/material/Container'
import MovieCard from './components/MovieCard'
import SearchList from './components/SesrchList'
import Home from './routes/Home'
import Search from './routes/Search'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
