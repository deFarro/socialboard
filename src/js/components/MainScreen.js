'use strict';

// Libs
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/MainScreen.scss';

// Components
import Navigation from './Navigation';
import Title from './Title';
import Form from './Form';
import UserList from './UserList';

// Actions
import { getUserData, removeUser } from '../actions/userData';

const MainScreen = ({dispatch, users, socialTabs, status}) => {
  const add = bindActionCreators(getUserData, dispatch)
  const remove = bindActionCreators(removeUser, dispatch);
  return (
    <div>
      <Navigation active={socialTabs} />
      <Title />
      <div className="userBlock">
        <Form handleSubmit={add} status={status} />
        <UserList users={users} handleRemove={remove} />
      </div>
    </div>
  );
}

MainScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  socialTabs: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired
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
