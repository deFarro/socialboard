'use strict';

// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Components
import App from './components/App';

// Reducer
import userData from './reducers/userData';

// localStorage functions
import {saveSate, loadState} from './localStorage';

const savedState = loadState();

const store = createStore(userData,
  savedState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => saveSate(store.getState()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
