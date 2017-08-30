'use strict';

// Libs
import React from 'react';
import {NavLink} from 'react-router-dom';

// Style
import '../../scss/Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink exact to="/">ADD USER</NavLink>
        <NavLink to="/twitter">Twitter</NavLink>
        <NavLink to="/facebook">Facebook</NavLink>
        <NavLink to="/instagram">Instagram</NavLink>
      </nav>
    );
  }
}

export default Navigation;
