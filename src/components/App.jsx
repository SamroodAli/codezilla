import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoList from './VideosList';
import VideoShow from './VideoShow';
import BaseWeb from './BaseWeb';

const App = () => (
  <BrowserRouter>
    <BaseWeb>
      <Switch>
        <Route exact path="/" component={VideoList} />
        <Route path="/:id" component={VideoShow} />
      </Switch>
    </BaseWeb>
  </BrowserRouter>
);

export default App;
