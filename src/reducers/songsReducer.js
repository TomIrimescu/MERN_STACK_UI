import {
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_ERROR,
  DELETE_SONG_START,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_ERROR,
  ADD_SONG_START,
  ADD_SONG_SUCCESS,
  ADD_SONG_ERROR
} from '../types';

const initialState = {
  songs: [],
  error: null,
  loading: false,
  song: {}
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_START:
      return {
        ...state,
        loading: true,
        song: {},
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        song: {},
        songs: action.payload,
      };
    case FETCH_SONGS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        song: {},
        songs: []
      };
    case DELETE_SONG_START:
      return {
        ...state,
      };
    case DELETE_SONG_SUCCESS:
      return {
        ...state,
        error: false,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    case DELETE_SONG_ERROR:
      return {
        ...state,
        error: true,
      };
    case ADD_SONG_START:
      return {
        ...state,
        error: null
      };
    case ADD_SONG_SUCCESS:
      return {
        ...state,
        error: false,
        songs: [...state.songs, action.payload],
      };
    case ADD_SONG_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  };
};

export default songsReducer;
