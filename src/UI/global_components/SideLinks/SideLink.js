import HomeOutlined from '@mui/icons-material/HomeOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react'

const SideLink = (props) => {
  return (
    <div>
      <List
        component={Link}
        to={props.link}
        sx={{
          color: "rgb(20,67,57)",
          backgroundColor: " rgba(0,0,0,0)",
          display: "flex",
          justifyContent: "space-around",
          textDecoration: "none",
        }}
      >
        <ListItem button>
          <ListItemIcon sx={{ color: "#64c5b1" }}>
            {props.icon_name}
          </ListItemIcon>
          <ListItemText>{props.title}</ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default SideLink
