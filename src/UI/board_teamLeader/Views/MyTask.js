import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SecHeader from '../Components/SecHeader';
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
    <SecHeader>Tasks</SecHeader>
    <div style={{padding:'10rem', marginLeft:'260px', marginTop:'0%',width:"52.5%",  backgroundColor:'#F3F4F3'}}>
      <h1>Hello from Task</h1>
    </div>
    </>
  )
}

export default MyTask
