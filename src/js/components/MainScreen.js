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
import { addUser, insertUser, removeUser } from '../actions/userData';

// AJAX
import getFetchedData from '../ajax';

class MainScreen extends React.Component {
  fetchUser({id, social}) {
    this.props.dispatch(addUser({id, social}));
    getFetchedData({id, social}, (user) => this.props.dispatch(insertUser(user)));
  }
  render() {
    const add = bindActionCreators(addUser, this.props.dispatch);
    const remove = bindActionCreators(removeUser, this.props.dispatch);
    return (
      <div>
        <Navigation active={this.props.socialTabs} />
        <Title />
        <div className="userBlock">
        <Form handleSubmit={this.fetchUser.bind(this)} isFetching={this.props.isFetching} />
        <UserList users={this.props.users}
          handleClick={remove} />
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
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(MainScreen);
