import axios from "axios";
import AuthHeader from "./AuthHeader";



///API
const API_URL = "http://localhost:3000/users/";

const getPublicContent= ()=>{
    const config =AuthHeader();
    console.log({config})
    return axios.get(API_URL,{headers:config});
};
///get projects

const getTeamMembers = () => {

  return axios.get('http://localhost:3000/v1/users/getTeamMember/', {

  });
};
export default { 
    getTeamMembers,
    getPublicContent,
}
// define a service for accessing data in UserService.js