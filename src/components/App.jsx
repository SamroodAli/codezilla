import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './Courses';
import VideoShow from './VideoShow';
import BaseWeb from './BaseWeb';

const App = () => (
  <BrowserRouter>
    <BaseWeb>
      <Switch>
        <Route exact path="/" component={Courses} />
        <Route path="/:id" component={VideoShow} />
      </Switch>
    </BaseWeb>
  </BrowserRouter>
);

export default App;
