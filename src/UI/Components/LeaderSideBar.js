
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";

import React from "react";
import SideLink from "../global_components/SideLinks/SideLink";

const LeaderSideBar = () => {
  return (
    <div>
      <SideLink
        title="Dashboard"
        link="/home"
        icon_name={<HomeOutlinedIcon />}
      />

      <SideLink
        title="Post"
        link="post"
        icon_name={<AddBoxOutlinedIcon />}
      />

      <SideLink
        title="Overview"
        link="overview"
        icon_name={<FlagCircleOutlinedIcon/>}
      />

      <SideLink
        title="Discussion"
        link="discussion"
        icon_name={<AccessTimeOutlinedIcon />}
      />

      <SideLink title="Task" link="task" icon_name={<TaskAltOutlinedIcon />} />
    </div>
  );
};

export default LeaderSideBar;
