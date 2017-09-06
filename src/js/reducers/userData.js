// Actions
import {
  ADD_USER, ERROR_FETCH, RESET_STATUS, INSERT_USER, REMOVE_USER,
  addUser, errorFetch, resetStatus, insertUser, removeUser
} from '../actions/userData';

const initialState = {
  users: [
    {name: 'Stan Marsh', id: 73958472903, social: 'twitter', posts: 65, friends: 1859, likes: 1164 , comments: 340, reposts: 214, postsInLastMonth: 3 , postsInLastWeek: 9, postsMap: [13, 9, 13, 17, 5, 15, 12, 20, 3, 17, 3, 9]},
    {name: 'Kyle Broflovski', id: 27382738495, social: 'twitter', posts: 265, friends: 859, likes: 224 , comments: 140, reposts: 54, postsInLastMonth: 15 , postsInLastWeek: 2, postsMap: [13, 6, 10, 5, 18, 16, 1, 2, 9, 6, 15, 2]},
    {name: 'Eric Cartman', id: 73029493840, social: 'twitter', posts: 165, friends: 59, likes: 90 , comments: 1140, reposts: 23, postsInLastMonth: 11 , postsInLastWeek: 1, postsMap: [3, 19, 1, 17, 19, 6, 8, 14, 18, 12, 11, 1]},
    {name: 'Kenny McCormick', id: 234353465464, social: 'twitter', posts: 650, friends: 2159, likes: 264 , comments: 340, reposts: 204, postsInLastMonth: 2 , postsInLastWeek: 10, postsMap: [18, 2, 17, 9, 17, 4, 5, 6, 13, 13, 2, 10]},
    {name: 'Leopold Stotch', id: 43453558495, social: 'twitter', posts: 25, friends: 9, likes: 125 , comments: 1340, reposts: 9, postsInLastMonth: 12 , postsInLastWeek: 1, postsMap: [5, 3, 5, 16, 8, 1, 11, 5, 14, 7, 12, 1]},
    {name: 'Wendy Testaburger', id: 345364433, social: 'twitter', posts: 1165, friends: 2342, likes: 1423 , comments: 3040, reposts: 302, postsInLastMonth: 12 , postsInLastWeek: 5, postsMap: [15, 7, 7, 2, 3, 1, 2, 10, 18, 14, 12, 5]},
    {name: 'Tweek Tweak', id: 534545343443, social: 'twitter', posts: 125, friends: 324, likes: 922 , comments: 1222, reposts: 354, postsInLastMonth: 1 , postsInLastWeek: 1, postsMap: [15, 20, 17, 5, 15, 18, 2, 18, 9, 18, 1, 1]},
    {name: 'Token Black', id: 12343534556, social: 'facebook', posts: 895, friends: 2345, likes: 764 , comments: 1340, reposts: 324, postsInLastMonth: 10 , postsInLastWeek: 12, postsMap: [4, 15, 13, 5, 15, 1, 20, 2, 8, 4, 10, 12]},
    {name: 'Craig Tucker', id: 3413454545, social: 'facebook', posts: 2065, friends: 5913, likes: 3453 , comments: 2460, reposts: 213, postsInLastMonth: 8 , postsInLastWeek: 5, postsMap: [14, 10, 5, 17, 2, 13, 7, 3, 4, 5, 8, 5]}
  ],
  socialTabs: ['twitter', 'facebook'],
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
      console.log(action.user);
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
