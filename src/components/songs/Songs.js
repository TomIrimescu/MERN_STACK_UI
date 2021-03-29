import React from 'react';

const Songs = () => {
  return (
    <div>
      <h2 className="text-center">Songs</h2>
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
          <tr>
            <td>Faded by Alan Walker</td>
            <td>http://youtube.com</td>
            <td>5</td>
            <td>
              <button className="btn btn-outline-info px-4">Edit</button>
              <button className="btn btn-outline-danger ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Songs;