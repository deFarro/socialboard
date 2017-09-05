'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/UserList.scss';

const UserListOnTabs = ({users, handleClick, colors}) => {
  return (
    <div className="userList social">
      <h3>Users added</h3>
      <ul>
        {users.map((user, i) => <li key={i} className="social">
            <span><i className="fa fa-square" aria-hidden="true" style={{color: colors[i]}}></i></span>
            <span>{user.name}</span>
            <span className="delete" onClick={handleClick.bind(null, {id: user.id, social: user.social})}>&#10007;</span>
          </li>)
        }
      </ul>
    </div>
  );
}

UserListOnTabs.propTypes = {
  users: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired
}

export default UserListOnTabs;
