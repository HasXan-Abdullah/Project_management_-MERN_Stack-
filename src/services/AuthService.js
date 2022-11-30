import React from 'react';
import axios from 'axios'


/// API for users Auth

const API_URL = "http://localhost:4000/users/signin";

/// Login method 
const login = (email,password) => {

  console.log("in to login method")
  return axios.post(API_URL,{
    email,password,
  }).then((response)=>{
    console.log({response})
    
    if(response.data.token){
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

const register = (username,email,phone,address,gender,password)=>{
  const API_URL = "http://localhost:4000/users/signup";
console.log("sigin UP method");
return axios.post(API_URL, {
  username,
  email,
  phone,
  address,
  gender,
  password,
});
}
const AuthService= {
  login,
  logout,
  register,
}
export default AuthService;

