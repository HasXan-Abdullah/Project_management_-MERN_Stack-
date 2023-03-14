import {
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAILURE,
  GET_PROJECTS_SUCCESS,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
} from "../actions/types";

const initialState = {
  projects: [],
  loading: false,
  error: null,
  project:{},
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_BY_ID_SUCCESS:
      return {
        ...state,
        project: action.payload,
        loading: false,
        error: null,
      };
    case GET_PROJECT_BY_ID_FAILURE:
      return {
        ...state,
        project: {},
        loading: false,
        error: action.payload,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: null,
      };
    case ADD_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        loading: false,
        error: null,
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload.id
        ),
        loading: false,
        error: null,
      };
    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_PROJECT_SUCCESS:
      const updatedProjectIndex = state.projects.findIndex(
        (project) => project.id === action.payload
      );
      const updatedProjects = [...state.projects];
      updatedProjects[updatedProjectIndex] = action.payload;
      return {
        ...state,
        projects: updatedProjects,
        loading: false,
        error: null,
      };
    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
