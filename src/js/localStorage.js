'sue strict';

const saveSate = (state) => {
  try {
    const stingState = JSON.stringify(state);
    localStorage.setItem('state', stingState);
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

export {saveSate, loadState};
