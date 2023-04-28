import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createChatroom, addMessageToChatroom, getChatroomById } from '../../actions/chatroom';

const Chatroom = () => {
    const [chatName, setChatName] = useState('');
    const [chatDescription, setChatDescription] = useState('');
    const [messageText, setMessageText] = useState('');

    const dispatch = useDispatch();

    const chatroomState = useSelector((state) => state.chatroom);
    const { chatroom, loading, error } = chatroomState;

    useEffect(() => {
        // Join chatroom socket
        if (chatroom) {
            // Code to join socket and listen for messages
        }
    }, [chatroom]);

    const handleCreateChatroom = () => {
        dispatch(createChatroom({ name: chatName, description: chatDescription }));
    };

    const handleSendMessage = () => {
        dispatch(addMessageToChatroom(chatroom._id, { text: messageText }));
        setMessageText('');
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {chatroom && (
                <>
                    <h1>{chatroom.name}</h1>
                    <p>{chatroom.description}</p>
                    <ul>
                        {chatroom.messages.map((message) => (
                            <li key={message._id}>
                                <strong>{message.user.name}: </strong>
                                {message.text}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </>
            )}
            {!chatroom && (
                <>
                    <h1>Create a new chat room</h1>
                    <div>
                        <label htmlFor="chatName">Name:</label>
                        <input type="text" id="chatName" value={chatName} onChange={(e) => setChatName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="chatDescription">Description:</label>
                        <input
                            type="text"
                            id="chatDescription"
                            value={chatDescription}
                            onChange={(e) => setChatDescription(e.target.value)}
                        />
                    </div>
                    <button onClick={handleCreateChatroom}>Create</button>
                </>
            )}
        </div>
    );
};

export default Chatroom;