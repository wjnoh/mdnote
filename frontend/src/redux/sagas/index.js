import { spawn, put, takeEvery, select } from "redux-saga/effects";
import * as noteActionCreators from "../actionCreators/note";
import * as noteActionTypes from "../actionTypes/note";
import axios from "axios";

function* fetchNotesSagas() {
  try {
    const { data } = yield axios.get("http://localhost:4000/notes");
    yield put(noteActionCreators.fetchNotesFulfilled(data));
  } catch (error) {
    yield put(noteActionCreators.fetchNotesRejected(error.response));
  }
}

function* fetchAddNoteSagas() {
  const state = yield select();
  try {
    const { data } = yield axios.post("http://localhost:4000/notes", {
      title: state.editor.title,
      content: state.editor.content
    });
    yield put(noteActionCreators.fetchAddNoteFulfilled(data));
  } catch (error) {
    yield put(noteActionCreators.fetchAddNoteRejected(error.response));
  }
}

function* watchNotes() {
  yield takeEvery(noteActionTypes.FETCH_NOTES, fetchNotesSagas);
  yield takeEvery(noteActionTypes.FETCH_ADD_NOTE, fetchAddNoteSagas);
}

export default function* root() {
  yield spawn(watchNotes);
}
