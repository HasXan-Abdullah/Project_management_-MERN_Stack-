import { combineReducers } from "redux";
import auth from './reducerAuth';
import message from "./reducerMessage";
import project from './reducerProject';
import member from './reducerUser';
export default combineReducers({
  auth,
  message,
  project,
  member,
});
