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
} from './types';

import axios from 'axios';

// Create chatroom
export const createChatroom = (chatroom) => async (dispatch) => {
  dispatch({ type: CREATE_CHATROOM_REQUEST });
  try {
    const response = await axios.post('http://localhost:3000/v1/chats/', chatroom);
    dispatch({
      type: CREATE_CHATROOM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CHATROOM_FAILURE,
      payload: error.response.data,
    });
  }
};

// Get all chatrooms
export const getAllChatrooms = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CHATROOMS_REQUEST });
  try {
    const response = await axios.get('http://localhost:3000/v1/chats/');
    dispatch({
      type: GET_ALL_CHATROOMS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CHATROOMS_FAILURE,
      payload: error.response.data,
    });
  }
};

// Get chatroom by id
export const getChatroomById = (chatroomId) => async (dispatch) => {
  dispatch({ type: GET_CHATROOM_BY_ID_REQUEST });
  try {
    const response = await axios.get(`http://localhost:3000/v1/chats/${chatroomId}`);
    dispatch({
      type: GET_CHATROOM_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CHATROOM_BY_ID_FAILURE,
      payload: error.response.data,
    });
  }
};

// Add message to chatroom
export const addMessageToChatroom = (chatroomId, message) => async (dispatch) => {
  dispatch({ type: ADD_MESSAGE_TO_CHATROOM_REQUEST });
  try {
    const response = await axios.post(`http://localhost:3000/v1/chats/${chatroomId}/message`, message);
    dispatch({
      type: ADD_MESSAGE_TO_CHATROOM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_MESSAGE_TO_CHATROOM_FAILURE,
      payload: error.response.data,
    });
  }
};

