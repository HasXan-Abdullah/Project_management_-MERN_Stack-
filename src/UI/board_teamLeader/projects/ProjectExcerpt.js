

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import React, { Children } from "react";
import { useDispatch } from "react-redux";

import { Link,  } from "react-router-dom";
import { deleteProject, getProjectById } from "../../../actions/project";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProjectExcerpt = (data) => {
    const dispatch =useDispatch();
   let project = data.project;
   let allMembers = [];

// 2023-04-19T15:06:26.687Z
  if (project?.members) {
    const membersWithoutLeaders = project.members.filter(member => !member.isLeader);
    allMembers = allMembers.concat(membersWithoutLeaders);
  }

    const date = new Date(project.updatedDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
// console.log(project.members.length)
  return (
    <div >
      <div key={project.id}>
    <Card sx={{ margin: '15px', backgroundColor: '#f2f2f2', borderRadius: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.project_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.project_description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Members: {allMembers.length}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          Created: {formattedDate}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" onClick={handleClick}>
          <MoreVertIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { dispatch(deleteProject(project.id)); handleClose(); }}>Delete</MenuItem>
          <MenuItem component={Link} to={`/home/update/${project.id}`} onClick={handleClose}>Update</MenuItem>
          <MenuItem component={Link} to={`/home/view/${project.id}`} onClick={handleClose}>View</MenuItem>
        </Menu>
      </CardActions>
    </Card>
      </div>
    </div>
  );
}

export default ProjectExcerpt







