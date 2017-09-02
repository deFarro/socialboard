// Actions
import { ADD_USER, INSERT_USER, REMOVE_USER, addUser, insertUser, removeUser } from '../actions/userData';

const initialState = {
  users: [
    {name: 'Nick Svetlov', id: 73958472903, social: 'twitter', data: ''},
    {name: 'Jack de Farro', id: 27382738495, social: 'facebook', data: ''},
    {name: 'Joey Tribbiani', id: 73029493840, social: 'instagram', data: ''}
  ],
  socialTabs: ['twitter', 'facebook', 'instagram'],
  isFetching: false,
  isFull : false
}

const userData = (state = initialState, action) => {
  function mapSocialNets(base, added) {
    const list = base.map(user => user.social);
    if (added) {
      list.push(added);
    }
    return list.filter((social, i, list) => list.indexOf(social) === i);
  }

  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {isFetching: true});

    case INSERT_USER:
      // Check if we already have this user in the list
      if(state.users.filter(user => user.id === action.user.id ? user.social === action.user.social : false).length > 0) {
        return Object.assign({}, state, {isFetching: false});
      }
      return {
        users: [
          ...state.users,
          action.user
        ],
        socialTabs: mapSocialNets(state.users, action.user.social),
        isFetching: false,
        isFull: state.users.length > 8
      }

    case REMOVE_USER:
      const newList = state.users.filter(user => user.id !== action.id ? true : user.social !== action.social)
      return {
        users: newList,
        socialTabs: mapSocialNets(newList),
        isFetching: false,
        isFull: false
      };
    default:
      return state;
  }
}

export default userData;
