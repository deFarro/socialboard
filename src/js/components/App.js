'use strict';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';


// Components
import Navigation from './Navigation';
import MainScreen from './MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" render={() => <MainScreen />} />
            <Route path="/twitter" render={() => <Navigation />} />
            <Route path="/facebook" render={() => <Navigation />} />
            <Route path="/instagram" render={() => <Navigation />} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
