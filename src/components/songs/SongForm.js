import React from 'react';

const SongForm = () => {
  const submitForm = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return <div className="row justify-content-center mt-5">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold ">New Song</h2>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control  "
                placeholder="Song Title"
                name="title"
              />
            </div>
            <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                className="form-control  "
                placeholder="Song URL"
                name="url"
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                className="form-control  "
                placeholder="Song Rating"
                name="rating"
              />
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
