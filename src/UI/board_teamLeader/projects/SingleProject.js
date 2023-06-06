import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../../../actions/project";
import PostCards from "../leader_components/postFormCards/PostCards";
import dayjs from "dayjs";
const SingleProject = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const project = useSelector((state) => state.project.project);

  useEffect(() => {
    dispatch(getProjectById(params.id));
  }, []);
  const deadLine = dayjs(project.deadline? project.deadline: '').format('ddd, MMM D, YYYY');
  return (
    <>
      <div className="mt-5">
        <PostCards
          cardtitle=" Project Details"
          content={
            <div className="mt-5">
              <div>
                {project.loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <div>
                    <div className="d-flex justify-content-between">
                      <div >
                        <h2 >{project.project_name}</h2> 
                      </div>

                      <div>
                        {project.documentFile ? (
                          <div>
                            <a
                              href={project.documentFile}
                              style={{
                                color: "#64c5b1",
                                cursor:'pointer',
                                fontSize:'14px'
                              }}
                              download
                            >
                              <FileDownloadIcon /> Project Document
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <p>{project.project_description}</p>
                    <hr></hr>
                    <div className="row text-center">
                       <h5>Assigned Task </h5> <br />
                    </div>
                   
                    <h6>
                      {project?.tasks?.map((task) => {
                        return (
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h5><span>{task.taskname} <span style={{
                                  color:'#64c5b1',
                                  fontSize:'14px'
                                }}>
                                ({task.taskstatus})
                                  </span></span>  </h5>
                                <h6> <strong style={{
                                  color:'grey'

                                }}>Assigned to: </strong>{task.givento.label}</h6>
                              </div>
                              <div>

                              {
                task.taskinstructionfile? (
                  <div>
                  <a href={project.documentFile} style={{
                    color:'#64c5b1',
                    cursor:'pointer',
                    fontSize:'14px'
                  }} download>
   <FileDownloadIcon/> task Document
  </a>
                  </div>
                  ) : null
               }
                              </div>
                            </div>

                            <p><span className="text-secondary f-bold">Description: </span> {task.taskdescription}</p>
                            <hr></hr>
                          </div>
                        );
                      })}
                    </h6>
                    <div className="d-flex justify-content-evenly">
                      <div>
                        {" "}
                        <h6>
                          Number of Member : {project?.members?.length}
                        </h6>{" "}
                      </div>
                      <div>
                        {" "}
                        <h6>
                         <strong>Dead Line</strong> : {deadLine}
                        </h6>{" "}
                      </div>
                      <div>
                        {" "}
                        <h6>Number of Tasks : {project?.tasks?.length}</h6>
                      </div>
                    </div>
                    {/* {
                    project.members.map((member)=>{
                      return(
                        <div>

                          <h6>{member.email}</h6>
                        </div>

                      )
                    })
                  } */}
                  </div>
                )}
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default SingleProject;
