'use strict';

// Libs
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Style
import '../../scss/MainScreen.scss';

// Components
import Navigation from './Navigation';
import Title from './Title';
import Form from './Form';
import UserList from './UserList';

// Actions
import { addUser, removeUser } from '../actions/userData';

class MainScreen extends React.Component {
  render() {
    const add = bindActionCreators(addUser, this.props.dispatch);
    const remove = bindActionCreators(removeUser, this.props.dispatch);
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        <Title />
        <div className="userBlock">
        <Form handleSubmit={add} />
        <UserList users={this.props.users}
          handleClick={remove} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    socialTabs: state.socialTabs
  }
}

export default connect(mapStateToProps)(MainScreen);
