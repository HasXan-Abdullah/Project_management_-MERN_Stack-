import {
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAILURE,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  SET_MESSAGE,
} from "../actions/types";
import ProjectService from "../services/ProjectService";
//get by project id

export const getProjectById = (id) => (dispatch) => {
  return ProjectService.get_project_Id(id).then(
    (response) => {
      dispatch({
        type: GET_PROJECT_BY_ID_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_PROJECT_BY_ID_FAILURE,
      });

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


//get projects
export const getProjects = () => (dispatch) => {
  return ProjectService.get_projects().then(
    (response) => {
      
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: response.data,
      });
    },
    (error) => {
      dispatch({
        type: GET_PROJECTS_FAILURE,
        payload: error.message,
      });
    }
  );
};
// Add project
export const add_project = (project) => {
  return (dispatch) => {
    dispatch({ type: ADD_PROJECT_REQUEST });

    return ProjectService.add_project(project).then(
      (response) => {
        dispatch({
          type: ADD_PROJECT_SUCCESS,
          payload: response.data.project,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve(response.data.project);
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: ADD_PROJECT_FAILURE,
          payload: message,
        });
        return Promise.reject(message);
      }
    );
  };
};

// Delete project
export const deleteProject = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    return ProjectService.deleteProject(id).then(
      (response) => {
        dispatch({
          type: DELETE_PROJECT_SUCCESS,
          payload: { id: id },
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
          type: DELETE_PROJECT_FAILURE,
          payload: message,
        });
        return Promise.reject(message);
      }
    );
  };
};

// Update project
export const updateProject = (id, project) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PROJECT_REQUEST, });

    return ProjectService.updateProject(id, project).then(
      (response) => {
        dispatch({
          type: UPDATE_PROJECT_SUCCESS,
          payload: response.data.project,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve(response.data.project);
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: UPDATE_PROJECT_FAILURE,
          payload: message,
        });
        return Promise.reject(message);
      }
    );
  };
};
