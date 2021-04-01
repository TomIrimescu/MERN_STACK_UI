import clienteAxios from '../config/axios';

import {
  DELETE_SONG_ERROR,
  DELETE_SONG_START,
  DELETE_SONG_SUCCESS,
  FETCH_SONGS_ERROR,
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS
} from '../types';


export const fetchSongsStart = () => {
  return {
    type: FETCH_SONGS_START,
  };
};

export const fetchSongsSuccess = (songs) => {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: songs,
  };
};

export const fetchSongsError = () => {
  return {
    type: FETCH_SONGS_ERROR,
  };
};

export const fetchSongsAction = () => {
  return (dispatch) => {
    dispatch(fetchSongsStart());

    clienteAxios
      .get('/songs')
      .then((resp) => {
        console.log(resp);
        dispatch(fetchSongsSuccess(resp.data));
      })
      .catch((error) => {
        dispatch(fetchSongsError);
      });
  };
};

export const deleteSongStart = () => {
  return {
    type: DELETE_SONG_START,
  };
};

export const deleteSongSuccess = (id) => {
  return {
    type: DELETE_SONG_SUCCESS,
    payload: id,
  };
};

export const deleteSongError = () => {
  return {
    type: DELETE_SONG_ERROR,
  };
};

export const deleteSongAction = (id) => {
  return (dispatch) => {
    dispatch(deleteSongStart());
    clienteAxios
      .delete(`/songs/${id}`)
      .then((resp) => {
        dispatch(deleteSongSuccess(id));
      })
      .catch((error) => {
        console.log(error);
        dispatch(deleteSongError());
      });
  };
};
