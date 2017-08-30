'use strict';

// Libs
import React from 'react';

// Style
import '../../scss/UserList.scss';

const UserList = ({users, handleClick}) => {
  return (
    <div className="userList">
      <h3>Users added</h3>
      <ul>
        {users.map((user, i) => <li key={i}>
          <span>{user.name}</span>
          <span>id:{user.id}</span>
          <span className='delete' onClick={handleClick}>&#10007;</span>
        </li>)}
      </ul>
    </div>
  );
}

export default UserList;
