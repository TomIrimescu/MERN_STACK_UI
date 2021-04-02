import clienteAxios from '../config/axios';

import {
  ADD_SONG_ERROR,
  ADD_SONG_START,
  ADD_SONG_SUCCESS,
  DELETE_SONG_ERROR,
  DELETE_SONG_START,
  DELETE_SONG_SUCCESS,
  FETCH_SONGS_ERROR,
  FETCH_SONGS_START,
  FETCH_SONGS_SUCCESS,
  GET_SONG_ERROR,
  GET_SONG_START,
  GET_SONG_SUCCESS
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

export const addSongStart = () => {
  return {
    type: ADD_SONG_START,
  };
};

export const addSongSuccess = (song) => {
  return {
    type: ADD_SONG_SUCCESS,
    payload: song,
  };
};

export const addSongError = () => {
  return {
    type: ADD_SONG_ERROR,
  };
};

export const addSongAction = (song) => {
  return (dispatch) => {
    dispatch(addSongStart());
    clienteAxios
      .post('/songs', song)
      .then((resp) => {
        dispatch(addSongSuccess(song));
      })
      .catch((error) => {
        console.log(error);
        dispatch(addSongError());
      });
  };
};

export const getSongStart = () => {
  return {
    type: GET_SONG_START,
  };
};

export const getSongSuccess = (song) => {
  return {
    type: GET_SONG_SUCCESS,
    payload: song,
  };
};

export const getSongError = () => {
  return {
    type: GET_SONG_ERROR,
  };
};

export const getSongAction = (id) => {
  return (dispatch) => {
    dispatch(getSongStart());
    clienteAxios
      .get(`/songs/${id}`)
      .then((res) => {
        dispatch(getSongSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getSongError());
      });
  };
};
