import ProjectService from "../services/ProjectService";
import { PROJECT_CREATED, PROJECT_DELETED,SET_MESSAGE} from "./types";

export const addproject =
  (
    project_name,
    project_description,
    memberId1,
    memberId2,
    memberId3,
    leaderId
  ) =>
  (dispatch) => {
    return ProjectService.add_project(
      project_name,
      project_description,
      memberId1,
      memberId2,
      memberId3,
      leaderId
    ).then(
      (response) => {
        dispatch({
          type: PROJECT_CREATED,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: PROJECT_DELETED,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };