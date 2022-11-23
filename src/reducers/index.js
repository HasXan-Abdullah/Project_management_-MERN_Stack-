import { combineReducers } from "redux";
import auth from './reducerAuth';
import message from "./reducerMessage";

export default combineReducers({
  auth,
  message,
});
