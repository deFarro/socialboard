'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/UserList.scss';

const UserListOnTabs = ({users, active, handleRemove, handleToggle}) => {
  return (
    <div className="userList social">
      <h3>Users added</h3>
      <ul>
        {users.map((user, i) => <li key={i} className="social">
            <span><i className="fa fa-square" aria-hidden="true" style={{color: user.color}}></i></span>
            <span className={active[i] ? 'show' : 'crossed'} onClick={() => handleToggle(i)}>{user.name}</span>
            <span className="delete" onClick={() => {
              handleToggle(i, null, true);
              handleRemove({id: user.id, social: user.social});
            }}>&#10007;</span>
          </li>)
        }
      </ul>
      <div className={active.indexOf(false) >= 0 ? 'show_reset' : 'hide_reset' }>
        <button className="reset" onClick={() => handleToggle(null, true)}>RESET</button>
      </div>
    </div>
  );
}

UserListOnTabs.propTypes = {
  users: PropTypes.array.isRequired,
  active: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default UserListOnTabs;
