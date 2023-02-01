
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Home = () => {


  let navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    let user = window.localStorage.getItem("user")
    user = user ? JSON.parse(user) : navigate('/login');
   
    setContent(user.user);



    console.log(user);
  

   
   
  }, []);


      if (content.role === "Leader"){
    console.log(content.role)
    return <Navigate to="/home" />;
    }
  else  if (content.role === "Member"){
    console.log(content.role)
    return <Navigate to="/member" />;
    }
  
}

export default Home