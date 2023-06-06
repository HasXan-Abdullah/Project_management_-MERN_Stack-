import React, { useState } from 'react'
import MyCard from '../DASHBOARD/MyCard'

import Button from '@mui/material/Button';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import PostCards from '../leader_components/postFormCards/PostCards';
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import TextArea from '../leader_components/postFormComps/TextArea';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';


import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import RevModal from './RevModal';
import DataChart from '../leader_components/datatable/DataChart';


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
  const [selectedProjectId, setSelectedProjectId] = useState(null);

///// Find the selected project
const selectedProject = projects.find(project => project.id === selectedProjectId);

// Initialize task status counts
let active = 0;
let pending = 0;
let completed = 0;

// Calculate task status counts for the selected project
if (selectedProject?.tasks) {
  selectedProject.tasks.forEach(task => {
    if (task.taskstatus === 'Active') {
      active++;
    } else if (task.taskstatus === 'Pending') {
      pending++;
    } else if (task.taskstatus === 'Completed') {
      completed++;
    }
  });
}

// Create the tasksStatus object with the counts
const tasksStatus = {
  active,
  pending,
  completed
};

 
  const renderProjects = () => {
    const rows = Math.ceil(projects.length );
    const projectRows = [];

    for (let i = 0; i < rows; i++) {
      const startIndex = i * 2;
      const endIndex = startIndex + 2;
      const rowProjects = projects.slice(startIndex, endIndex);

      const row = (
        <div className='row ' key={i}>
          {rowProjects.map((project) => (

             <div className='col-6' style={{ maxWidth: '45%', margin: '10px' }} key={project.id}>
  
              <Accordion>
 
              <AccordionSummary
  expandIcon={<ExpandMoreIcon sx={{ marginLeft: 'auto', fontSize: '3rem', borderRadius: '20px', color: 'cadetblue' }} />}
  onClick={() => setSelectedProjectId(project.id)}
>


   <div className='d-flex align-items-center'>
     
       
       <Typography>{project.project_name}</Typography>
   </div>
   </AccordionSummary>

<AccordionDetails>
<div className='d-flex '>
<div>


    {/* Rest of the JSX code */}
  </div>
   <div>
   <DataChart tasksStatus={tasksStatus} />
   </div>
   

   <div className='border  border-light-5 text-justify rounded p-3 text-secondary'>
       
      <strong>Description :</strong> {project.project_description.slice(0,200)} ....
       
   </div>
</div>
<hr/>
{
project?.tasks?.map((task) =>{



  
  console.log(task)
  return(
    <div key={task._id} style={{
      margin:'10px'
    }}>
<Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{margin:'auto', 
    fontSize:'1.5rem',
    color:'cadetblue'}}/>}>

        <div className='d-flex justify-content-between'>
            <div className='text-secondary'> <strong>{task.taskname}</strong></div>

            {/* <div>Description</div> */}
        </div >
        
    </AccordionSummary>
    <AccordionDetails>
      <div className="border border-light-5 rounded p-3 d-flex flex-column align-items-start" >
        
        <div className='mb-2 text-secondary'> <strong>Description : </strong>{task.taskdescription.slice(0,180)} .......</div>
        <div className='mb-2 text-secondary'>
        
        {
                task.submissionfile? (
                  <div>
                  <a href={task.submissionfile} style={{
                    color:'#64c5b1',
                    cursor:'pointer',
                    fontSize:'14px'
                  }} download>
   <FileDownloadIcon/> Submitted task
  </a>
                  </div>
                  ) : null
               }
        </div>
        <div className='mb-2 text-secondary'><strong>Comment:{task.submitcomment} </strong></div>
        
        
      </div>
      <div className='text-center mt-2'>
      {/*  */}
    <RevModal task={task} pid={project.id}/>
        </div>
      {/* -------------------------------MODAL------------------------- */}
     
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
