import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getProjects } from "../../actions/project";
import ProjectList from "../board_teamLeader/projects/ProjectList";

const MyComponent = ({ base64String, filename }) => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = base64String;
    link.download = `${filename.slice(0, 10)}-${Date.now()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={downloadFile}>Download File</button>
    </div>
  );
};

const AssignedTask = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.project);

  useEffect(() => {
    let user = window.localStorage.getItem("user");

    user = user ? JSON.parse(user) : navigate("/login");
    dispatch(getProjects());
  }, [dispatch]);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div>
      {projects &&
        projects.map((data) => (
          <div key={data.id}>
            {data.project_description} given by Leader Id : {data.project_name} .
            Leader name : {data.leaderId}
            {data.members.map((el) => (
              <div key={el._id}> member: {el.email}</div>
            ))}
            {data.tasks.map((el) => (
              <div key={el._id}>
                {el.taskinstructionfile ? (
                  <MyComponent base64String={el.taskinstructionfile} filename={el.taskinstructionfile} />
                ) : (
                  <p>No file to download</p>
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default AssignedTask;
