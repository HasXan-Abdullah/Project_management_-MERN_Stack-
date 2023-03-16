

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
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {project.project_name}
            </Typography>
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
            <Link to={`/home/update/${project.id}`}>Update</Link>
            <br></br>
            <Link to={`/home/view/${project.id}`}>View</Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default ProjectExcerpt







