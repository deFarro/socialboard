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
import { addUser, errorFetch, resetStatus, insertUser, removeUser } from '../actions/userData';

// AJAX
import getFetchedData from '../ajax';

class MainScreen extends React.Component {
  fetchUser({id, social}) {
    this.props.dispatch(addUser({id, social}));
    getFetchedData({id, social}, response => {
      if (response instanceof Error) {
        this.props.dispatch(errorFetch());
        setTimeout(() => {
          this.props.dispatch(resetStatus());
        }, 1500);
      }
      else {
        this.props.dispatch(insertUser(response));
      }
    });
  }
  render() {
    const remove = bindActionCreators(removeUser, this.props.dispatch);
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        <Title />
        <div className="userBlock">
          <Form handleSubmit={this.fetchUser.bind(this)} status={this.props.status} />
          <UserList users={this.props.users} handleClick={remove} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dispatch: state.dispatch,
    users: state.users,
    socialTabs: state.socialTabs,
    status: state.status
  }
}

export default connect(mapStateToProps)(MainScreen);
