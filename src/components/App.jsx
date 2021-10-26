import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import VideoList from './VideosList';
import VideoShow from './VideoShow';

const App = () => (
  <div>
    <Router>
      <SearchBar />
      <Switch>
        <Route exact="/" component={VideoList} />
        <Route path="/:id" component={VideoShow} />
      </Switch>
    </Router>
  </div>
);

export default App;
