import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate  } from 'react-router-dom';
import {  add_project } from '../../../actions/project';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import GetTeamMember from "../projects/GetTeamMember";
import FileBase64 from "react-file-base64";
const MyPost = () => {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  let user = window.localStorage.getItem("user");
  let mem = GetTeamMember().members;
  console.log(mem);
  useEffect(() => {
    user = user ? JSON.parse(user) : navigate("/login");
    setContent(user.user);
    console.log(user.user.id);
  }, []);

  const [project_description, setProjectDesc] = useState("");
  const onChangeProjectDesc = (e) => {
    const p_Desc = e.target.value;
    setProjectDesc(p_Desc);
  };
  const [project_name, setProjectName] = useState("");
  const onChangeProjectName = (e) => {
    const p_Name = e.target.value;
    setProjectName(p_Name);
  };
  let userId = content.id;
  console.log(userId);
  const dispatch = useDispatch();
  const [documentFile, setDocumentFile] = useState([]);
  const [members, setMembers] = useState([
    { email: "", id: "", isLeader: false },
  ]);
  const [tasks, setTasks] = useState([
    {
      taskname: "",
      taskdescription: "",
      givento: "",
      taskstatus: "",
      taskinstructionfile: [],
    },
  ]);
  const handleSubmit = (e) => {
    let project = {
      project_name,
      project_description,
      documentFile,
      members: [
        { email: content.email, id: content.id, isLeader: true },
        ...members,
      ],
      tasks,
    };
    e.preventDefault();
    dispatch(add_project(project));
  };

  const handleAddMember = () => {
    setMembers([...members, { email: "1212", id: "", isLeader: false }]);
  };
  const handleDeleteMember = (index) => {
    const list = [...members];
    list.splice(index, 1);
    setMembers(list);
  };

  const handleMemberChange = (index, e) => {
    const updatedMembers = [...members];
    updatedMembers[index][e.target.name] = e.target.value;
    setMembers(updatedMembers);
  };
  //
  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        taskname: "",
        taskdescription: "",
        givento: "",
        taskstatus: "",
        taskinstructionfile: [],
      },
    ]);
  };
  const handleDeleteTask = (index) => {
    const list = [...tasks];
    list.splice(index, 1);
    setTasks(list);
  };

  const handleTaskChange = (index, e, data) => {
    const { name, value } = e.target || data;
    const updatedTasks = [...tasks];
    updatedTasks[index][name] = value;
    setTasks(updatedTasks);
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Project Name: </label> */}
          <TextField
            label="Project Name"
            id="p_name"
            name="p_name"
            value={project_name}
            onChange={onChangeProjectName}
            variant="outlined"
            size="small"
            sx={{color:'#64c5b1'}}
          />
          <br />
          <br />
          {/* <label>Project project_Description: </label> */}
          <TextField
            id="p_desc"
            name="p_desc"
            value={project_description}
            onChange={onChangeProjectDesc}
            label="Project description"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <label htmlFor="documentFile">Document File</label>
          <FileBase64
            value={documentFile}
            type="file"
            multiple={false}
            onDone={({ base64 }) => setDocumentFile({ documentFile: base64 })}
          />
        </div>
        <hr/>
        {/* ------------------------- */}
        <div>
          <h3>Members</h3>
          {members.map((member, index) => (
            <div key={index}>
              <label htmlFor={`member-email-${index}`}>Email</label>
              <Select
                type="email"
                id={`member-email-${index}`}
                name="email"
                value={member.email}
                onChange={(e) => handleMemberChange(index, e)}
              >
                <MenuItem value="">
                  <em>none</em>
                </MenuItem>
                {Array.isArray(mem) &&
                  mem.map((data) => (
                    <MenuItem key={data.id} value={data.email}>
                      {data.email}
                    </MenuItem>
                  ))}
              </Select>
              <label htmlFor={`member-id-${index}`}>ID</label>
              <Select
                type="text"
                id={`member-id-${index}`}
                name="id"
                value={member.id}
                onChange={(e) => handleMemberChange(index, e)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.isArray(mem) &&
                  mem.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      {data.name}
                    </MenuItem>
                  ))}
              </Select>
            </div>
          ))}
          <Button type="button" onClick={handleAddMember} variant="contained" sx={{backgroundColor:'#64c5b1'}}>
            Add Member
          </Button>
          <Button type="button" onClick={(index) => handleDeleteMember(index)} variant="contained" sx={{backgroundColor:'#64c5b1'}}>
            Delete Member
          </Button>
        </div>

        {/*  */}
        <hr/>
        <div>
          <h3>tasks</h3>
          {tasks.map((task, index) => (
            <div key={index}>
              <label htmlFor={`task-name-${index}`}>Task name</label>
              <TextField
                type="text"
                id={`task-name-${index}`}
                name="taskname"
                value={task.taskname}
                onChange={(e) => handleTaskChange(index, e)}
                label="Task name"
                variant="outlined"
                size="small"
              />
              <label htmlFor={`givento-member-id-${index}`}>givento ID</label>
              <TextField
                type="text"
                id={`givento-member-id-${index}`}
                name="givento"
                value={task.givento}
                onChange={(e) => handleTaskChange(index, e)}
                label="Given to ID"
                variant="outlined"
                size="small"

              />
              <label htmlFor={`taskdescription-member-id-${index}`}>
                taskdescription
              </label>
              <TextField
                type="text"
                id={`taskdescription-member-id-${index}`}
                name="taskdescription"
                value={task.taskdescription}
                onChange={(e) => handleTaskChange(index, e)}
                label="Task description"
                variant="outlined"
                size="small"
              />
              <label htmlFor={`taskstatus-member-id-${index}`}>
                taskstatus
              </label>
              <TextField
                type="text"
                id={`taskstatus-member-id-${index}`}
                name="taskstatus"
                value={task.taskstatus}
                onChange={(e) => handleTaskChange(index, e)}
                label="Task Status"
                variant="outlined"
                size="small"
              />
              <label htmlFor={`taskinstructionfile-member-id-${index}`}>
                taskinstructionfile
              </label>
              {/* <input
                type="text"
                id={`taskinstructionfile-member-id-${index}`}
                name="taskinstructionfile"
                value={task.taskinstructionfile}
                onChange={(e) => handleTaskChange(index, e)}
              /> */}
              <FileBase64
                id={`taskinstructionfile-member-id-${index}`}
                name="taskinstructionfile"
                value={task.taskinstructionfile}
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  handleTaskChange(index, {
                    target: {
                      name: "taskinstructionfile",
                      value: base64,
                    },
                  })
                }
              />
            </div>
          ))}

          <Button type="button" onClick={handleAddTask}  variant="contained" sx={{backgroundColor:'#64c5b1'}}>
            Add Task
          </Button>
          <Button type="button" onClick={(index) => handleDeleteTask(index)} variant="contained" 
          sx={{backgroundColor:'#64c5b1', marginLeft:'10px'}}>
            Delete Task
          </Button>
        </div>
        {/*  */}
        <Button type="submit" variant="contained" sx={{backgroundColor:'#64c5b1' , width:'100%', marginTop:'15px'}}>
          Submit</Button>
      </form>
    </div>
  );
};

export default MyPost;
