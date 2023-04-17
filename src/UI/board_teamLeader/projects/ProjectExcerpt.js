

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
console.log(project)
  return (
    <div>
      <div key={project.id}>
        {/* <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {project.project_name}
            </Typography>
            <div>
              {project.project_description}
            </div>
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
        </Card> */}

        <div style={{
          backgroundColor:'gray'
          ,margin:'15px'
        }}>
          <div>
            {project.project_name}
          </div>
          <div>
            {project.project_description}
          </div>
          <div>
            <table>
              <tr>
                <td>Created: </td>
                {/* <td>{project.createdAt}</td> */}
              </tr>
              <tr>
                <td>hello</td>
                <td>hello</td>
              </tr>
              <tr>
                <td>hello</td>
                <td>hello</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectExcerpt







