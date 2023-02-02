import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { logout } from '../../actions/auth';
import SideBar from "../board_teamLeader/Components/SideBar";
import MyHeader from "../board_teamLeader/Components/MyHeader";
import axios from "axios";
import AssignedTask from "./AssignedTask";
import { Button } from "@mui/material";

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
      <div className="container mt-4">
        <header className="jumbotron">
          <h3>{content.username}</h3>
          <h3>Team member profile</h3>

          <Link
            style={{
              textDecoration: "none",
            }}
            to="/login"
            className="nav-link"
          >
            <Button
              sx={{
                color: "#64c5b1",

                borderRadius: "16px",
                border: "1px solid #64c5b1",
                ml: 12,
                mr: 12,
              }}
              onClick={logOut}
              variant="outlined"
            >
              Logout
            </Button>
          </Link>
        </header>
        <h3>Your tasks</h3>
        <AssignedTask />
      </div>
    </>
  );
};

export default BoardMember;
