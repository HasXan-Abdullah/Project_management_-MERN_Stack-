import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../../actions/project";

 const ProjectData = () => {
    let navigate = useNavigate();
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.project);
  // const { userId } = useSelector((state) => state.auth);

    
 let user = window.localStorage.getItem("user");

   
  useEffect(() => {
     user = user ? JSON.parse(user) : navigate("/login");
    dispatch(getProjects());
  }, [dispatch]);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  
  return { projects };
};
export default ProjectData

