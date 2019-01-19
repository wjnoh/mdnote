// import

// action types

const INITIALIZE = "editor/INITIALIZE";
const CHANGE_INPUT = "editor/CHANGE_INPUT";

// action creators

function initialize() {
  return {
    type: INITIALIZE
  };
}

function changeInput(payload) {
  return {
    type: CHANGE_INPUT,
    payload
  };
}

// api actions

// initial state

const initialState = {
  title: "",
  content: ""
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return applyInitialize(state, action);
    case CHANGE_INPUT:
      return applyChangeInput(state, action);
    default:
      return state;
  }
}

// reducer functions

function applyInitialize(state, action) {
  return initialState;
}

function applyChangeInput(state, action) {
  return {
    ...state,
    [action.payload.name]: action.payload.value
  };
}

// export action creators

export const actionCreators = {
  initialize,
  changeInput
};

// export reducer by default

export default reducer;
