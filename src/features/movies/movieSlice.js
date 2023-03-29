import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import movieApi from '../../common/apis/movieApi'
import { API_KEY } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", 
    async (term) => {
        const response = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=movie`)
        return response.data
    }
)
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows", 
    async (term) => {
        const response = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=series`)
        return response.data
    }
)
export const fetchAsyncShowsAndMovieDetails = createAsyncThunk(
    "movies/fetchAsyncShowsAndMovieDetails", 
    async (id) => {
        const response = await movieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`)
        return response.data
    }
)

const initialState = {
    movie: {},
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers : { 
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () => { 
             console.log("pending")
        } ,
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
              console.log("fetched Successfully!")
              return {...state, movie: payload}
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) => {
            return {...state, shows: payload}
        },
        [fetchAsyncShowsAndMovieDetails.fulfilled] : (state, {payload}) => {
            return {...state, selectMovieOrShow: payload}
        },
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) =>  state.moviesReducer
export const getAllShows = (state) =>  state.moviesReducer
export const getSelectedMovieOrShow = (state) =>  state.moviesReducer
export default movieSlice.reducer