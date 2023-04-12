import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_project } from "../../../actions/project";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Grid, MenuItem, TableRow, TextField } from "@mui/material";
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

  let userId = content.id;
  console.log(userId);
  const dispatch = useDispatch();

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
  const [documentFile, setDocumentFile] = useState([]);
  const [members, setMembers] = useState([
    { email: "", id: "", isLeader: false },
  ]);
  const [tasks, setTasks] = useState([
    {
      taskname: "",
      taskdescription: "",
       givento: {
        value: "",
        label: "",
      },
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
        taskstatus: "",
         givento: {
        value: "",
        label: "",
      },
        taskinstructionfile: [],
      },
    ]);
  };
  const handleDeleteTask = (index) => {
    const list = [...tasks];
    list.splice(index, 1);
    setTasks(list);
  };

  // const handleTaskChange = (index, e, data) => {
  //   const { name, value } = e.target || data;
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index][name] = value;
  //   setTasks(updatedTasks);
  // };

   const handleTaskChange = (index, e, data) => {
    const { name, value } = e.target || data;
    const updatedTasks = [...tasks];
    updatedTasks[index][name] = value;
    setTasks(updatedTasks);
  
    if (name === `tasks[${index}].givento.value`) {
      const selectedOption = mem.find(member => member.id === value);
      updatedTasks[index].givento.label = selectedOption ? selectedOption.name : "";
      updatedTasks[index].givento.value = selectedOption ? selectedOption.id : "";
      
    }
    return setTasks(updatedTasks);

};




  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Project info</h3>

          <TextField
            label="Project Name"
            id="p_name"
            name="p_name"
            value={project_name}
            onChange={onChangeProjectName}
            variant="outlined"
            size="small"
            sx={{ color: "#64c5b1" }}
          />

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
          <div className="input-file">
            <label htmlFor="documentFile">Document File: </label>
            <FileBase64
              value={documentFile}
              type="file"
              multiple={false}
              onDone={({ base64 }) => setDocumentFile({ documentFile: base64 })}
            />
          </div>
        </div>
        <hr />

        {/* ------------------------- */}

        <div>
          <h3>Members</h3>
          {members.map((member, index) => (
            <div key={index}>
              <label htmlFor={`member-email-${index}`}>Email</label>

              <Select
                sx={{ marginRight: "35px" }}
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
          <Button
            type="button"
            onClick={handleAddMember}
            variant="contained"
            sx={{ backgroundColor: "#64c5b1" }}
          >
            Add Member
          </Button>
          <Button
            type="button"
            onClick={(index) => handleDeleteMember(index)}
            variant="contained"
            sx={{ backgroundColor: "#64c5b1" }}
          >
            Delete Member
          </Button>
        </div>

        {/*  */}
        <hr />

        <div>
          <h3>tasks</h3>
          {/* {tasks.map((task, index) => (
            <div key={index}>
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

              <Select
                placeholder="member name"
                type="text"
                id={`givento-member-id-${index}`}
                name="givento"
                value={task.givento}
                onChange={(e) => handleTaskChange(index, e)}
                variant="outlined"
                size="small"
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

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Task Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  id={`taskstatus-member-id-${index}`}
                  name="taskstatus"
                  value={task.taskstatus}
                  onChange={(e) => handleTaskChange(index, e)}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Pending"
                    control={<Radio />}
                    label="Pending"
                  />
                  <FormControlLabel
                    value="Compelted"
                    control={<Radio />}
                    label="Compelted"
                  />
                </RadioGroup>
              </FormControl>

              <div className="input-file">
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
            </div>
          ))} */}
{tasks.map((task, index) => (
  <div key={index}>
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

    <Select
      placeholder="member name"
      id={`givento-member-id-${index}`}
      name={`tasks[${index}].givento.value`}
      value={task.givento.value}
      onChange={(e) => handleTaskChange(index, e)}
      variant="outlined"
      size="small"
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

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Task Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  id={`taskstatus-member-id-${index}`}
                  name="taskstatus"
                  value={task.taskstatus}
                  onChange={(e) => handleTaskChange(index, e)}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Pending"
                    control={<Radio />}
                    label="Pending"
                  />
                  <FormControlLabel
                    value="Completed"
                    control={<Radio />}
                    label="Completed"
                  />
                </RadioGroup>
              </FormControl>

              <div className="input-file">
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
  </div>
))}


          <Button
            type="button"
            onClick={handleAddTask}
            variant="contained"
            sx={{ backgroundColor: "#64c5b1" }}
          >
            Add Task
          </Button>
          <Button
            type="button"
            onClick={(index) => handleDeleteTask(index)}
            variant="contained"
            sx={{ backgroundColor: "#64c5b1", marginLeft: "10px" }}
          >
            Delete Task
          </Button>
        </div>
        {/*  */}

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#64c5b1",

            marginTop: "15px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MyPost;
