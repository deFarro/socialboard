'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/UserList.scss';

const UserList = ({users, handleClick, filter}) => {
  return (
    <div className={filter === 'all' ? 'userList' : 'userList social'}>
      <h3>Users added</h3>
      <ul>
        {users.filter(user => filter === 'all' ? true : user.social === filter)
          .map((user, i) => <li key={i} className={filter === 'all' ? '' : 'social'}>
            <span><i className={'fa fa-' + user.social} aria-hidden="true"></i></span>
            <span>{user.name}</span>
            {filter === 'all' ? <span>id: {user.id}</span> : null}
            <span className="delete" onClick={handleClick.bind(null, {id: user.id, social: user.social})}>&#10007;</span>
          </li>)
        }
      </ul>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default UserList;
