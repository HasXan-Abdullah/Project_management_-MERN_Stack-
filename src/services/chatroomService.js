
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/v1/chats';

const chatService = {
  createChatRoom: async (chatroomData) => {
    const response = await axios.post(BASE_URL, chatroomData);
    return response.data;
  },

  getAllChatRooms: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },

  getChatRoomById: async (chatroomId) => {
    const response = await axios.get(`${BASE_URL}/${chatroomId}`);
    return response.data;
  },

  addMessageToChatRoom: async (chatroomId, messageData) => {
    const response = await axios.post(`${BASE_URL}/${chatroomId}/message`, messageData);
    return response.data;
  },
};

export default chatService;
