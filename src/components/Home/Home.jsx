import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { MovieListing } from '../AllComponents'

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "harry"
  const ShowText = "friends"
  useEffect(() => {
       dispatch(fetchAsyncMovies(movieText))
       dispatch(fetchAsyncShows(FileReader))     
  }, [dispatch])
  
  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home