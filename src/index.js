import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import redux from './state';
import App from './components/App';

ReactDOM.render(
  <Provider store={redux.store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
