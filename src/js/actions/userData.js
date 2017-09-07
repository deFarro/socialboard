// AJAX
import getFetchedData from '../ajax';

const ADD_USER = 'add_user';
const INSERT_USER = 'insert_user';
const ERROR_FETCH = 'error_fetch';
const RESET_STATUS = 'reset_status'
const REMOVE_USER = 'remove_user';

const addUser = ({id, social}) => {
  return {
    type: ADD_USER,
    id,
    social
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
    id,
    social
  }
}

// Thunk for async data fetching. Used setTimeout to imitate network delay
const getUserData = ({id, social}) => {
  return (dispatch, getState) => {
    dispatch(addUser({id, social}));
    if (getState().status === "duplication") {
      setTimeout(() => {
        dispatch(resetStatus());
      }, 1500);
    }
    else {
      setTimeout(() => {
        getFetchedData({id, social}).then(
          response => {
            if (response instanceof Error) {
              dispatch(errorFetch());
              setTimeout(() => {
                dispatch(resetStatus());
              }, 1500);
            }
            else {
              dispatch(insertUser(response));
            }
          }
        )
      }, 1500);
    }
  }
}

export {
  ADD_USER, ERROR_FETCH, RESET_STATUS, INSERT_USER, REMOVE_USER,
  addUser, errorFetch, resetStatus, insertUser, removeUser,
  getUserData
};
