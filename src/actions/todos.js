import {
    GET_TODOS_BY_ID_SUCCESS,
    GET_TODOS_BY_ID_FAILURE,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    ADD_TODOS_REQUEST,
    ADD_TODOS_SUCCESS,
    ADD_TODOS_FAILURE,
    DELETE_TODOS_REQUEST,
    DELETE_TODOS_SUCCESS,
    DELETE_TODOS_FAILURE,
    UPDATE_TODOS_REQUEST,
    UPDATE_TODOS_SUCCESS,
    UPDATE_TODOS_FAILURE,
    SET_MESSAGE,
  } from "../actions/types";
import TodosService from "../services/TodosService";
  

// get todos by id


export const getTodosById = (id) => (dispatch) => {
    return TodosService.get_todos_Id(id).then(
      (response) => {
        dispatch({
          type: GET_TODOS_BY_ID_SUCCESS,
          payload: response.data,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: GET_TODOS_BY_ID_FAILURE,
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
  
  
  //get todoss
  export const getTodos = () => (dispatch) => {
    return TodosService.get_todos().then(
      (response) => {
        
        dispatch({
          type: GET_TODOS_SUCCESS,
          payload: response.data,
        });
      },
      (error) => {
        dispatch({
          type: GET_TODOS_FAILURE,
          payload: error.message,
        });
      }
    );
  };
  // Add todos
  export const add_todos = (todos) => {
    return (dispatch) => {
      dispatch({ type: ADD_TODOS_REQUEST });
  
      return TodosService.add_todos(todos).then(
        (response) => {
          dispatch({
            type: ADD_TODOS_SUCCESS,
            payload: response.data.todos,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });
          return Promise.resolve(response.data.todos);
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          dispatch({
            type: ADD_TODOS_FAILURE,
            payload: message,
          });
          return Promise.reject(message);
        }
      );
    };
  };
  
  // Delete todos
  export const deleteTodos = (id) => {
    return (dispatch) => {
      dispatch({ type: DELETE_TODOS_REQUEST });
  
      return TodosService.deletetodos(id).then(
        (response) => {
          dispatch({
            type: DELETE_TODOS_SUCCESS,
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
            type: DELETE_TODOS_FAILURE,
            payload: message,
          });
          return Promise.reject(message);
        }
      );
    };
  };
  
  // Update todos
  export const updateTodos = (id, todos) => {
    return (dispatch) => {
      dispatch({ type: UPDATE_TODOS_REQUEST, });
  
      return TodosService.updatetodos(id, todos).then(
        (response) => {
          dispatch({
            type: UPDATE_TODOS_SUCCESS,
            payload: response.data.todos,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });
          return Promise.resolve(response.data.todos);
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          dispatch({
            type: UPDATE_TODOS_FAILURE,
            payload: message,
          });
          return Promise.reject(message);
        }
      );
    };
  };
  