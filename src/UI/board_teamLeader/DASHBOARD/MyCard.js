import { MenuItem, Paper } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './mycard.module.css';
const MyCard = (props) => {
  return (
    <Paper className={`d-flex justify-content-between w-25 ${style.mainCard}`}>

    
  
      <div className="d-flex">
        <div className={`${style.iconDiv}`}>
             {props.logo}
        </div>
     <div  className={`${style.txtDiv}`}>
        {props.title}
        <br></br>
        {props.noOftasks}
      </div>
      </div>
    
      <div  className={`${style.iconDiv}`}>
        <ArrowForwardIosIcon/>
      </div>

    </Paper>
  );
};

export default MyCard;
