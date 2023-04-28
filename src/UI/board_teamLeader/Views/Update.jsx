import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectById, updateProject } from "../../../actions/project";
import { Button, Grid, MenuItem, TableRow, TextField } from "@mui/material";
import FileBase64 from "react-file-base64";
import Select from "@mui/material/Select";
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
import GetTeamMember from "../projects/GetTeamMember";


import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Update = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData).user);
        } else {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        dispatch(getProjectById(params.id));
    }, [dispatch, params.id]);

    useEffect(() => {
        if (user) {
            setContent(user.content);
        }
    }, [user]);

    const project = useSelector((state) => state.project.project);


    let mem = GetTeamMember().members;
    const [project_description, setProjectDesc] = useState(project ? project.project_description : "");
    const onChangeProjectDesc = (e) => {
        const p_Desc = e.target.value;
        setProjectDesc(p_Desc);
    };
    const [project_name, setProjectName] = useState(project ? project.project_name : "");
    const onChangeProjectName = (e) => {
        const p_Name = e.target.value;
        setProjectName(p_Name);
    };
    const [documentFile, setDocumentFile] = useState(project?.documentFile||[""]);
    const [members, setMembers] = useState(project?.members || [
        { email: "", id: "", isLeader: false },
    ]);
    const [tasks, setTasks] = useState(project?.tasks || [
        {
            taskname: "",
            taskdescription: "",
            givento: "",
            taskstatus: "",
            taskinstructionfile: [],
        },
    ]);
    useEffect(() => {
        if (project) {
            setProjectDesc(project.project_description || "");
            setProjectName(project.project_name || "");
            setDocumentFile(project.documentFile);
            setTasks(project?.tasks || [
                {
                    taskname: "",
                    taskdescription: "",
                    givento: "",
                    taskstatus: "",
                    taskinstructionfile: [],
                },
            ])
            setMembers(
                project?.members || [
                    { email: "", id: "", isLeader: false },
                ]
            )

        }
    }, [project]);
    const handleSubmit = (e) => {
        e.preventDefault();

        let project = {
            project_name,
            project_description,
            documentFile,
            members: [
                ...members,


            ],
            tasks,
        };


        dispatch(updateProject(params.id, project));
        navigate(`/home/view/${params.id}`)
    };

    const handleAddMember = () => {
        setMembers([...members, { email: "", id: "", isLeader: false }]);
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
    const handleFileUpload = ({ base64 }) => {
        setDocumentFile(base64);
    };
    return (
        // <div className="mt-5">
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <h3>Project info</h3>

        //             <TextField
        //                 label="Project Name"
        //                 id="p_name"
        //                 name="p_name"
        //                 value={project_name}
        //                 onChange={onChangeProjectName}
        //                 variant="outlined"
        //                 size="small"
        //                 sx={{ color: "#64c5b1" }}
        //             />

        //             <TextField
        //                 id="p_desc"
        //                 name="p_desc"
        //                 value={project_description}
        //                 onChange={onChangeProjectDesc}
        //                 label="Project description"
        //                 variant="outlined"
        //                 size="small"
        //             />
        //         </div>
        //         <div>
        //             <div className="input-file">
        //                 <label htmlFor="documentFile">Document File: </label>
        //                 <FileBase64
        //                     value={documentFile}
        //                     type="file"
        //                     multiple={false}
        //                     onDone={({ base64 }) => setDocumentFile({ documentFile: base64 })}
        //                 /></div>
        //         </div>
        //         <hr />

        //         {/* ------------------------- */}

        //         <div>
        //             <h3>Members</h3>
        //             {members.map((member, index) => (
        //                 <div key={index}>
        //                     <label htmlFor={`member-email-${index}`}>Email</label>

        //                     <Select
        //                         sx={{ marginRight: "35px" }}
        //                         type="email"
        //                         id={`member-email-${index}`}
        //                         name="email"
        //                         value={member.email}
        //                         onChange={(e) => handleMemberChange(index, e)}
        //                     >
        //                         <MenuItem value="">
        //                             <em>none</em>
        //                         </MenuItem>
        //                         {Array.isArray(mem) &&
        //                             mem.map((data) => (
        //                                 <MenuItem key={data.id} value={data.email}>
        //                                     {data.email}
        //                                 </MenuItem>
        //                             ))}
        //                     </Select>
        //                     <label htmlFor={`member-id-${index}`}>ID</label>
        //                     <Select
        //                         type="text"
        //                         id={`member-id-${index}`}
        //                         name="id"
        //                         value={member.id}
        //                         onChange={(e) => handleMemberChange(index, e)}
        //                     >
        //                         <MenuItem value="">
        //                             <em>None</em>
        //                         </MenuItem>
        //                         {Array.isArray(mem) &&
        //                             mem.map((data) => (
        //                                 <MenuItem key={data.id} value={data.id}>
        //                                     {data.name}
        //                                 </MenuItem>
        //                             ))}
        //                     </Select>
        //                 </div>
        //             ))}
        //             <Button
        //                 type="button"
        //                 onClick={handleAddMember}
        //                 variant="contained"
        //                 sx={{ backgroundColor: "#64c5b1" }}
        //             >
        //                 Add Member
        //             </Button>
        //             <Button
        //                 type="button"
        //                 onClick={(index) => handleDeleteMember(index)}
        //                 variant="contained"
        //                 sx={{ backgroundColor: "#64c5b1" }}
        //             >
        //                 Delete Member
        //             </Button>
        //         </div>

        //         {/*  */}
        //         <hr />

        //         <div>
        //             <h3>tasks</h3>
        //             {tasks.map((task, index) => (
        //                 <div key={index}>

        //                     <TextField
        //                         type="text"
        //                         id={`task-name-${index}`}
        //                         name="taskname"
        //                         value={task.taskname}
        //                         onChange={(e) => handleTaskChange(index, e)}
        //                         label="Task name"
        //                         variant="outlined"
        //                         size="small"
        //                     />

        //                     <Select
        //                         placeholder="member name"
        //                         type="text"
        //                         id={`givento-member-id-${index}`}
        //                         name="givento"
        //                         value={task.givento}
        //                         onChange={(e) => handleTaskChange(index, e)}
        //                         variant="outlined"
        //                         size="small"
        //                     >
        //                         <MenuItem value="">
        //                             <em>None</em>
        //                         </MenuItem>
        //                         {Array.isArray(mem) &&
        //                             mem.map((data) => (
        //                                 <MenuItem key={data.id} value={data.id}>
        //                                     {data.name}
        //                                 </MenuItem>
        //                             ))}
        //                     </Select>

        //                     <TextField
        //                         type="text"
        //                         id={`taskdescription-member-id-${index}`}
        //                         name="taskdescription"
        //                         value={task.taskdescription}
        //                         onChange={(e) => handleTaskChange(index, e)}
        //                         label="Task description"
        //                         variant="outlined"
        //                         size="small"
        //                     />

        //                     <TextField
        //                         type="text"
        //                         id={`taskstatus-member-id-${index}`}
        //                         name="taskstatus"
        //                         value={task.taskstatus}
        //                         onChange={(e) => handleTaskChange(index, e)}
        //                         label="Task Status"
        //                         variant="outlined"
        //                         size="small"
        //                     />
        //                     <div className="input-file">
        //                         <FileBase64

        //                             id={`taskinstructionfile-member-id-${index}`}
        //                             name="taskinstructionfile"
        //                             value={task.taskinstructionfile}
        //                             type="file"
        //                             multiple={false}
        //                             onDone={({ base64 }) =>
        //                                 handleTaskChange(index, {
        //                                     target: {
        //                                         name: "taskinstructionfile",
        //                                         value: base64,
        //                                     },
        //                                 })
        //                             }
        //                         />
        //                     </div>
        //                 </div>
        //             ))}

        //             <Button
        //                 type="button"
        //                 onClick={handleAddTask}
        //                 variant="contained"
        //                 sx={{ backgroundColor: "#64c5b1" }}
        //             >
        //                 Add Task
        //             </Button>
        //             <Button
        //                 type="button"
        //                 onClick={(index) => handleDeleteTask(index)}
        //                 variant="contained"
        //                 sx={{ backgroundColor: "#64c5b1", marginLeft: "10px" }}
        //             >
        //                 Delete Task
        //             </Button>
        //         </div>
        //         {/*  */}

        //         <Button
        //             type="submit"
        //             variant="contained"
        //             sx={{
        //                 backgroundColor: "#64c5b1",

        //                 marginTop: "15px",
        //             }}
        //         >
        //             Submit
        //         </Button>
                
        //     </form>
        // </div>

        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <PostCards
                    cardtitle="Project info"
                    content={
                        <div className="row">
                            <div className="col">
                                <InputFieldpost label="Project Name" id="p_name"
                                    name="p_name"
                                    value={project_name}
                                    onChange={onChangeProjectName} />
                                <InputFieldpost id="p_desc"
                                    name="p_desc"
                                    value={project_description}
                                    onChange={onChangeProjectDesc}
                                    label="Project Description" />
                            </div>
                            <div className="col">
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
                                <DelBtn onClick={(index) => handleDeleteMember(index)} />
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
                                    <InputFieldpost label="Task Name" type="text"
                                        id={`task-name-${index}`}
                                        name="taskname"
                                        value={task.taskname}
                                        onChange={(e) => handleTaskChange(index, e)} />

                                    <TextArea type="text"
                                        id={`taskdescription-member-id-${index}`}
                                        name="taskdescription"
                                        value={task.taskdescription}
                                        onChange={(e) => handleTaskChange(index, e)} />
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
                                    <div>
                                        <UploadBtn id={`taskinstructionfile-member-id-${index}`}
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
                                    <DelBtn onClick={(index) => handleDeleteTask(index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                />

                <SubmitBtn type="submit" />
            </form>
        </div>
    );
};

export default Update;
