import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import VideoList from './VideosList';
import VideoShow from './VideoShow';
import history from '../history';

const App = () => (
  <Router history={history}>
    <SearchBar />
    <Switch>
      <Route exact path="/" component={VideoList} />
      <Route path="/:id" component={VideoShow} />
    </Switch>
  </Router>
);

export default App;
