import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from '../containers/Courses';
import VideoShow from './VideoShow';
import BaseWeb from '../containers/BaseWeb';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <BaseWeb>
      <Switch>
        <Route path="/courses/:id" component={VideoShow} />
        <Route path="/courses" component={Courses} />
        <Route path="/" component={Home} />
      </Switch>
    </BaseWeb>
  </BrowserRouter>
);

export default App;
