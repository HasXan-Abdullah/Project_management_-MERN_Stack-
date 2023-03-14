import UserService from "../services/UserService";
import { GET_MEMBER_FAILURE, GET_MEMBER_SUCCESS, GET_PROJECTS_SUCCESS } from "./types";

//get teamMembers
export const getTeamMembers = () => (dispatch) => {
  return UserService.getTeamMembers().then(
    (response) => {
      dispatch({
        type: GET_MEMBER_SUCCESS,
        payload: response.data,
      });
    },
    (error) => {
      dispatch({
        type: GET_MEMBER_FAILURE,
        payload: error.message,
      });
    }
  );
};
