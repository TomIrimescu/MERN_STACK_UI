import {
  ADD_MOVIE_START,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  EDIT_MOVIE_ERROR,
  EDIT_MOVIE_START,
  EDIT_MOVIE_SUCCESS,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_START,
  GET_MOVIE_ERROR,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_START
} from '../types';

const initialState = {
  movies: [],
  error: null,
  loading: false,
  movie: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_START:
      return {
        ...state,
        error: null,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movies: [...state.movies, action.payload],
      };
    case ADD_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    case DELETE_MOVIE_START:
      return {
        ...state,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case DELETE_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    case EDIT_MOVIE_START:
      return {
        ...state,
        error: null,
      };
    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? (movie = action.payload) : movie
        ),
      };
    case EDIT_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    case FETCH_MOVIES_START:
      return {
        ...state,
        loading: true,
        movie: {},
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: false,
        movie: {},
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        movies: [],
        loading: false,
        error: true,
        movie: {},
      };
    case GET_MOVIE_START:
      return {
        ...state,
        error: null,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movie: action.payload,
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
