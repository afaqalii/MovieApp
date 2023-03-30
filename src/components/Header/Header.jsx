import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import {FaSearch} from "react-icons/fa"
import Logo from "../../assets/HeaderLogo.png"
import "./Header.scss"

const Header = () => {
  
  const [term, setTerm ] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    if(term === "") return alert("Please enter a value in the searchbox:)")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")

  }
  return (
    <div className='header'>
      <div className="logo">
      <Link to="/feed">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder='Search Movies or Shows' onChange={e => setTerm(e.target.value)} />
          <button><FaSearch/></button>
        </form>
      </div>
      <div className="user-image">
        <img src={Logo} />
      </div>
    </div>
  )
}

export default Header