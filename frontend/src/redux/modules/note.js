// import

// action types

const SET_NOTES = "editor/GET_NOTES";
const ADD_NOTE = "editor/ADD_NOTE";

// action creators

function setNotes(payload) {
  return {
    type: SET_NOTES,
    payload
  };
}

function doAddNote(payload) {
  return {
    type: ADD_NOTE,
    payload
  };
}

// api actions

function getNotes() {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/notes")
      .then(res => res.json())
      .then(json => dispatch(setNotes(json)))
      .catch(error => console.log(error));
  };
}

function addNote(payload) {
  return (dispatch, getState) => {
    fetch("http://localhost:4000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => dispatch(doAddNote(json)))
      .catch(error => console.log(error));
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
    case ADD_NOTE:
      return applyDoAaddNote(state, action);
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

function applyDoAaddNote(state, action) {
  return {
    ...state,
    notes: [...state.notes, action.payload]
  };
}

// export action creators

export const actionCreators = {
  getNotes,
  addNote
};

// export reducer by default

export default reducer;
