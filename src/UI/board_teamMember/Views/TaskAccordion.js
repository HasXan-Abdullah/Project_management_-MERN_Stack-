import { useState } from "react";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import SubModal from "./SubModal";
import Notify from "./Notify";

export default function TaskAccordion(project) {
  const [expanded, setExpanded] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mt-5">
      {project?.project?.map((data, index) => {
        const accordionId = `panel${index + 1}`;

        return (
          <div key={data.id} className="mt-5">
         
            <Accordion
              expanded={expanded === accordionId}
              onChange={handleChange(accordionId)}
              sx={{
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <AccordionSummary
                className=" w-100"
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${accordionId}-content`}
                id={`${accordionId}-header`}
              >
                <Typography variant="h5">{data.project_name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>
                    <h6>Assigned Tasks </h6>
                  </strong>{" "}
                  <br />
                  {data?.tasks?.map((task, taskIndex) => {
                    if (task.givento.value === user.user.id) {
                  
                      return (
                        <div key={task._id}>
                          <h6>
                            <strong>
                              {taskIndex + 1} {`: ${task.taskname}`}{" "}
                              <span style={{ fontSize: "16px" }}>
                                ({task.taskstatus})
                              </span>
                            </strong>
                          </h6>
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h6>{task.taskname}</h6>
                              </div>
                              <div>
                                {task.taskinstructionfile ? (
                                  <div className="">
                                    <Button style={{ color: "#64c5b1" }}>
                                      <SubModal
                                      data={task}
                                        taskid={task._id}
                                        pid={data.id}
                                        taskname={task.taskname}
                                        desc={task.taskdescription}
                                      />
                                    </Button>
                                    <a
                                      href={project.documentFile}
                                      style={{
                                        color: "#64c5b1",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                      }}
                                      download
                                    >
                                      <FileDownloadIcon /> task Document
                                    </a>
                                  </div>
                                ) : (
                                  <Button style={{ color: "#64c5b1" }}>
                                    <SubModal
                                    data={task}
                                        taskid={task._id}
                                        pid={data.id}
                                      taskname={task.taskname}
                                      desc={task.taskdescription}
                                    />
                                  </Button>
                                )}
                              </div>
                            </div>
                            <p>Task Description : {task.taskdescription}</p>
<hr></hr>
                            <p><strong >Leader Comment: </strong> {task.filereview}</p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
