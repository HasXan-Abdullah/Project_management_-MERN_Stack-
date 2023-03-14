
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate  } from 'react-router-dom';
import {  add_project } from '../../../actions/project';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import GetTeamMember from "../projects/GetTeamMember";

const MyPost = () => {
const members = GetTeamMember().members;
console.log(members);
    let navigate = useNavigate();
    const [content, setContent] = useState("");
    let user = window.localStorage.getItem("user")
  
    useEffect(() => {
      user = user ? JSON.parse(user) : navigate('/login'); 
     
      setContent(user.user);
  
      console.log(user.user._id);
    
  
     
     
    }, []);

    const [team_members, setTeam_members] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    console.log(team_members)
    const filteredTeam_members = team_members.filter(
      (member) => member.role ==="Member"
    );
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
    const [memberId1, setMemberId1] = useState("");
    const onChangeMemberId1 = (e) => {
      const member_Id1 = e.target.value;
      setMemberId1(member_Id1);
    };
     const [memberId2, setMemberId2] = useState("");
     const onChangeMemberId2 = (e) => {
       const member_Id2 = e.target.value;
       setMemberId2(member_Id2);
     };
      const [memberId3, setMemberId3] = useState("");
      const onChangeMemberId3 = (e) => {
        const member_Id3 = e.target.value;
        setMemberId3(member_Id3);
      };
    const [leaderId, setLeaderId] = useState("");
    const onChangeLeaderId = (e) => {
      const leader_Id = e.target.value;
      setLeaderId(leader_Id);
    };
    const handleSubmit = (e) => {
   
 

        dispatch(
          
          add_project(
            project_name,
            project_description,
            memberId1,
            memberId2,
            memberId3,
            leaderId
          )
        )
          .then(() => {
            alert("data Entered");
          })
          .catch((err) => {
            console.log({ err });
          });
        
      } 
    
  return (
    <>
      <div className="mt-5">
        <h1>Post a project </h1>
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {filteredTeam_members.map((member) => (
              <li key={member._id}>
                {member.username}: Ids :{member._id}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Project Name: </label>
          <input
            id="p_name"
            name="p_name"
            value={project_name}
            onChange={onChangeProjectName}
          />
          <br />
          <br />
          <label>Project Description: </label>
          <input
            id="p_desc"
            name="p_desc"
            value={project_description}
            onChange={onChangeProjectDesc}
          />
          <br />
          <br />
          <label>Member Id1: </label>
          <input
            id="memberId1"
            name="memberId1"
            value={memberId1}
            onChange={onChangeMemberId1}
          />
          <br />
          <br />
          <label>Member Id2: </label>
          <input
            id="memberId2"
            name="memberId2"
            value={memberId2}
            onChange={onChangeMemberId2}
          />
          <br />
          <br />
          <label>Member Id3: </label>
          <input
            id="memberId3"
            name="memberId3"
            value={memberId3}
            onChange={onChangeMemberId3}
          />
          <br />
          <br />
          <label>Leader ID: </label>
          <input
            id="LeaderId"
            name="LeaderId"
            value={leaderId}
            onChange={onChangeLeaderId}
          />
          <input type="submit" />
        </form>

        {/* example  */}
        <div>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Array.isArray(members) &&
              members.map((member) => (
                <MenuItem value={member.id}>{member.email}</MenuItem>
              ))}
          </Select>
        </div>
      </div>
    </>
  );
}

export default MyPost
