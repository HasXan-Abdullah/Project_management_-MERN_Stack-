import {
  DELETE_PROJECT_SUCCESS,
   PROJECT_CREATED
  } from "../actions/types";
  

  
  const initialState = {
    projects: [],
    loading: false,
    error: null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case PROJECT_CREATED:
        return {
          ...state,
          projects: [...state.projects, action.projects],
          loading: false,
          error: null,
        };
      case DELETE_PROJECT_SUCCESS:
        return {
          ...state,
          loading: false,
          error:null,
          deletedProjectId: action.payload.projectId,
        };
      default:
        return state;
    }
  };
  
 
  