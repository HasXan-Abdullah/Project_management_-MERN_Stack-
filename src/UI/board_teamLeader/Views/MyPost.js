import { Typography } from '@mui/material';
import SecHeader from '../Components/SecHeader'
import axios from "axios";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { addproject } from '../../../actions/project';

const MyPost = () => {

    let navigate = useNavigate();
    const [content, setContent] = useState("");
    let user = window.localStorage.getItem("user")
  
    useEffect(() => {
      user = user ? JSON.parse(user) : navigate('/login');
     
      setContent(user.user);
  
      console.log(user.user._id);
    
  
     
     
    }, []);
    const [matchingData, setMatchingData] = useState([]);
    useEffect(() => {
      const storedId = user.user._id;
      const apiUrl="http://localhost:4000/users/viewproject";
      axios.post(apiUrl)
        .then(res => {
          const apiData = res.data.result;
          let matchingData = [];
          for (let i = 0; i < apiData.length; i++) {
            if (storedId === apiData[i].member) {
              matchingData.push(apiData[i]);
            }
          }
          setMatchingData(matchingData);
          console.log(matchingData)
        })
        .catch(err => console.error(err));
    }, []);
    const dispatch = useDispatch();

    const [project_description, setProjectDesc] = useState("");
    const onChangeProjectDesc = (e) => {
      const p_Desc = e.target.value;
      setProjectDesc(p_Desc);
    };
    const [memberId, setMemberId] = useState("");
    const onChangeMemberId = (e) => {
      const member_Id = e.target.value;
      setMemberId(member_Id);
    };
    const [leaderId, setLeaderId] = useState("");
    const onChangeLeaderId = (e) => {
      const leader_Id = e.target.value;
      setLeaderId(leader_Id);
    };
    const handleSubmit = (e) => {
   
  

        dispatch(addproject(project_description,memberId,leaderId))
          .then(() => {
            alert("data Entered")
          })
          .catch((err) => {
           
            console.log({ err });
          });
      } 
    
  return (
    <>
    <SecHeader>Create Project</SecHeader>
    <div style={{padding:'10rem', marginLeft:'260px', marginTop:'0%',width:"52.5%",  backgroundColor:'#F3F4F3'}}>
      <h1>Post a project </h1>

    <form onSubmit={handleSubmit}>
      <label>Project Description: </label>
      <input 
      id="p_desc"
      name="p_desc"
      value={project_description}
      onChange={onChangeProjectDesc}

      />
      <br/><br/>
            <label>Member Id: </label>
      <input 
      id="memberId"
      name="memberId"
      value={memberId}
      onChange={onChangeMemberId}

      />
      <br/><br/>
            <label>Leader ID: </label>
      <input 
      id="LeaderId"
      name="LeaderId"
      value={leaderId}
      onChange={onChangeLeaderId}

      />
      <input  type="submit"/>
    </form>


    </div>
    </>
  )
}

export default MyPost
