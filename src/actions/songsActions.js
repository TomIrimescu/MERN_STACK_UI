import clienteAxios from '../config/axios';

import {
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