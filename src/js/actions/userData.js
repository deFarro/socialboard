const ADD_USER = 'add_user';
const INSERT_USER = 'insert_user';
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

const removeUser = ({id, social}) => {
  return {
    type: REMOVE_USER,
    social,
    id
  }
}

export { ADD_USER, INSERT_USER, REMOVE_USER, addUser, insertUser, removeUser };
