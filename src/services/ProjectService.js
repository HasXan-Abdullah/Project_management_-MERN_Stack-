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
  const API_URL = "http://localhost:4000/users/addproject";

  return axios.post(API_URL, {
    project_name,
    project_description,
    memberId1,
    memberId2,
    memberId3,
    leaderId
  });
};
const ProjectService= {

  add_project,
}
export default ProjectService;

