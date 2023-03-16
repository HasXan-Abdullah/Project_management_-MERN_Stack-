import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SecHeader from "../../Components/SecHeader";
import Projects from '../projects/Projects';
const MyTask = () => {
    const theme= createTheme({
        typography:{
          fontFamily:[
            'Koulen', 'cursive'
          ]
        }
      });
  return (
    <>
    
    
    <div style={{padding:'10rem', marginLeft:'260px', marginTop:'0%',width:"52.5%",  backgroundColor:'#F3F4F3'}}>
      <h3>Projects</h3>
      <div>
        projects list
        <Projects/>
      </div>
    </div>
    </>
  )
}

export default MyTask
