
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import React from "react";
import SideLink from "../global_components/SideLinks/SideLink";
import { useSelector } from "react-redux";

const LeaderSideBar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
<div>


    {user.user.category !== 'member' ? 
    
    <div>
    <SideLink
      title="Dashboard"
      link="/home"
      icon_name={<HomeOutlinedIcon />}
    />

    <SideLink
      title="Post a Project"
      link="post"
      icon_name={<AddBoxOutlinedIcon />}
    />





    <SideLink title="Projects" link="projects" icon_name={< FolderOpenIcon/>} />
    <SideLink
      title="Member's Submissions"
      link="membersubmission"
      icon_name={<TaskAltOutlinedIcon />}
    />
  </div>
    : <div>
    <SideLink
      title="Dashboard"
      link="/home"
      icon_name={<HomeOutlinedIcon />}
    />
     <SideLink
      title="Projects"
      link="projects"
      icon_name={<FolderOpenIcon />}
    />
         <SideLink
      title="Submissions"
      link="submissions"
      icon_name={<TaskAltOutlinedIcon />}
    />


  </div>}
   </div>
  );
};

export default LeaderSideBar;
