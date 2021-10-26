import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'theme-ui';
import redux from './redux';
import theme from './theme';
import App from './components/App';

ReactDOM.render(
  <Provider store={redux.store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
