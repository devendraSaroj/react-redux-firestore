import { combineReducers } from "redux";
import firebaseReducers from "./firebaseReducers";

export default combineReducers({
  firebase: firebaseReducers,
});
