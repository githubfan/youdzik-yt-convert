import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { YtProvider } from './provider/YtProvider';

ReactDOM.render(
  <YtProvider>
    <App />
  </YtProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
