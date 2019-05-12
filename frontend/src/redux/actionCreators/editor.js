import * as actionTypes from "../actionTypes/editor";

export function initialize() {
  return {
    type: actionTypes.INITIALIZE
  };
}

export function changeInput(payload) {
  return {
    type: actionTypes.CHANGE_INPUT,
    payload
  };
}
