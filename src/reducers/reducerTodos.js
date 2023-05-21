import {
  GET_TODOS_BY_ID_SUCCESS,
  GET_TODOS_BY_ID_FAILURE,
  GET_TODOS_SUCCESS,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE,
  UPDATE_TODOS_REQUEST,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODOS_FAILURE,
} from "../actions/types";

const initialState = {
  todoss: [],
  loading: false,
  error: null,
  todos: [],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_BY_ID_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case GET_TODOS_BY_ID_FAILURE:
      return {
        ...state,
        todos: {},
        loading: false,
        error: action.payload,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case ADD_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
        error: null,
      };
    case ADD_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_TODOS_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload.id),
        loading: false,
        error: null,
      };
    case DELETE_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_TODOS_SUCCESS:
      const updatedTodosIndex = state.todos.findIndex((todo) => todo._id === action.payload);
      const updatedTodos = [...state.todos];
      updatedTodos[updatedTodosIndex] = action.payload;
      return {
        ...state,
        todos: updatedTodos,
        loading: false,
        error: null,
      };
    case UPDATE_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
