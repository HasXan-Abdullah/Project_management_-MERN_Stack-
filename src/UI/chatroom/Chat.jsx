import { useState, useEffect, useRef } from 'react';
import io from "socket.io-client";
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socketRef = useRef();

    useEffect(() => {
        // connect to the server's socket
        socketRef.current = io.connect('http://localhost:3001');

        // listen for incoming messages
        socketRef.current.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
        });

        // disconnect from the server's socket when component unmounts
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendMessage = () => {
        // send message to the server's socket
        socketRef.current.emit('message', newMessage);
        setNewMessage('');
    };
console.log(messages)
    return (
        <div className='mt-5'>
          
            <div className='mt-5'>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div >
            <div className='mt-5'>
                {messages.map((message, index) => (
                    <div key={index}>
                        <span>{message.sender}: </span>
                        <span>{message.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat