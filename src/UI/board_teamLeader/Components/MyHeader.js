import { AppBar, Avatar, Box, Toolbar } from '@mui/material'
// import SearchBar from 'material-ui-search-bar'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React, { useState, useEffect, useCallback } from "react";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MySearch from './MySearch';
import SecHeader from './SecHeader';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import SimpleButton from '../../global_components/Button/SimpleButton'
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { logout } from "../../../actions/auth";


import './component.css'
const MyHeader = () => {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    let user = window.localStorage.getItem("user")
    user = user ? JSON.parse(user) : navigate('/login');
   
    setContent(user.user);

    console.log(user);
  

   
   
  }, []);
  return (
    <div>
      <AppBar elevation={0}>
            <Toolbar sx={{ bgcolor:'rgb(255, 255, 255)' , color:'black'}}>
                {/* FYP */}
                {/* <SearchBar/> */} 
                {/* <MySearch/> */}
                
                <Box sx={{
                          ml:20 ,
                          display:'flex',
                          justifyContent:'space-between',
                          width:'5%',
                          mt:0,
                          
                          
                         }}>
                <NotificationsNoneIcon sx ={{color:'rgb(153,153,153)' , fontSize:'1.3rem', "fontWeightLight": 300, cursor:'pointer'}}/>
                
                </Box>
                {/* <Avatar 
                    alt="?"
                    src="/static/images/avatar/1.jpg"
                    sx={{width: 30, height: 30, ml:12 ,mr:12}}
                /> */}
                            <Link style={{
                              textDecoration:'none',
                            }} to="/login" className="nav-link">
                
                <Button sx={{
                 color:"#64c5b1",
                 
                 borderRadius:'16px',
                 border:"1px solid #64c5b1", 
                 ml:12 ,mr:12}} 
                 onClick={logOut} variant="outlined">Logout</Button>
              </Link>
              <p>{content.name}</p>
            </Toolbar>

              
        </AppBar>
        
    </div>
  )
}
 
export default MyHeader
