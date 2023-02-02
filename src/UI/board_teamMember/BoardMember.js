import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { logout } from '../../actions/auth';
import SideBar from "../board_teamLeader/Components/SideBar";
import MyHeader from "../board_teamLeader/Components/MyHeader";
import axios from "axios";
import AssignedTask from "./AssignedTask";

const BoardMember = () => {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  let user = window.localStorage.getItem("user")

  useEffect(() => {
    user = user ? JSON.parse(user) : navigate('/login');
   
    setContent(user.user);

    console.log(user.user._id);
  

   
   
  }, []);
  const [project, setProject] = useState([]);
  return (
    <>

  <SideBar/>
    <div className="container mt-4">

      <header className="jumbotron">
      <h3>Team member profile</h3>
      <button onClick={logOut}>Logout</button>

      </header>
      <h3>
        Your tasks

      </h3>
      <AssignedTask/>
    </div>
    </>
  );
};

export default BoardMember;
