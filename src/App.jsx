import './App.scss'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import { Footer, Header, Home, MovieDetail, PageNotFound } from './components/AllComponents'
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
       <div className="container">
      <Routes>
         <Route path='/feed' element={<Home/>} />
         <Route path='/feed/movie/:imdbID' element={<MovieDetail/>} />
         <Route path="*" element={<PageNotFound/>} />
      </Routes>
       </div>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
