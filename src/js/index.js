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

const store = createStore(userData, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
