import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows, SearchMovieInput } from '../../features/movies/movieSlice';
import { MovieListing } from '../AllComponents'

const Home = () => {
  const dispatch = useDispatch();
  const {searchedMovieInput} = useSelector(SearchMovieInput)
  var movieText = "harry"
  var ShowText = "Cars"
  console.log(searchedMovieInput)
  useEffect(() => {
       dispatch(fetchAsyncMovies(movieText))
       dispatch(fetchAsyncShows(ShowText))     
  }, [dispatch])
  
  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home