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
import dayjs from "dayjs";

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

  const date = new Date(project.updatedDate);
  const deadLine = dayjs(project.deadline? project.deadline: '').format('ddd, MMM D, YYYY');

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
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
        {project.project_description.slice(0,30)} ......
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
        Members:  {project.members.length}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Created:  {project.createdDate}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Updated At:  {formattedDate}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Dead Line:  {deadLine}
        </Typography>
      </CardContent> 
      </Link>
  
    
      </div>

   
 }
    
    />

  </div>
  
  );
};

export default TaskExcerpt;
