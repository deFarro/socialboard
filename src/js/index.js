'use strict';

// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import App from './components/App';

// Reducer
import userData from './reducers/userData';

// localStorage functions
import {saveSate, loadState} from './localStorage';

const savedState = loadState();

const store = createStore(userData,
//  savedState,
  window.devToolsExtension && window.devToolsExtension()
);

store.subscribe(() => saveSate(store.getState()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
