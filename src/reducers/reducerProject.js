import {
   PROJECT_CREATED
  } from "../actions/types";
  

  
  const initialState = {
    projects: [],
    loading: false,
    error: null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
    //   case "POST_TODO_REQUEST":
    //     return {
    //       ...state,
    //       loading: true,
    //       error: null
    //     };
      case PROJECT_CREATED:
        return {
          ...state,
          projects: [...state.projects, action.projects],
          loading: false,
          error: null
        };
    //   case "POST_TODO_FAILURE":
    //     return {
    //       ...state,
    //       loading: false,
    //       error: action.error
    //     };
      default:
        return state;
    }
  };
  
 
  