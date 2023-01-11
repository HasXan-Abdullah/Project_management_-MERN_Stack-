import { Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import React from "react";

const SideBar = () => {

  return (
    <div>
      <Drawer variant="permanent" sx={{ zIndex: 11111, width: "13rem" }}>
        {/* <Toolbar>
           <Typography variant="p">Hello worllddddddddd</Typography>
        </Toolbar> */}
        <Toolbar sx={{ width: "13rem" }} />
        {/* <Toolbar sx={{width:'13rem'}}> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* <Box sx={{display: "flex",alignItems:'center',border: "1px solid ",justifyContent:'center'}}> */}
            


            <List
            component={Link}
            to="/"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <HomeOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText>
                  Dashboard
                </ListItemText>
              </ListItem>
            </List>


            <List
            component={Link} to="post"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <AddBoxOutlinedIcon/>
                </ListItemIcon>
                <ListItemText>
                  Create
                </ListItemText>
              </ListItem>
            </List>


            <List
            component={Link}
            to="discussion"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <WorkspacesOutlinedIcon/>
                </ListItemIcon>
                <ListItemText>
                 Discussion
                 </ListItemText>
              </ListItem>
            </List>


            <List
            component={Link}
            to="task"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <TaskAltOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText>
                 <span> Task </span>
                </ListItemText>
              </ListItem>
            </List>


            <List
            component={Link}
            to="timetracking"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <AccessTimeOutlinedIcon/> 
                </ListItemIcon>
                <ListItemText>
                 <span> Time Tracking </span>
                </ListItemText>
              </ListItem>
            </List>



            <List
            component={Link}
            to="scheduling"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <DateRangeOutlinedIcon/> 
                </ListItemIcon>
                <ListItemText>
                 <span> Scheduling </span>
                </ListItemText>
              </ListItem>
            </List>


            <List
            component={Link}
            to="reporting"
            sx={{
              color: "rgb(20,67,57)",
              backgroundColor: " rgba(0,0,0,0)",
              display:'flex',
              justifyContent:'space-around',
              textDecoration: 'none'
            }}
            >
              <ListItem button>
                <ListItemIcon sx={{color:'#64c5b1'}}>
                  <FlagCircleOutlinedIcon/>
                </ListItemIcon>
                <ListItemText>
                 <span> Reporting </span>
                </ListItemText>
              </ListItem>
            </List>
            
              
        </Box>
        {/* </Toolbar> */}
      </Drawer>
    </div>
  );
};

export default SideBar;
