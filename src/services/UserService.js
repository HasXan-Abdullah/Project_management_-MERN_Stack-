import axios from "axios";
import AuthHeader from "./AuthHeader";



///API
const API_URL = "https://itechnet-server.herokuapp.com/v1/users";

const getPublicContent= ()=>{
    const config =AuthHeader();
    console.log({config})
    return axios.get(API_URL,{headers:config});
};

export default {
    getPublicContent,
}
// define a service for accessing data in UserService.js