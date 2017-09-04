const ADD_USER = 'add_user';
const INSERT_USER = 'insert_user';
const ERROR_FETCH = 'error_fetch';
const RESET_STATUS = 'reset_status'
const REMOVE_USER = 'remove_user';

const addUser = ({id, social}) => {
  return {
    type: ADD_USER,
    social,
    id
  }
}

const insertUser = (user) => {
  return {
    type: INSERT_USER,
    user
  }
}

const errorFetch = () => {
  return {
    type: ERROR_FETCH
  }
}

const resetStatus = () => {
  return {
    type: RESET_STATUS
  }
}

const removeUser = ({id, social}) => {
  return {
    type: REMOVE_USER,
    social,
    id
  }
}

export {
  ADD_USER, ERROR_FETCH, RESET_STATUS, INSERT_USER, REMOVE_USER,
  addUser, errorFetch, resetStatus, insertUser, removeUser
};
