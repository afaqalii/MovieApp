import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { settings } from '../../common/settingForCarousel'
import { getAllMovies, getAllShows, isLoading } from '../../features/movies/movieSlice'
import { MovieCard } from '../AllComponents'
import "./MovieListing.scss"

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
      <div className="movie-list">
        <h2>Movies</h2>
       {loading ? (
            <div className="loader">Loading.....</div>
       ) : ( 
        <div className="movie-container">
           <Slider {...settings}>{renderMovies}</Slider>           
         </div>
       )
      }
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {loading ? (
            <div className="loader">Loading.....</div>
       ) : ( 
        <div className="movie-container">
           <Slider {...settings}>{renderShows}</Slider>
        </div>
       )
      }
      </div>
    </div>
  )
}

export default MovieListing