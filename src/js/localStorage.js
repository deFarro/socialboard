'sue strict';

const saveSate = (state) => {
  try {
    console.log(state);
    const savedState = {
      users: state.users,
      socialTabs: state.socialTabs,
      status: state.users.length > 9 ? 'full' : 'ready'
    };
    const stringState = JSON.stringify(savedState);
    localStorage.setItem('state', stringState);
  }
  catch(err) {
    console.log(err);
    return;
  }
}

const loadState = () => {
  try {
    const state = localStorage.getItem('state');
    if (state === null) {
      return;
    }
    return JSON.parse(state);
  }
  catch(err) {
    console.log(err);
    return;
  }
}

export { saveSate, loadState };
