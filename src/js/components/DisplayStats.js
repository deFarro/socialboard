'use strict';

// Libs
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Style
import '../../scss/DisplayStats.scss';

// Components
import Navigation from './Navigation';
import NoStatsAvailable from './NoStatsAvailable';
import UserList from './UserList';

// Actions
import { removeUser } from '../actions/userData';

class DisplayStats extends React.Component {
  render() {
    console.log(this.props);
    const remove = bindActionCreators(removeUser, this.props.dispatch);
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        {this.props.socialTabs.indexOf(this.props.tab) >= 0 ?
          <div className="stats">
            <div className="charts"></div>
            <UserList users={this.props.users} handleClick={remove} filter={this.props.tab} />
          </div> :
          <NoStatsAvailable />
        }
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
