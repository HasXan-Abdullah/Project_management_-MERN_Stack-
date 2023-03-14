import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProject, delete_project } from "../../../actions/project";
import ProjectData from "./ProjectData";
import ProjectExcerpt from "./ProjectExcerpt";
const Projects = () => {
  const matchingData = ProjectData().projects
  console.log(matchingData)
  const dispatch = useDispatch();
  return (
    <div>
      {Array.isArray(matchingData) &&
        matchingData.map((data) => (
          //  <div key={post.id}>
          //       <PostsExcerpt key={post.id} post={post} />
          //   </div>
          <div key={data.id}>
            <ProjectExcerpt key={data.id} project={data} />
            {/* <Link to={`/home/update/${data.id}`}>Update</Link>
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Project Name: {data.project_name}
                </Typography>
                <Typography variant="h5">Details</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data.project_description}
                </Typography>
                <Typography variant="body1">
                  Team Members
                  <br />
                  memberId1 name : {data.memberId1}
                  <br />
                  memberId2 name : {data.memberId2}
                  <br />
                  memberId3 name : {data.memberId3}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    dispatch(deleteProject(data.id));
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card> */}
          </div>
        ))}
    </div>
  );
};

export default Projects;
