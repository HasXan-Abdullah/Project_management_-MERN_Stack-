
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
    let user = window.localStorage.getItem("user");
    console.log(user);
    user = user ? JSON.parse(user) : navigate('/login');
   
    setContent(user.user);



    
  

   
   
  }, []);

  console.log(content.category)
      if (content.category === "leader"){
    console.log(content.category)
    return <Navigate to="/home" />;
    }
  else  if (content.category === "member"){
    console.log(content.category)
    return <Navigate to="/member" />;
    }



};

export default Home