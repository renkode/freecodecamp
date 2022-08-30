const defaultState = {
  login: false
};

// reducer's only job is to return a new state
// it must be a PURE function
const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === 'LOGIN') {
    return { login: true };
  } else {
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

// action creator
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};