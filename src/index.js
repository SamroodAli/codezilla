import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import redux from './redux';
import App from './components/App';

const debug = process.env.NODE_ENV === 'production' ? undefined : new DebugEngine();
const engine = new Styletron();

ReactDOM.render(
  <Provider store={redux.store}>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <App />
    </StyletronProvider>
  </Provider>,
  document.getElementById('root'),
);
