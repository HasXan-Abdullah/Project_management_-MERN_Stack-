import React from 'react';
import axios from 'axios'
import AuthHeader from './AuthHeader';



  const API_URL = "http://localhost:3000/v1/projects/";
///get projects

const get_projects = () => {
  let user = window.localStorage.getItem("user");

  user = JSON.parse(user);
  let userId = user.user.id;
  return axios.get(API_URL + `getProjectByMemberId/${userId}`, {
    headers: AuthHeader(),
  });
};
//get project by Id

const get_project_Id = (id) => {
  return axios.get(API_URL + `getProject/${id}`);
};
//

const add_project = async (project) => {
    const response = await axios.post(API_URL + "createProject", project);
    return response;
  }
///
// const add_project = (
// project
// ) => {
// debugger

//   return axios.post(API_URL + "createProject", {
//     project,
//   });
// };

/// create a project
// const add_project = (
//   project_name,
//   project_description,
//   memberId1,
//   memberId2,
//   memberId3,
//   leaderId
// ) => {
//   const API_URL = "http://localhost:3000/v1/projects/createProject";

//   return axios.post(API_URL, {
//     project_name,
//     project_description,
//     memberId1,
//     memberId2,
//     memberId3,
//     leaderId
//   });
// };
const deleteProject = (id) => {
  return axios.delete(API_URL + "deleteproject/" + id);
};

const updateProject = (
  id,
  project_name,
  project_description,
  memberId1,
  memberId2,
  memberId3,
  leaderId
) => {
  return axios.post(API_URL + "updateproject/:" + id, {
    project_name,
    project_description,
    memberId1,
    memberId2,
    memberId3,
    leaderId,
  });
};

const ProjectService = {
  get_project_Id,
  deleteProject,
  updateProject,
  add_project,
  get_projects,
};
export default ProjectService;
/////


