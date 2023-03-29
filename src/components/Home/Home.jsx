import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { MovieListing } from '../AllComponents'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
       dispatch(fetchAsyncMovies())
       dispatch(fetchAsyncShows())     
  }, [dispatch])
  
  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home