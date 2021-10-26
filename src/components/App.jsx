import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import VideoList from './VideosList';
import VideoShow from './VideoShow';
import history from '../history';

const App = () => (
  <div>
    <Router history={history}>
      <SearchBar />
      <Switch>
        <Route exact="/" component={VideoList} />
        <Route path="/:id" component={VideoShow} />
      </Switch>
    </Router>
  </div>
);

export default App;
