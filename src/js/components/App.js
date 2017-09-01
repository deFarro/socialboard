'use strict';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';


// Components
import Navigation from './Navigation';
import MainScreen from './MainScreen';
import DisplayStats from './DisplayStats';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" render={() => <MainScreen />} />
            <Route path="/twitter" render={() => <DisplayStats />} />
            <Route path="/facebook" render={() => <DisplayStats />} />
            <Route path="/instagram" render={() => <DisplayStats />} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
