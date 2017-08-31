const ADD_USER = 'add_user';
const REMOVE_USER = 'remove_user';

const addUser = ({social, id}) => {
  return {
    type: ADD_USER,
    social,
    id
  }
}

const removeUser = ({social, id}) => {
  return {
    type: REMOVE_USER,
    social,
    id
  }
}

export { ADD_USER, REMOVE_USER, addUser, removeUser };
