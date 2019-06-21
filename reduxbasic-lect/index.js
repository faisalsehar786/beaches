import React from 'react';

import { createStore, applyMiddleware } from 'redux';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('root'));
