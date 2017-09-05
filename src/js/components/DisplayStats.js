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
  constructor(props) {
    super();
    const active = new Array(props.users.filter(user => user.social === props.tab).length).fill(true);
    this.state = {
      active
    }
  }
  // If second argument is passed function resets all selections
  // If third argument is passed user is deleted
  toggleUser(index, all, deleted) {
    const active = [...this.state.active];
    if (all) {
      active.fill(true);
    }
    else if (deleted) {
      active.splice(index, 1);
    }
    else {
      active[index] = !active[index];
    }
    this.setState({active});
  }
  render() {
    const remove = bindActionCreators(removeUser, this.props.dispatch);
    const users = this.props.users.filter(user => user.social === this.props.tab)
      .map((user, i) => {
        user.color = COLORS[i];
        return user;
      });
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        {this.props.socialTabs.indexOf(this.props.tab) >= 0 ?
          <div className="stats">
            <Charts users={users.filter((user, i) => this.state.active[i])}/>
            <div className="fixed">
              <UserListOnTabs users={users} active={this.state.active} handleRemove={remove} handleToggle={this.toggleUser.bind(this)}/>
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
