import * as actionTypes from "../actionTypes/note";

export function fetchNotes() {
  return {
    type: actionTypes.FETCH_NOTES
  };
}

export function fetchNotesFulfilled(payload) {
  return {
    type: actionTypes.FETCH_NOTES_FULFILLED,
    payload
  };
}

export function fetchNotesRejected(error) {
  return {
    type: actionTypes.FETCH_NOTES_REJECTED,
    error
  };
}

export function fetchAddNote() {
  return {
    type: actionTypes.FETCH_ADD_NOTE
  };
}

export function fetchAddNoteFulfilled(payload) {
  return {
    type: actionTypes.FETCH_ADD_NOTE_FULFILLED,
    payload
  };
}

export function fetchAddNoteRejected(error) {
  return {
    type: actionTypes.FETCH_ADD_NOTE_REJECTED,
    error
  };
}
