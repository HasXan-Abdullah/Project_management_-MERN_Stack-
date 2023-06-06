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
import TaskExcerpt from "./TaskExcerpt";


const AssignedTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.project);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getProjects());
    }
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  // Helper function to slice the description text
  const sliceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
const Tasks=()=>{
return(
  <div className="row">
  {Array.isArray(projects) &&
projects.map((data) => (
  <div key={data && data.id} style={{ width: '350px', padding: '10px' , cursor:'pointer'}}>
    {data && data.id && <TaskExcerpt key={data.id} project={data} />}
  </div>
))}
 </div>
)
}

  return (
  
 
 <Tasks/>
   
  
  );
};




export default AssignedTask;
