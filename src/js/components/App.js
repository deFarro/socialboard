'use strict';

// Libs
import React from 'react';
import PropTypes from 'prop-types';
// I'd rather use BrowserRouter, but it demands server side setup to avoid 404 errors on refresh
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';


// Components
import Navigation from './Navigation';
import MainScreen from './MainScreen';
import DisplayStats from './DisplayStats';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route exact path="/" render={() => <MainScreen />} />
            <Route path="/twitter" render={() => <DisplayStats tab={'twitter'} />} />
            <Route path="/facebook" render={() => <DisplayStats tab={'facebook'} />} />
            <Route path="/instagram" render={() => <DisplayStats tab={'instagram'} />} />
          </div>
        </HashRouter>
      </div>
    )
  }
}
