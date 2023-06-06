import React from 'react'
import MyCard from '../DASHBOARD/MyCard'

import Button from '@mui/material/Button';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import PostCards from '../leader_components/postFormCards/PostCards';

import TextArea from '../leader_components/postFormComps/TextArea';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';


import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


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


const MemberSubmission = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { projects, loading } = useSelector((state) => state.project);


  const renderProjects = () => {
    const rows = Math.ceil(projects.length / 3);
    const projectRows = [];

    for (let i = 0; i < rows; i++) {
      const startIndex = i * 3;
      const endIndex = startIndex + 3;
      const rowProjects = projects.slice(startIndex, endIndex);

      const row = (
        <div className='row' key={i}>
          {rowProjects.map((project) => (
            <div className='col' style={{
              maxWidth:'477.3px',
              margin:'10px'
            }}  key={project.id}>
              <Accordion>
 
 <AccordionSummary
   expandIcon={<ExpandMoreIcon sx={{marginLeft:'auto', 
   fontSize:'3rem',
   borderRadius:'20px',
   color:'cadetblue'}}/>}
 >

   <div className='d-flex align-items-center'>
     
       
       <Typography>{project.project_name}</Typography>
   </div>
   </AccordionSummary>

<AccordionDetails>
<div className='d-flex justify-content-between p-2'>
   <div>This is graph</div>
   

   <div className='border border-light-5 rounded p-3'>
       
       {project.project_description}
       
   </div>
</div>
<hr/>
{
project?.tasks?.map((task) =>{
  return(
    <div key={task._id}>
<Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{marginLeft:'auto', 
    fontSize:'1.5rem',
    color:'cadetblue'}}/>}>

        <div className='d-flex justify-content-between'>
            <div>{task.taskname}</div>

            {/* <div>Description</div> */}
        </div >
        
    </AccordionSummary>
    <AccordionDetails>
      <div className="border border-light-5 rounded p-3 d-flex flex-column align-items-start" >
        <div className='mb-2'>{task.taskname}</div>
        <div className='mb-2'>{task.taskdescription}</div>
        <div className='mb-2'>Task file</div>
        <div className='mb-2'>comment:{task.submitcomment} </div>
        
        
      </div>
      <div className='text-center mt-2'>
      <Button variant="contained" sx={{backgroundColor:'#83d0c0' , marginTop:'2px'}}  onClick={handleOpen}>Review</Button>

      </div>
      {/* -------------------------------MODAL------------------------- */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Task Name
              </Typography>
              
              <p id="modal-modal-description" style={{ marginTop: 2 }}>
                Task Description
              </p>

              <p id="modal-modal-description" style={{ marginTop: 2 }}>
                Comment
              </p>
              
              <div>
                Task File
              </div>

              <hr/>
              <TextArea
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
                      value={task.taskstatus}
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
      <Button variant="contained" sx={{backgroundColor:'#83d0c0' , marginTop:'2px'}}>Send Review</Button>

      </div>
            </Box>
        </Modal>
    </AccordionDetails>

</Accordion>
    </div>
 
  )
})
}


</AccordionDetails>
</Accordion>
            </div>
          ))}
        </div>
      );

      projectRows.push(row);
    }

    return projectRows;
  };
console.log(projects)
  if (loading) {
    return <div>Loading projects...</div>;
  }
else

  return (

    <>
    <PostCards 
    cardtitle="Submissions"
    content={
      <div className='mt-5 row text-center '>
      {renderProjects()}
    </div>
    }
    />

   </>
  )
}

export default MemberSubmission
