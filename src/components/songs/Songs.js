import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSongsAction } from '../../actions/songsActions';
import Spinner from '../spinner/Spinner';

const Songs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsAction());
  }, [dispatch]);

  const loading = useSelector((state) => state.songs.loading);
  const songs = useSelector((state) => state.songs.songs);
  const error = useSelector((state) => state.songs.error);

  return (
    <>
      {error ? (
        <div className="font-wight-bold alert alert-danger text-center mt-5">
          Something went wrong
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
      <div style={{ margin: '10px' }}>
        <Link className="btn btn-info" to="/songs/new">
          Add Song
        </Link>
        <h2 className="text-center">Songs</h2>
      </div>
      <table className="table table-striped .table-hover shadow text-center">
        <thead className="bg-info table-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">Rating</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.url}</td>
              <td>{song.rating}</td>
              <td>
                <button className="btn btn-outline-info px-4" >Edit</button>
                <button className="btn btn-outline-danger ml-2" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Songs;