import {

  GET_MEMBER_SUCCESS,
  GET_MEMBER_FAILURE,
} from "../actions/types";

const initialState = {
  members: [],
  loading: false,
  error: null,
  member: {},
};

export default function memberReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBER_SUCCESS:
      return {
        ...state,
        members: action.payload,
        loading: false,
        error: null,
      };

    case GET_MEMBER_FAILURE:
      return {
        ...state,
        members: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
