import { Typography } from '@mui/material'
import React from 'react'
import SecHeader from '../Components/SecHeader'
import MyCard from '../DASHBOARD/MyCard'

const MyDashboard = () => {
  return (
    <>
    <SecHeader>Dashboard</SecHeader>
    <div style={{padding:'10rem',
     marginTop:'0%',width:"70%", 
    //  border:'1px solid red', 
     backgroundColor:'#F3F4F3', height:200}}>
      {/* <h1>Hello from dashboard</h1> */}
      
    <MyCard/>
    </div>
    </>
  )
}

export default MyDashboard
