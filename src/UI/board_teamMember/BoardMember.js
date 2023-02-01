
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { logout } from '../../actions/auth';
import SideBar from "../board_teamLeader/Components/SideBar";
import MyHeader from "../board_teamLeader/Components/MyHeader";
const BoardMember = () => {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <>

  <SideBar/>
    <div className="container mt-4">

      <header className="jumbotron">
      <h3>Team member profile</h3>
      </header>
      <Link to='/login' onClick={logOut}>logout</Link>
    </div>
    </>
  );
};

export default BoardMember;
