// Actions
import {
  ADD_USER, ERROR_FETCH, RESET_STATUS, INSERT_USER, REMOVE_USER,
  addUser, errorFetch, resetStatus, insertUser, removeUser
} from '../actions/userData';

const initialState = {
  users: [
    {name: 'Nick Svetlov', id: 73958472903, social: 'twitter', data: ''},
    {name: 'Jack de Farro', id: 27382738495, social: 'facebook', data: ''},
    {name: 'Joey Tribbiani', id: 73029493840, social: 'instagram', data: ''}
  ],
  socialTabs: ['twitter', 'facebook', 'instagram'],
  status: 'ready'
}

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {status: 'searching'});

    case ERROR_FETCH:
      return Object.assign({}, state, {status: 'error'});

    case RESET_STATUS:
      return Object.assign({}, state, {status: 'ready'});

    case INSERT_USER:
      // Check if we already have this user in the list
      if(state.users.filter(user => user.id === action.user.id ? user.social === action.user.social : false).length > 0) {
        return Object.assign({}, state, {status: 'ready'});
      }
      return {
        users: [
          ...state.users,
          action.user
        ],
        socialTabs: mapSocialNets(state.users, action.user.social),
        status: state.users.length > 8 ? 'full' : 'ready'
      }

    case REMOVE_USER:
      const newList = state.users.filter(user => user.id !== action.id ? true : user.social !== action.social)
      return {
        users: newList,
        socialTabs: mapSocialNets(newList),
        status: 'ready'
      };
    default:
      return state;
  }
}

// Function to track what social networks we have in user list
function mapSocialNets(base, added) {
  const list = base.map(user => user.social);
  if (added) {
    list.push(added);
  }
  return list.filter((social, i, list) => list.indexOf(social) === i);
}

export default userData;
