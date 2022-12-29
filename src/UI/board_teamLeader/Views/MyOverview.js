import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MyOverview = () => {
    const theme= createTheme({
        typography:{
          fontFamily:[
            'Koulen', 'cursive'
          ]
        }
      });
  return (
    <div style={{padding:'5rem', marginLeft:'50px', backgroundColor:'#F3F4F3'}}>
      <h1>Hello from Overview</h1>
    </div>
  )
}

export default MyOverview
