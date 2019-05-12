import * as actionTypes from "../actionTypes/note";

const INITIAL_STATE = {
  notes: [],
  showError: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_NOTES_FULFILLED:
      return {
        ...state,
        notes: action.payload
      };
    case actionTypes.FETCH_NOTES_REJECTED:
      return {
        ...state,
        showError: true,
        error: action.error
      };
    case actionTypes.FETCH_ADD_NOTE_FULFILLED:
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      };
    case actionTypes.FETCH_ADD_NOTE_REJECTED:
      return {
        ...state,
        showError: true,
        error: action.error
      };
    default:
      return state;
  }
}
