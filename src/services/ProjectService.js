import React from 'react';
import axios from 'axios'


/// create a project
const add_project = (
  project_name,
  project_description,
  memberId1,
  memberId2,
  memberId3,
  leaderId
) => {
  const API_URL = "http://localhost:3000/v1/projects/createProject";

  return axios.post(API_URL, {
    project_name,
    project_description,
    memberId1,
    memberId2,
    memberId3,
    leaderId
  });
};

/// delete  project 

const delete_project = (projectId) => {
  const API_URL = `http://localhost:3000/v1/projects/updateproject/${projectId}`;

  return axios.delete(API_URL);
};



const ProjectService= {
delete_project,
  add_project,
}
export default ProjectService;

