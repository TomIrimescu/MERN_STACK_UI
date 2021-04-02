import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Movies from './components/movies/Movies';
import MovieForm from './components/movies/MovieForm';
import Songs from './components/songs/Songs';
import SongForm from './components/songs/SongForm';

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className="container">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/edit/:id" component={MovieForm} />
            <Route exact path="/movies/new" component={MovieForm} />
            <Route exact path="/songs" component={Songs} />
            <Route exact path="/songs/edit/:id" component={SongForm} />
            <Route exact path="/songs/new" component={SongForm} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
