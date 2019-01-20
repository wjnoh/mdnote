// import

// action types

const SET_NOTES = "editor/GET_NOTES";

// action creators

function setNotes(payload) {
  return {
    type: SET_NOTES,
    payload
  };
}

// api actions

function getNotes() {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/notes")
      .then(res => res.json())
      .then(json => dispatch(setNotes(json)));
  };
}

// initial state

const initialState = {
  notes: {},
  loaded: false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTES:
      return applySetNotes(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetNotes(state, action) {
  return {
    ...state,
    notes: action.payload,
    loaded: true
  };
}

// export action creators

export const actionCreators = {
  getNotes
};

// export reducer by default

export default reducer;
