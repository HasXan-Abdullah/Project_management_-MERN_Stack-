import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input, TextField } from '@mui/material';
import UploadBtn from '../../board_teamLeader/leader_components/postFormComps/UploadBtn';
import TextArea from '../../board_teamLeader/leader_components/postFormComps/TextArea';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Notify from "./Notify";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  m: 0,
  borderRadius:'20px'
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SubModal = ({ data, pid}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [comment, setComment] = useState();
  const [documentFile, setDocumentFile] = useState();
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  const [openNoti, setOpenNoti] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleFileUpload = ({ base64 }) => {
    setDocumentFile(base64);
  };
  const handleCloseNoti = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false)
    setOpenNoti(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      taskname: data?.taskname,
      taskdescription: data?.taskdescription,
      givento: {
          value: data?.givento.value,
          label: data?.givento.label,
        },
      taskstatus: data?.taskstatus,
      taskinstructionfile:data?.taskinstructionfile,
      submissionfile: data?.submissionfile||documentFile,
      submitcomment: comment,

    };
console.log(updatedTask)
    const apiUrl = `https://pm-server.vercel.app/v1/projects/${pid}/tasks/${data._id}`;

    axios
      .patch(apiUrl, updatedTask) 
      .then((response) => {
       
        console.log(response.data);
        handleClose();
        setOpenNoti(true);
        
      })
      .catch((error) => {
        setOpenAlert(true);
        console.log(error);
        alert("Failed to update task. Please try again.");
      });
      
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: '#64c5b1' }}>
        Submit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.taskname}
          </Typography>
          <p id="modal-modal-description" style={{ marginTop: 2 }}>
            {data.taskdescription}
          </p>
          <UploadBtn value={documentFile} onDone={handleFileUpload} />
          <TextArea
            tasklabel="Comments"
            placeholder="Any comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{ mt: 2 }}
          />
          <br/>
          <div className='row text-center mt-4'>
            <div className='col'>
              <Button style={{ color: '#64c5b1' }} onClick={handleClose} sx={{ mt: 2 }}>
                Close
              </Button>
            </div>
            <div className='col'>
             
              <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant='contained' style={{ backgroundColor: '#64c5b1' }} onClick={handleSubmit} sx={{ mt: 2 }}>
                Submit
              </Button>
     
   
   
      </Stack>
            </div>
          </div>
        </Box>
      </Modal>
      <Snackbar open={openNoti} autoHideDuration={6000} onClose={handleCloseNoti}>
          <Alert onClose={handleCloseNoti} severity="success" sx={{ width: '100%' }}>
            Task Submitted Successful
          </Alert>
         
        </Snackbar>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseNoti}>

        <Alert onClose={handleCloseNoti} severity="error" sx={{ width: '100%' }}>
            Task Not Submitted
          </Alert>
          </Snackbar>
    </div>
  );
};

export default SubModal;
