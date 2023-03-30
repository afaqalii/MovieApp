import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import movieApi from '../../common/apis/movieApi'
import { API_KEY } from '../../common/apis/MovieApiKey'
import produce from "immer"
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
    loading: false,
    searchedMovieInput: ""
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers : { 
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
        },
        SearchMovieInput : (state, {payload}) => {
            return {...state, ...state.searchedMovieInput = payload }
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : (state) => { 
            return produce(state, (draftState) => {
                draftState.loading = true
            })
        } ,
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            return produce(state, (draftState) => {
                draftState.loading = false
                draftState.movie = payload
            }) 
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) => {
            return produce(state, (draftState) => {
                draftState.loading = false
                draftState.shows = payload
            })

        },
        [fetchAsyncShowsAndMovieDetails.fulfilled] : (state, {payload}) => {
            return {...state, selectMovieOrShow: payload}
        },
    }
})

export const {removeSelectedMovieOrShow, } = movieSlice.actions
export const getAllMovies = (state) =>  state.moviesReducer
export const getAllShows = (state) =>  state.moviesReducer
export const getSelectedMovieOrShow = (state) =>  state.moviesReducer
export const isLoading = (state) => state.moviesReducer
export const SearchMovieInput = (state) => state.moviesReducer
export default movieSlice.reducer