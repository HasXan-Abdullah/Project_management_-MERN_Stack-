// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3303');

// const ChatRoom = ({ username }) => {
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);

//     const messageListRef = useRef(null);

//     useEffect(() => {
//         socket.on('message', (message) => {
//             setMessages([...messages, message]);
//             console.log(message)
//         });
//     }, [messages]);

//     const sendMessage = () => {
//         if (message.trim() !== '') {
//             const newMessage = {
//                 username,
//                 text: message.trim(),
//             };

//             socket.emit('sendMessage', newMessage);

//             setMessages([...messages, newMessage]);
//             setMessage('');
//         }
//     };

//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             sendMessage();
//         }
//     };

//     useEffect(() => {
//         if (messageListRef.current) {
//             messageListRef.current.scrollTo({
//                 top: messageListRef.current.scrollHeight,
//                 behavior: 'smooth',
//             });
//         }
//     }, [messages]);

//     return (
//         <div>
//             <h1>Chat Room</h1>

//             <div ref={messageListRef} style={{ height: '400px', overflowY: 'scroll' }}>
//                 {messages.map((message, index) => (
//                     <div key={index}>
//                         <strong>{message.username}: </strong>
//                         <span>{message.text}</span>
//                     </div>
//                 ))}
//             </div>

//             <input
//                 type="text"
//                 placeholder="Type your message"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 onKeyPress={handleKeyPress}
//             />

//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };

// export default ChatRoom;