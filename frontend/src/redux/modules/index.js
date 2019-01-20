import { combineReducers } from "redux";
import editor from "./editor";
import note from "./note";

export default combineReducers({ editor, note });
