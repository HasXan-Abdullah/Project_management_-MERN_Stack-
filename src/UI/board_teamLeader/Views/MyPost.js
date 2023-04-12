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
import { Button, Grid, MenuItem, Paper, TableRow, TextareaAutosize, TextField } from "@mui/material";
import GetTeamMember from "../projects/GetTeamMember";
import FileBase64 from "react-file-base64";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import AddIcon from '@mui/icons-material/Add';
import projman from '../../../assets/images/proj.jpg';
import { red } from "@mui/material/colors";

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
        <Paper elevation={10} sx={{borderRadius: "20px", padding:'15px 25px'}}>
        <div>
          <b><h3>Project info</h3></b>
        <div className="d-flex flex-row align-items-end justify-content-between">
          <div className="d-flex flex-column ">

          <label htmlFor="projectname">Project Name </label>
            <TextField
              // label="Project Name"
              placeholder="Project Name"
              id="p_name"
              name="p_name"
              value={project_name}
              onChange={onChangeProjectName}
              variant="outlined"
              size="small"
              sx={{ color: "#64c5b1" ,mb:'20px', width:'20rem'}}

            />
            <label htmlFor="projectdesc">Project Description </label>
            <TextField
              id="p_desc"
              name="p_desc"
              value={project_description}
              onChange={onChangeProjectDesc}
              // label="Project description"
              placeholder="Project Description"
              variant="outlined"
              size="small"
            />
            
          </div>
        

        
          <div className="input-file d-flex flex-column">
            <label htmlFor="documentFile">Upload Project: </label>
            <FileBase64
              value={documentFile}
              type="file"
              multiple={false}
              onDone={({ base64 }) => setDocumentFile({ documentFile: base64 })}
            />
          </div>
          <div className="d-flex flex-column align-items-center">
            <img src={projman} alt="mens" width="220px"/>
          </div>
        </div>
        </div>
        </Paper>
        

        {/* ------------------------- */}
      <Paper elevation={10}
       sx={{borderRadius: "20px", padding:'15px 25px', mt:'20px'}}
      >
        <div>
          <div className="d-flex justify-content-between">
            <h3>Members</h3>
            <Button onClick={handleAddMember} variant="contained" sx={{backgroundColor:'grey',borderRadius:'10px', width:'5rem', height:'2rem' ,textDecoration:'none'}} startIcon={<AddIcon />}>
              Add
            </Button>
          </div>
          {members.map((member, index) => (
            <div key={index}>
              <div className="d-flex flex-row justify-content-between align-items-center">
              
              <div className="d-flex flex-column">
              <label htmlFor={`member-email-${index}`}>Email</label>
            
              <Select
                // sx={{ marginRight: "35px" }}
                sx={{minWidth:'18rem'}}
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
              </div>

              <div className="d-flex flex-column">
              <label htmlFor={`member-id-${index}`}>ID</label>
              <Select
              sx={{minWidth:'31rem' }}
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
                  <CancelRoundedIcon 
                  onClick={(index) => handleDeleteMember(index)}
                  sx={{color:'red' , fontSize:'2rem', mt:'19px'}}/>
              </div>
            </div>
          ))}
          {/* <Button
            type="button"
            onClick={handleAddMember}
            variant="contained"
            sx={{ backgroundColor: "#64c5b1" }}
          >
            Add Member
          </Button> */}

          {/* <Button
            type="button"
            onClick={(index) => handleDeleteMember(index)}
            variant="contained"
            sx={{ backgroundColor: "#64c5b1" }}
          >
            Delete Member
          </Button> */}
        </div>
      </Paper>
        {/*  */}
      
      
       
<Paper  elevation={10}
       sx={{borderRadius: "20px", padding:'15px 25px', mt:'20px'}}>
        <div>
          <div className="d-flex justify-content-between">
          <h3>Tasks</h3>
          <Button onClick={handleAddTask} variant="contained" sx={{backgroundColor:'grey',borderRadius:'10px', width:'5rem', height:'2rem' ,textDecoration:'none'}} startIcon={<AddIcon />}>
              Add
            </Button>
          </div>
<div>
          {tasks.map((task, index) => (
            <div key={index}>
          
<div className="d-flex justify-content-between">
            <div className="d-flex flex-column"> 
            <label htmlFor={`member-email-${index}`}>Task Name</label>
                <TextField
                type="text"
                id={`task-name-${index}`}
                name="taskname"
                value={task.taskname}
                onChange={(e) => handleTaskChange(index, e)}
                // label="Task name"
                placeholder="Task name"
                variant="outlined"
                size="large"
                sx={{width:'15rem', mb:'20px'}}
              />
            </div>

          <div className="d-flex flex-column">
          <label htmlFor={`member-email-${index}`}>Assign to</label>
          <Select
            placeholder="member name"
            id={`givento-member-id-${index}`}
            name={`tasks[${index}].givento.value`}
            value={task.givento.value}
            onChange={(e) => handleTaskChange(index, e)}
            variant="outlined"
            // size="small"
            sx={{width:'15rem'}}
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
              <div>
                  <CancelRoundedIcon 
                  onClick={(index) => handleDeleteTask(index)}
                  sx={{color:'red' , fontSize:'1.5rem'}}/>
              </div>
  </div>          

<div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column">    
          <label>Task Description</label>
          <TextareaAutosize
                type="text"
                id={`taskdescription-member-id-${index}`}
                name="taskdescription"
                value={task.taskdescription}
                onChange={(e) => handleTaskChange(index, e)}
                label="Task description"
                variant="outlined"
                size="small"
                placeholder="Description"
                
              />
          </div>

              <div className="input-file d-flex flex-column">
              <label>Upload Task File</label> 
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
  </div>
))}

        </div>
</div>
        {/*  */}

       
      </Paper>
      <div className="d-flex justify-content-center">
      <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#64c5b1",

            marginTop: "15px",
            width:'40rem',
            textAlign:"center",
          }}
        >
          Post Project
      </Button>
      </div>
      </form>
      
      
    </div>
    
  );
};

export default MyPost;
