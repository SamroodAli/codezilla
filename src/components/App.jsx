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
        <Route path="/:id" component={VideoShow} />
        <Route exact path="/" component={VideoList} />
      </Switch>
    </Router>
  </div>
);

export default App;
