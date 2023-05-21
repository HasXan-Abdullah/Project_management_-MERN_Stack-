import { combineReducers } from "redux";
import auth from './reducerAuth';
import message from "./reducerMessage";
import project from './reducerProject';
import member from './reducerUser';
import todos from './reducerTodos';
export default combineReducers({
  auth,
  message,
  project,
  member,
  todos,
});
