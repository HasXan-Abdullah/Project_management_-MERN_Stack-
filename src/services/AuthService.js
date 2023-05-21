import React from 'react';
import axios from 'axios'


/// API for users Auth

const API_URL = "https://pm-server.vercel.app/v1/auth/login";

/// Login method 
const login = (email,password) => {

  console.log("in to login method")
  return axios.post(API_URL,{
    email,password,
  }).then((response)=>{
    console.log({response})
    console.log(response.data)
    if(response.data.tokens){
      window.localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data; 
  });
};

// Logout Method

const logout = ()=>{
  window.localStorage.removeItem("user")
};

/// register Method

const register = (
  name,
  email,
  phone,
  address,
  gender,
  password,
  category,
  role,
  profilepic,
) => {
  const API_URL = "https://pm-server.vercel.app/v1/auth/register";
  console.log("sigin UP method");
  return axios.post(API_URL, {
    name,
    email,
    phone,
    address,
    gender,
    password,
    category,
    role,
    profilepic,
  });
};
const AuthService= {
  login,
  logout,
  register,
}
export default AuthService;

