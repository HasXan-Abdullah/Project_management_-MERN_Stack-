import axios from "axios";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
const AssignedTask = () => {
    let navigate = useNavigate();
    const [content, setContent] = useState("");
    let user = window.localStorage.getItem("user")
  
    useEffect(() => {
      user = user ? JSON.parse(user) : navigate('/login');
     
      setContent(user.user);
  
    
    
  
     
     
    }, []);
    const [matchingData, setMatchingData] = useState([]);
    useEffect(() => {
          const storedId = user.user.id;
          console.log(storedId);
      const apiUrl = "http://localhost:3000/v1/projects/getProjects";
      axios
        .get(apiUrl)
        .then((results) => {
          const apiData = results.data.results;
          let matchingData = [];
          for (let i = 0; i < apiData.length; i++) {
            if (
              storedId === apiData[i].memberId1 ||
              storedId === apiData[i].memberId2 ||
              storedId === apiData[i].memberId3
            ) {
              matchingData.push(apiData[i]);
            }
          }
          setMatchingData(matchingData);
          console.log(matchingData);
        })
        .catch((err) => console.error(err));
    }, []);
  
    return (
      <div>
        {matchingData.map((data) => (
          <div key={data.id}>
            {data.project_description} given by Leader Id : {data.leaderId} .
            Leader name : {data.leaderId}
            
          </div>
        ))}
        
      </div>
    );
}

export default AssignedTask
