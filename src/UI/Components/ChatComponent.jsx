import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import axios from 'axios';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');

      axios
        .post('https://pm-server.vercel.app/v1/chat', { prompt: inputText })
        .then((response) => {
          const botResponse = response.data;
          setMessages([...messages, { text: botResponse, sender: 'bot' }]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: '10px', marginBottom: '20px' }}>
        {messages.map((message, index) => (
          <Typography
            key={index}
            variant="body1"
            style={{ marginBottom: '10px' }}
            align={message.sender === 'user' ? 'right' : 'left'}
          >
            {message.text}
          </Typography>
        ))}
      </Paper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          label="Type a message"
          value={inputText}
          onChange={handleInputChange}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatComponent;
