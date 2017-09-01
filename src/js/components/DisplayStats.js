'use strict';

// Libs
import React from 'react';
import { connect } from 'react-redux';

// Style
import '../../scss/DisplayStats.scss';

// Components
import Navigation from './Navigation';
import NoStatsAvailable from './NoStatsAvailable';

class DisplayStats extends React.Component {
  render() {
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        <NoStatsAvailable />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    socialTabs: state.socialTabs
  }
}

export default connect(mapStateToProps)(DisplayStats);
