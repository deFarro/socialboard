'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/UserList.scss';

const UserList = ({users, handleRemove}) => {
  return (
    <div className="userList">
      <h3>Users added</h3>
      <ul>
        {users.map((user, i) => <li key={i}>
            <span><i className={'fa fa-' + user.social} aria-hidden="true"></i></span>
            <span>{user.name}</span>
            <span>id: {user.id}</span>
            <span className="delete" onClick={() => {handleRemove({id: user.id, social: user.social})}}>&#10007;</span>
          </li>)
        }
      </ul>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default UserList;
