
import { Link } from "react-router-dom";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserService from '../../services/UserService';
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
    // UserService.getPublicContent().then(
    //   (response) => {
    //     setContent(response.data.user);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response.data.user && error.response.data.user) ||
    //       error.message ||
    //       error.toString();

    //     setContent(_content);
    //   }
    // );

    let user = window.localStorage.getItem("user")
    user = user ? JSON.parse(user) : navigate('/login');
    setContent(user.user);

  }, []);
  // let logout = ()=>{
  //   window.localStorage.removeItem("user");
  // }

  return (<>
    <div className="login-header">
      <h1>Welcome {content ? content.email : ''}</h1>
     
      <p> {content ? content.name : ''}</p>
      <p> {content ? content.phone : ''}</p>
      <p> {content ? content.address : ''}</p>

      <p className="d-flex justify-content-center mt-5">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
                <a onClick={logOut}>Logout</a>
              </Link>
       </p>
    </div>

   </>
  );
}

export default Home