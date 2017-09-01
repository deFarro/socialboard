// Actions
import { ADD_USER, REMOVE_USER, addUser, removeUser} from '../actions/userData';

const initialState = {
  users: [
    {name: 'Nick Svetlov', id: 73958472903, social: 'twitter', data: ''},
    {name: 'Jack de Farro', id: 27382738495, social: 'facebook', data: ''},
    {name: 'Joey Tribbiani', id: 73029493840, social: 'instagram', data: ''}
  ],
  socialTabs: ['twitter', 'facebook', 'instagram']
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
      // Check if we already have this user in the list
      if(state.users.filter(user => user.id === action.id ? user.social === action.social : false).length > 0) {
        return state;
      }
      return {
        users: [
          ...state.users,
          {name: 'Test', id: action.id, social: action.social, data: ''}
        ],
        socialTabs: mapSocialNets(state.users, action.social)
      }
    case REMOVE_USER:
      const newList = state.users.filter(user => user.id !== action.id ? true : user.social !== action.social)
      return {
        users: newList,
        socialTabs: mapSocialNets(newList)
      };
    default:
      return state;
  }
}

export default userData;
