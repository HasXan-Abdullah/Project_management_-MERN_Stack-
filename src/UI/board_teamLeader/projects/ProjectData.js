import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { getProjects } from "../../../actions/project";

const ProjectData = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getProjects());
    }
  }, [dispatch, navigate, user]);

  const { projects, loading } = useSelector((state) => state.project);

  if (loading) {
    return <div>Loading projects...</div>;
  }


  return { projects };
};
export default ProjectData

