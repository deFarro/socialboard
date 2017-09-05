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
import Charts from './Charts';
import UserListOnTabs from './UserListOnTabs';

// Actions
import { removeUser } from '../actions/userData';

const COLORS = ['#FF8080', '#80FFB7', '#C680FF', '#80FFFD', '#FFDD80', '#80D0FF', '#FF80CA', '#D5FF80', '#8097FF', '#FFAE80'];

class DisplayStats extends React.Component {
  render() {
    const remove = bindActionCreators(removeUser, this.props.dispatch);
    const users = this.props.users.filter(user => user.social === this.props.tab);
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        {this.props.socialTabs.indexOf(this.props.tab) >= 0 ?
          <div className="stats">
            <Charts users={users} colors={COLORS}/>
            <div className="fixed">
              <UserListOnTabs users={users} handleClick={remove} colors={COLORS}/>
            </div>
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
