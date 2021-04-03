import clientAxios from '../config/axios';
import {
  ADD_MOVIE_ERROR,
  ADD_MOVIE_START,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_ERROR,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_START,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS
} from '../types';

export const fetchMoviesStart = () => {
  return {
    type: FETCH_MOVIES_START,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesError = () => {
  return {
    type: FETCH_MOVIES_ERROR,
  };
};

export const fetchMoviesAction = () => {
  return (dispatch) => {
    dispatch(fetchMoviesStart());
    clientAxios
      .get('/movies')
      .then((resp) => {
        dispatch(fetchMoviesSuccess(resp.data.docs));
      })
      .catch((error) => {
        dispatch(fetchMoviesError);
      });
  };
};

export const deleteMovieStart = () => {
  return {
    type: DELETE_MOVIE_START,
  };
};

export const deleteMovieSuccess = (id) => {
  return {
    type: DELETE_MOVIE_SUCCESS,
    payload: id,
  };
};

export const deleteMovieError = () => {
  return {
    type: DELETE_MOVIE_ERROR,
  };
};
export const deleteMovieAction = (id) => {
  return (dispatch) => {
    dispatch(deleteMovieStart());
    clientAxios
      .delete(`/movies/${id}`)
      .then(() => {
        dispatch(deleteMovieSuccess(id));
      })
      .catch((error) => {
        console.log(error);
        dispatch(deleteMovieError());
      });
  };
};

export const addMovieStart = () => {
  return {
    type: ADD_MOVIE_START,
  };
};

export const addMovieSuccess = (movie) => {
  return {
    type: ADD_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const addMovieError = () => {
  return {
    type: ADD_MOVIE_ERROR,
  };
};

export const addMovieAction = (movie) => {
  return (dispatch) => {
    dispatch(addMovieStart());
    clientAxios
      .post('/movies', movie)
      .then((res) => {
        console.log(res);
        dispatch(addMovieSuccess(res.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(addMovieError());
      });
  };
};

export const getMovieStart = () => {
  return {
    type: GET_MOVIE_START,
  };
};

export const getMovieSuccess = (movie) => {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const getMovieError = () => {
  return {
    type: GET_MOVIE_ERROR,
  };
};

export const getMovieAction = (id) => {
  return (dispatch) => {
    dispatch(getMovieStart());
    clientAxios
      .get(`/movies/${id}`)
      .then((res) => {
        dispatch(getMovieSuccess(res.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getMovieError());
      });
  };
};

export const editMovieStart = () => {
  return {
    type: EDIT_MOVIE_START,
  };
};

export const editMovieSuccess = (movie) => {
  return {
    type: EDIT_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const editMovieError = () => {
  return {
    type: EDIT_MOVIE_ERROR,
  };
};

export const editMovieAction = (movie) => {
  return (dispatch) => {
    dispatch(editMovieStart());
    clientAxios
      .put(`/movies/${movie._id}`, { title: movie.title, url: movie.url, rating: movie.rating })
      .then((res) => {
        dispatch(editMovieSuccess(res.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(editMovieError());
      });
  };
};
