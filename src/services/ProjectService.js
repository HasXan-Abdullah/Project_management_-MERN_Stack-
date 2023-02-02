import React from 'react';
import axios from 'axios'


/// create a project
const add_project = (project_description,memberId,leaderId)=>{
    const API_URL = "http://localhost:4000/users/addproject";

return axios.post(API_URL, {
    project_description,memberId,leaderId
});
}
const ProjectService= {

  add_project,
}
export default ProjectService;

