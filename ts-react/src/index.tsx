import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { config } from './reducers/index';
import { IStoreState } from './types/index';

import * as actions from './actions';
import registerServiceWorker from './registerServiceWorker';
const store = createStore<IStoreState, actions.ConfigAction,any,any>(config, {
  theme: 'light',
});
ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
