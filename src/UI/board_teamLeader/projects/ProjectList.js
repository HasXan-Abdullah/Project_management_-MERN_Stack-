import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../actions/project";
import ProjectData from "./ProjectData";

const ProjectList = () => {
  const projects = ProjectData().projects;
  

  
  return (
    <div>
      <h1>Project List</h1>
      {Array.isArray(projects) &&
        projects.map((project) => (
          <div key={project?.id}>
            {project && project.project_name && <h2>{project.project_name}</h2>}
            {project && project.project_description && <p>{project.project_description}</p>}
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
