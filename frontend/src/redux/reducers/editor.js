import * as actionTypes from "../actionTypes/editor";

const INITIAL_STATE = {
  title: "",
  content: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return INITIAL_STATE;
    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}
