import React from 'react'
import Header from './Header/Header'
import Home from "./Home/Home"
import Footer from "./Footer/Footer"
import PageNotFound from "./PageNotFound/PageNotFound"
import MovieDetail from "./MovieDetail/MovieDetail"
import MovieListing from "./MovieListing/MovieListing"
import MovieCard from "./MovieCard/MovieCard"

const AllComponents = () => {
  return (
    <div>
        <Home/>
        <Header/>
        <Footer/>
        <MovieDetail/>
        <PageNotFound/>
        <MovieListing/>
        <MovieCard/>
    </div>
  )
}

export {Home, Header, Footer, MovieDetail, PageNotFound, MovieListing, MovieCard}