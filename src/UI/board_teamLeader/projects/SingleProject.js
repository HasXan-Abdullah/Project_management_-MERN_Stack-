import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../../../actions/project";
const SingleProject = () => {
const params = useParams();
  const dispatch = useDispatch();

  const project = useSelector((state) => state.project.project);

  useEffect(() => {
    dispatch(getProjectById(params.id));
  }, []);
console.log(project);

  return (
    <>
      <div className="mt-5">
        <div className="mt-5">
          <div>
            {project.loading ? (
              <h2>Loading...</h2>
            ) : (
              <div>
                <h2>{project.project_name}</h2>
                <p>{project.project_description}</p>
                <p>Member 1: {project.memberId1}</p>
                <p>Member 2: {project.memberId2}</p>
                <p>Member 3: {project.memberId3}</p>
                <p>Leader: {project.leaderId}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
