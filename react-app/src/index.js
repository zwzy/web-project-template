import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.scss';
import App from './containers/App';
import 'lib-flexible';
import * as serviceWorker from './serviceWorker';
// 全局引入antd样式
import 'antd-mobile/dist/antd-mobile.css'; 

// redux 
// init
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// 异步
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger() // redux 运行的轨迹

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
