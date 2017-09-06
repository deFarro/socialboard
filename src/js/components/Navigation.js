'use strict';

// Libs
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/Navigation.scss';

const Navigation = ({active}) => {
  // Check what tabs have content
  let tabShown = {
    twitter: 'emty',
    facebook: 'emty',
    instagram: 'emty'
  };
  for (let tab of active) {
    tabShown[tab] = tab;
  }
  return (
    <nav className="navigation">
      <NavLink exact to="/" activeClassName="active">ADD USER</NavLink>
      <NavLink to="/twitter" className={tabShown.twitter} activeClassName={'active ' + tabShown.twitter}>Twitter</NavLink>
      <NavLink to="/facebook" className={tabShown.facebook} activeClassName={'active ' + tabShown.facebook}>Facebook</NavLink>
      <NavLink to="/instagram" className={tabShown.instagram} activeClassName={'active ' + tabShown.instagram}>Instagram</NavLink>
    </nav>
  );
}

Navigation.propTypes = {
  active: PropTypes.array.isRequired
}

export default Navigation;
