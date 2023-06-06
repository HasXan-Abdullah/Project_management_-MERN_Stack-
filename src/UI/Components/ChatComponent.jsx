import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import hide_emoji from '../../assets/images/hide_emoji.png'
const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open or closed
  const messagesEndRef = useRef(null); // Ref to scroll to the bottom of the messages

  useEffect(() => {
    // Scroll to the bottom of the messages when a new message is added
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const userMessage = { text: inputText, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputText('');

      axios
        .post('https://pm-server.vercel.app/v1/chat', { prompt: inputText })
        .then((response) => {
          const botResponse = response.data;
          const newMessage = { text: botResponse, sender: 'bot' };
          setMessages([...messages, userMessage, newMessage]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div >
  <Button
  variant="contained"
  color="primary"
  onClick={handleModalOpen}
  style={{
    position: 'fixed',
    bottom: '0px',
    right: '80px',
    zIndex: 9999,
    // borderRadius: '50%',
    padding: 0,
    minWidth: '70px',
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    backgroundImage: `url(${hide_emoji})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: 'none',
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    border: 'none',
  
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(0%) ';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(50%)';
  }}
/>


      {/* Modal */}
      <Dialog open={isModalOpen} onClose={handleModalClose} >
        <DialogTitle>Chat with Me</DialogTitle>
        <DialogContent dividers>
          <div style={{ maxHeight: '300px', overflow: 'auto', marginBottom: '20px', padding: '10px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    background: message.sender === 'user' ? '#DCF8C6' : '#ECE5DD',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    maxWidth: '70%',
                  }}
                >
                  <Typography variant="body1" align="left" style={{ wordWrap: 'break-word' }}>
                    {message.text}
                  </Typography>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Ref to scroll to the bottom */}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              label="Type a message"
              value={inputText}
              onChange={handleInputChange}
              style={{ marginRight: '10px' }}
            />
            <Button variant="contained" style={{ backgroundColor: "#64c5b1" }}onClick={handleSendMessage}>
              Send
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined"style={{ borderColor: "#64c5b1" ,color:'#64c5b1'}}onClick={handleModalClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChatComponent;
