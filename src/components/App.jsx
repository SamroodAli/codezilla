import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import VideoList from './VideosList';
import VideoShow from './VideoShow';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={VideoList} />
      <Route path="/:id" component={VideoShow} />
    </Switch>
  </BrowserRouter>
);

export default App;
