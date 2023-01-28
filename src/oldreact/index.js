import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'; //higher order Component that wraps the application.
import { configureStore } from "@reduxjs/toolkit";
import './index.css';
import rootReducers from './reducers'; //reconstructed by combine reducers.

//Our global store, with THUNK arg.
const store = configureStore({ reducer: rootReducers} );

console.log('store',store);
console.log('store.getState()', store.getState());

0//No need for console.log statements when store changes.
store.subscribe(() => console.log("store.getState()",store.getState()));

//store is provided to the Provider wrapper.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));