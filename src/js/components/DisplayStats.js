'use strict';

// Libs
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

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

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class DisplayStats extends React.Component {
  constructor(props) {
    super();
    const active = new Array(props.users.filter(user => user.social === props.tab).length).fill(true);
    this.state = {
      active
    }
  }
  // Method for manipulate active users on chart tabs
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
  // Generate list of 12 months from current to past (needed for line chart)
  componentWillMount() {
    const monthSet = [];
    const currentMonth = new Date().getMonth();
    for (let i = 1; i <= 12 ; i++) {
      const index = (currentMonth + i > 11) ? (currentMonth + i - 12) : (currentMonth + i);
      monthSet.push(MONTHS[index]);
    }
    this.months = monthSet;
  }
  // Ugly way to hide reset button animation on the first render
  componentDidMount() {
    if (document.querySelector('.hide_reset')) {
      document.querySelector('.hide_reset').classList.add('preload');
      setTimeout(() => {document.querySelector('.hide_reset').classList.remove('preload');}, 500);
    }
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
            <Charts users={users.filter((user, i) => this.state.active[i])} months={this.months}/>
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

DisplayStats.propTypes = {
  tab: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(DisplayStats);
