import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { logout } from '../../actions/auth';

import axios from "axios";
import AssignedTask from "./Views/AssignedTask";
import { Button } from "@mui/material";
import ProjectList from "../board_teamLeader/projects/ProjectList";
import ProjectData from "../board_teamLeader/projects/ProjectData";
import { getProjects } from "../../actions/project";
import SideMenu from "../board_teamLeader/leader_components/sidebar/SideMenu";

const BoardMember = () => {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  let user = window.localStorage.getItem("user")

  useEffect(() => {
    user = user ? JSON.parse(user) : navigate("/login");

    setContent(user.user);

    console.log(user.user.id);
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getProjects());
    }
  }, [dispatch, navigate, user]);
  // const [project, setProject] = useState([]);
  return (
    <>
      <div className="mt-4 mt-5">

      <SideMenu/>
  
        
              
      </div>
    </>
  );
};

export default BoardMember;
