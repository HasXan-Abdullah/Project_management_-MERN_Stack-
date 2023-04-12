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
  const matchingData = ProjectData().projects;
  console.log(matchingData);
  const dispatch = useDispatch();
  
  return (
    <div>
      {Array.isArray(matchingData) &&
        matchingData.map((data) => (
          <div key={data && data.id}> 
            {data && data.id && ( 
              <ProjectExcerpt key={data.id} project={data} />
            )}
          </div>
        ))}
    </div>
  );
};

export default Projects;

