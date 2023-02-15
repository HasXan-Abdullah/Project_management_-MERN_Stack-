import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Projects = () => {
     let navigate = useNavigate();
     const [content, setContent] = useState("");
     let user = window.localStorage.getItem("user");

     useEffect(() => {
       user = user ? JSON.parse(user) : navigate("/login");

       setContent(user.user);

       console.log(user.user._id);
     }, []);
     const [matchingData, setMatchingData] = useState([]);
     useEffect(() => {
       const storedId = user.user._id;
       const apiUrl = "http://localhost:4000/users/viewproject";
       axios
         .post(apiUrl)
         .then((res) => {
           const apiData = res.data.result;
           let matchingData = [];
           for (let i = 0; i < apiData.length; i++) {
             if (storedId === apiData[i].leaderId) {
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
        <div key={data._id}>
          
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                 Project Name: {data.project_name}
                </Typography>
                <Typography variant="h5" >
                  Details
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data.project_description}
                </Typography>
                <Typography variant="body1">
                  Team Members
                  <br />
                  memberId1 name : {data.memberId1}
                  <br />
                  memberId2 name : {data.memberId2}
                  <br />
                  memberId3 name : {data.memberId3}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Card Button</Button>
              </CardActions>
            </Card>
         
        </div>
      ))}
    </div>
  );
};

export default Projects;