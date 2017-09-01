'use strict';

// Libs
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Style
import '../../scss/NoStatsAvailable.scss';

const NoStatsAvailable = () => {
  return (
    <div className="info">
      <p>No stats available. Please add users of this social network on the main page first.</p>
      <Link to="/">GO BACK</Link>
    </div>
  );
}

export default NoStatsAvailable;
