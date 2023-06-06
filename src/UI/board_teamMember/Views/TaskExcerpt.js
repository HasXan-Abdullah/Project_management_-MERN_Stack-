import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getProjects } from "../../../actions/project";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PostCards from "../../board_teamLeader/leader_components/postFormCards/PostCards";

import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
  Divider,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const TaskExcerpt = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const project =data.project
//   const { projects, loading } = useSelector((state) => state.project);

//   if (loading) {
//     return <div>Loading projects...</div>;
//   }

  // Helper function to slice the description text
  const sliceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div ><PostCards
      
    content={
     
             
      
            <div key={project.id} >
    <Link to={`/home/view/${project.id}`}>
      <CardContent>
        
        <Typography gutterBottom variant="h5" color="#64c5b1" component="div">
          {project.project_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          desc
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Members:
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Created: 
        </Typography>
       
      </CardContent> 
      </Link>
      {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button  sx={{
          color:'#64c5b1'
        }} size="small" onClick={handleClick}>
          <MoreVertIcon  />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { dispatch(deleteProject(data.id)); handleClose(); }}>Delete</MenuItem>
          <MenuItem component={Link} to={`/home/update/${data.id}`} onClick={handleClose}>Update</MenuItem>
          <MenuItem component={Link} to={`/home/view/${data.id}`} onClick={handleClose}>View</MenuItem>
        </Menu>
      </CardActions> */}
    
      </div>

   
 }
    
    />

  </div>
  
  );
};

export default TaskExcerpt;
