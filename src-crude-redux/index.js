import React from 'react';

import { createStore } from 'redux';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import postReducer from './reducers/postReducer';
const store = createStore(postReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));



if (module.hot) {
  module.hot.accept();
}
