import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'
import MyHeader from '../Components/MyHeader'
import SecHeader from '../Components/SecHeader'
import SideBar from '../Components/SideBar'

const MainLayout = () => {
  return (
    <div>
        <SideBar/>
        
      <MyHeader/>
      
      {/* <Footer/> */}
      
     
    </div>
  )
}

export default MainLayout
