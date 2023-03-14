

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import React, { Children } from "react";
import { useDispatch } from "react-redux";

import { Link,  } from "react-router-dom";
import { deleteProject, getProjectById } from "../../../actions/project";
import SingleProject from "./SingleProject";

const ProjectExcerpt = (data) => {
   const dispatch =useDispatch();
   let project = data.project;

  return (
    <div>
      <div key={project.id}>
        <Link to={`/home/update/${project.id}`}>Update</Link>
        <br></br>
        <Link to={`/home/view/${project.id}`}>View</Link>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Project Name: {project.project_name}
            </Typography>
            {/* <Typography variant="h5">Details</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {project.project_description}
            </Typography>
            <Typography variant="body1">
              Team Members
              <br />
              memberId1 name : {project.memberId1}
              <br />
              memberId2 name : {project.memberId2}
              <br />
              memberId3 name : {project.memberId3}
              <br />
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                dispatch(deleteProject(project.id));
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default ProjectExcerpt







