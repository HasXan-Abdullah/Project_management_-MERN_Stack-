import {
  CREATE_CHATROOM_REQUEST,
  CREATE_CHATROOM_SUCCESS,
  CREATE_CHATROOM_FAILURE,
  GET_ALL_CHATROOMS_REQUEST,
  GET_ALL_CHATROOMS_SUCCESS,
  GET_ALL_CHATROOMS_FAILURE,
  GET_CHATROOM_BY_ID_REQUEST,
  GET_CHATROOM_BY_ID_SUCCESS,
  GET_CHATROOM_BY_ID_FAILURE,
  ADD_MESSAGE_TO_CHATROOM_REQUEST,
  ADD_MESSAGE_TO_CHATROOM_SUCCESS,
  ADD_MESSAGE_TO_CHATROOM_FAILURE,
} from '../actions/chatActionTypes';

const initialState = {
  chatrooms: [],
  loading: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHATROOM_REQUEST:
    case GET_ALL_CHATROOMS_REQUEST:
    case GET_CHATROOM_BY_ID_REQUEST:
    case ADD_MESSAGE_TO_CHATROOM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_CHATROOM_SUCCESS:
      return {
        ...state,
        chatrooms: [...state.chatrooms, action.payload],
        loading: false,
        error: null,
      };
    case GET_ALL_CHATROOMS_SUCCESS:
      return {
        ...state,
        chatrooms: action.payload,
        loading: false,
        error: null,
      };
    case GET_CHATROOM_BY_ID_SUCCESS:
      const updatedChatrooms = state.chatrooms.map((chatroom) =>
        chatroom._id === action.payload._id ? action.payload : chatroom
      );
      return {
        ...state,
        chatrooms: updatedChatrooms,
        loading: false,
        error: null,
      };
    case ADD_MESSAGE_TO_CHATROOM_SUCCESS:
      const chatroomId = action.payload._id;
      const updatedChatroomsWithNewMessage = state.chatrooms.map((chatroom) =>
        chatroom._id === chatroomId
          ? { ...chatroom, messages: [...chatroom.messages, action.payload.messages] }
          : chatroom
      );
      return {
        ...state,
        chatrooms: updatedChatroomsWithNewMessage,
        loading: false,
        error: null,
      };
    case CREATE_CHATROOM_FAILURE:
    case GET_ALL_CHATROOMS_FAILURE:
    case GET_CHATROOM_BY_ID_FAILURE:
    case ADD_MESSAGE_TO_CHATROOM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
