import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows, isLoading } from '../../features/movies/movieSlice'
import { MovieCard } from '../AllComponents'
import "./MovieListing.scss"
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const MovieListing = () => {
  const {movie} = useSelector(getAllMovies)
  const {shows} = useSelector(getAllShows)
  const {loading} = useSelector(isLoading)
  let renderMovies, renderShows = "";
  renderMovies = 
     movie.Response === "True" ? (  
       movie.Search.map((movie, index) => ( 
        <MovieCard key={index} data={movie}/>
       ))
     ) : ( 
      <div className="movies-error">
        <h3>An error occur please try again later</h3>
      </div>
     )
     renderShows = 
     shows.Response === "True" ? (  
       shows.Search.map((shows, index) => ( 
        <MovieCard key={index} data={shows}/>
       ))
     ) : ( 
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
     )
  return (
    <div className='movie-wrapper'>
      <swiper-container loop="true" css-mode="true"  slides-per-view="3" speed="500">
      <div className="movie-list">
        <h2>Movies</h2>
        <swiper-slide>
       {loading ? (
            <div className="loader">Loading.....</div>
       ) : ( 
        <div className="movie-container">{renderMovies}</div>
       )
      }
      </swiper-slide>
      </div>
      </swiper-container>
      <div className="show-list">
        <h2>Shows</h2>
        {loading ? (
            <div className="loader">Loading.....</div>
       ) : ( 
        <div className="movie-container">{renderShows}</div>
       )
      }
      </div>
    </div>
  )
}

export default MovieListing