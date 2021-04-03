// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  addSongAction,
  getSongAction,

} from 'actions/songsActions';

const SongForm = ({ history, match }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const song = useSelector((state) => state.songs.song);
  const [title, setTitle] = useState('New Song');

  useEffect(() => {
    if (match.params.id) {
      setTitle('Edit Song');
      dispatch(getSongAction(+match.params.id));
    }
  }, [dispatch, match.params.id]);

  const submitForm = (data) => {
    if (match.params.id) {
      dispatch(getSongAction({ ...data, id: +match.params.id }));
      history.push('/songs');
    } else {
      dispatch(addSongAction(data));
      history.push('/songs');
    }
  };

  return <div className="row justify-content-center mt-5">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold ">{title}</h2>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control form-control-font"
                placeholder="Song Title"
                name="title"
                ref={register({ required: true })}
                defaultValue={song.title}
              />
              {errors.title && (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  A title is required
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                className="form-control form-control-font"
                placeholder="Song URL"
                name="url"
                ref={register({ required: true })}
                defaultValue={song.url}
              />
              {errors.url && (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  A url is required
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                className="form-control form-control-font"
                placeholder="Song Rating"
                name="rating"
                ref={register({ required: true })}
                defaultValue={song.rating}
              />
              {errors.rating && (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  A rating is required
                </div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100"
            >
              Save
          </button>
          </form>
        </div>
      </div>
    </div>
  </div>;
};

export default SongForm;
