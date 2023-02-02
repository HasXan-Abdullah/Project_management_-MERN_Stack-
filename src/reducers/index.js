import { combineReducers } from "redux";
import auth from './reducerAuth';
import message from "./reducerMessage";
import project from './reducerProject';
export default combineReducers({
  auth,
  message,
  project,
});
