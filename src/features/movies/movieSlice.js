import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import movieApi from '../../common/apis/movieApi'
import { API_KEY } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", 
    async () => {
        const term = "harry"
        const response = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=movie`)
        return response.data
    }
)
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows", 
    async () => {
        const term = "Friends"
        const response = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=series`)
        return response.data
    }
)

const initialState = {
    movie: {},
    shows: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers : {
        addMovies: (state, {payload}) => {
            state.movie = payload
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
    }
})

export const {addMovies} = movieSlice.actions
export const getAllMovies = (state) =>  state.moviesReducer
export const getAllShows = (state) =>  state.moviesReducer
export default movieSlice.reducer