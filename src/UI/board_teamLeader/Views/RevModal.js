import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import axios from 'axios';
import TextArea from '../leader_components/postFormComps/TextArea';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    m: 0,
    borderRadius: '20px'
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const RevModal = ({task,pid}) => {

    const [open, setOpen] = React.useState(false);

    const [openNoti, setOpenNoti] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [taskstatus,setTaskstatus] =useState(task ? task.taskstatus :'')
    const [review,setReview] = useState(task ? task.filereview:'')

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
          taskname: task?.taskname,
          taskdescription: task?.taskdescription,
          givento: {
              value: task?.givento.value,
              label: task?.givento.label,
            },
          taskstatus: taskstatus,
          taskinstructionfile:task?.taskinstructionfile,
          submissionfile: task?.submissionfile,
          submitcomment: task?.comment,
          filereview: review,
    
        };
    console.log(updatedTask)
        const apiUrl = `https://pm-server.vercel.app/v1/projects/${pid}/tasks/${task._id}`;
    
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
      <Button variant="contained" sx={{backgroundColor:'#83d0c0' , marginTop:'2px'}}  onClick={handleOpen}>Review</Button>
      <Modal
     
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              {task.taskname}
              </Typography>
              
              <p id="modal-modal-description" style={{ marginTop: 2 }}>
              {task.taskdescription}
              </p>

              <p id="modal-modal-description" style={{ marginTop: 2 }}>
                Comment:{task.submitcomment}
              </p>
              
              <div>
                Task File:
                {
                task.submissionfile? (
                  <div>
                  <a href={task.submissionfile} style={{
                    color:'#64c5b1',
                    cursor:'pointer',
                    fontSize:'14px'
                  }} download>
   <FileDownloadIcon/> task Document
  </a>
                  </div>
                  ) : null
               }
              </div>

              <hr/>
              <TextArea
              value={review}
              onChange={(e)=>setReview(e.target.value)}
              
              tasklabel="Comments"
              placeholder="Write Review!"
              // value={comment}
              // onChange={(e) => setComment(e.target.value)}
              sx={{ mt: 2 }}
              />
              {/* -----------------------Radio Buttons--------------------- */}
                  <div className="col">
                    <label className='mb-2'>
                      Task Status
                    </label>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      // id={`taskstatus-member-id-${index}`}
                      name="taskstatus"
                     value={taskstatus}
                      onChange={(e)=>{setTaskstatus(e.target.value)}}
                      className='justify-content-center'
                      
                      // onChange={(e) => handleTaskChange(index, e)}
                    >
                      
                      <FormControlLabel
                        value="Active"
                        control={<Radio />}
                        label="Active"
                      
                      />
                      <FormControlLabel
                        value="Pending"
                        control={<Radio />}
                        label="Pending"
                      />
                      <FormControlLabel
                        value="Completed"
                        control={<Radio />}
                        label="Completed"
                      />
                      
                    </RadioGroup>
                    </div>
              <br/>

      <div className='text-center mt-2'>
      <Button variant="contained" onClick={handleSubmit} sx={{backgroundColor:'#83d0c0' , marginTop:'2px'}}>Send Review</Button>

      </div>
            </Box>
        </Modal>
        <Snackbar open={openNoti} autoHideDuration={6000} onClose={handleCloseNoti}>
          <Alert onClose={handleCloseNoti} severity="success" sx={{ width: '100%' }}>
            Review Submitted Successful
          </Alert>
         
        </Snackbar>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseNoti}>

        <Alert onClose={handleCloseNoti} severity="error" sx={{ width: '100%' }}>
        Review Not Submitted
          </Alert>
          </Snackbar>
    </div>
  )
}

export default RevModal
