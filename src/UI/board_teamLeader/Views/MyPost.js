import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_project } from "../../../actions/project";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import {
 
  Button,
  MenuItem,

} from "@mui/material";
import GetTeamMember from "../projects/GetTeamMember";

import projman from "../../../assets/images/image4.png";
import PostCards from "../leader_components/postFormCards/PostCards";
import AddButton from "../leader_components/postFormComps/AddButton";
import InputFieldpost from "../leader_components/postFormComps/InputFieldpost";
import UploadBtn from "../leader_components/postFormComps/UploadBtn";
import SelectOp from "../leader_components/postFormComps/SelectOp";
import DelBtn from "../leader_components/postFormComps/DelBtn";
import TextArea from "../leader_components/postFormComps/TextArea";
import styles from "../../board_teamLeader/leader_components/postFormComps/postForm.module.css";
import SubmitBtn from "../leader_components/postFormComps/SubmitBtn";
import DatePick from "../leader_components/DatePick";

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
 const now = new Date();
const [createdDate, setCreatedDate] = useState(now.toUTCString().slice(0, 17));

  const [project_description, setProjectDesc] = useState("");
  const onChangeProjectDesc = (e) => {
    const p_Desc = e.target.value;
    setProjectDesc(p_Desc);
  };
  const [value, setValue]= useState(dayjs('2023-06-7'));
 
  console.log(value)
  const [project_name, setProjectName] = useState("");
  const onChangeProjectName = (e) => {
    const p_Name = e.target.value;
    setProjectName(p_Name);
  };
  const [documentFile, setDocumentFile] = useState();
  const handleFileUpload = ({ base64 }) => {
    setDocumentFile(base64);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenCalendar = () => {
    setIsOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsOpen(false);
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
    handleCloseCalendar();
  };

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
      taskinstructionfile: "",
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
      deadline:value,
      createdDate,
    };
    e.preventDefault();
    dispatch(add_project(project))
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          // Handle the error if the post request fails
          console.log(error);
          alert("Failed to add project. Please try again.");
        });
    
    
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    setMembers([...members, { email: "1212", id: "", isLeader: false }]);
  };
  const handleDeleteMember = (index,e) => {
    e.preventDefault();
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
  const handleAddTask = (e) => {
    e.preventDefault();
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
        taskinstructionfile: "",
      },
    ]);
  };
  const handleDeleteTask = (index,e) => {
    e.preventDefault();
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
    const task = { ...updatedTasks[index] };

    if (name === `tasks[${index}].givento.value`) {
        const selectedOption = mem.find((member) => member.id === value);
        task.givento.label = selectedOption ? selectedOption.name : "";
        task.givento.value = selectedOption ? selectedOption.id : "";
    } else if (name === `tasks[${index}].taskinstructionfile`) {
        task.taskinstructionfile = value || ""; // Assign value directly
    } else {
        task[name] = value;
    }

    updatedTasks[index] = task;
    setTasks(updatedTasks);
};


 
  return (
    <div className="mt-5">
       <form onSubmit={handleSubmit}>
      <PostCards
        cardtitle="Project info"
        content={
          <div className="row">
            <div className="col">
              <InputFieldpost label="Project Name"  id="p_name"
            name="p_name"
            value={project_name}
            onChange={onChangeProjectName} />
              <InputFieldpost  id="p_desc"
            name="p_desc"
            value={project_description}
            onChange={onChangeProjectDesc}
            label="Project Description" />
            </div>
            <div className="col">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label=" ">
          <div><label>DeadLine</label>
          <Button 
          style={{ borderColor: "#64c5b1" ,color:'#64c5b1'}}
           onClick={handleOpenCalendar}> Open Calendar</Button> 
            {isOpen && (
              <DateCalendar
                value={value}
                onChange={handleDateChange}
                onClose={handleCloseCalendar}
              />
            )}
          </div>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>

              <UploadBtn value={documentFile} onDone={handleFileUpload} />
            </div>
            <div className="col ">
              <img width="200px" src={projman} alt="" />
            </div>
          </div>
        }
      />
      <PostCards
        cardtitle="Members"
        button={<AddButton onClick={handleAddMember} />}
        content={members.map((member, index) => (
          <div className="row mt-2" key={index}>
            <div className="col">
              <SelectOp
                label="Email"
                type="email"
                id={`member-email-${index}`}
                name="email"
                value={member.email}
                onChange={(e) => handleMemberChange(index, e)}
              >
                {Array.isArray(mem) &&
                  mem.map((data) => (
                    <MenuItem key={data.id} value={data.email}>
                      {data.email}
                    </MenuItem>
                  ))}
              </SelectOp>
            </div>
            <div className="col">
              <SelectOp
                label="Name"
                type="text"
                id={`member-id-${index}`}
                name="id"
                value={member.id}
                onChange={(e) => handleMemberChange(index, e)}
              >
                {Array.isArray(mem) &&
                  mem.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      {data.name}
                    </MenuItem>
                  ))}
              </SelectOp>
            </div>
            <div className="col">
              <DelBtn onClick={(e) => handleDeleteMember(index,e)} />
            </div>
          </div>
        ))}
      />
      <PostCards
        cardtitle="Tasks"
        button={<AddButton onClick={handleAddTask} />}
        content={tasks.map((task, index) => (
          <div className="taskDiv" key={index}>
            <div className="row">
              <div className="col">
                <InputFieldpost label="Task Name"   type="text"
                id={`task-name-${index}`}
                name="taskname"
                value={task.taskname}
                onChange={(e) => handleTaskChange(index, e)}/>

                <TextArea    type="text"
                placeholder="Task Description"
                id={`taskdescription-member-id-${index}`}
                name="taskdescription"
                value={task.taskdescription}
                onChange={(e) => handleTaskChange(index, e)}/>
              </div>

              <div className="col-7 mt-4" style={{ marginLeft: "" }}>
                <div className="row">
                  <div className="col">
                    <SelectOp
                      label="Assign to"
                      sx={{ width: "250px" }}
                      placeholder="member name"
                      id={`givento-member-id-${index}`}
                      name={`tasks[${index}].givento.value`}
                      value={task.givento.value}
                      onChange={(e) => handleTaskChange(index, e)}
                      variant="outlined"
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
                    </SelectOp>
                  </div>

                  <div className="col">
                    <label className={`${styles.inpLables}mb-2`}>
                      Task Status
                    </label>
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
                  </div>
                </div>
                <div style={{width:'480px'}}>
                  <UploadBtn  id={`taskinstructionfile-member-id-${index}`}
                  name="taskinstructionfile"
                  value={task.taskinstructionfile}
                 
                  onDone={({ base64 }) =>
                    handleTaskChange(index, {
                      target: {
                        name: "taskinstructionfile",
                        value: base64,
                      },
                    })
                  } />
                </div>
              </div>
              <div className="col-sm-1 d-flex justify-content-end">
                <DelBtn onClick={(e) => handleDeleteTask(index,e)} />
              </div>
            </div>
          </div>
        ))}
      />

      <SubmitBtn  onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
};

export default MyPost;