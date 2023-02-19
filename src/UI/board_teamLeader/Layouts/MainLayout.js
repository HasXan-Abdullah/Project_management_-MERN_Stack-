import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'
import MyHeader from '../Components/MyHeader'
import SecHeader from '../Components/SecHeader'
import SideBar from '../Components/SideBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyDashboard from '../Views/MyDashboard'
import MyPost from '../Views/MyPost'
import MyOverview from '../Views/MyOverview'
import MyDiscussion from '../Views/MyDiscussion'
import MyTask from '../Views/MyTask'
import TimeTracking from '../Views/TimeTracking'
import Scheduling from '../Views/Scheduling'
import Reporting from '../Views/Reporting'
import SideLink from '../../global_components/SideLinks/SideLink'
// import MyDashboard from '../board_teamLeader/Views/MyDashboard'
// import MyPost from '../board_teamLeader/Views/MyPost'
// import MyOverview from '../board_teamLeader/Views/MyOverview'
// import MyDiscussion from '../board_teamLeader/Views/MyDiscussion'
// import MyTask from '../board_teamLeader/Views/MyTask'
// import TimeTracking from '../board_teamLeader/Views/TimeTracking'
// import Scheduling from '../board_teamLeader/Views/Scheduling'
// import Reporting from '../board_teamLeader/Views/Reporting'
// import SideLink from '../../global_components/SideLinks/SideLink'


const MainLayout = () => {
  return (
    <div>
      <SideLink/>
       {/* <SideBar/> */}
          {/* <MyHeader/> */}
        <Routes> 
          
      
        <Route index element={<MyDashboard />} />
        {/* <Route path="/" element={<MyDashboard />} /> */}
        <Route path="post" element={<MyPost />} />
        <Route path="overview" element={<MyOverview />} />
        <Route exact path="discussion" element={<MyDiscussion />} />
        <Route exact path="task" element={<MyTask />} />
        <Route exact path="timetracking" element={<TimeTracking />} />
        <Route exact path="scheduling" element={<Scheduling />} />
        <Route exact path="reporting" element={<Reporting />} />
    
    </Routes>
      
      
      {/* <Footer/> */}
      
     
    </div>
  )
}

export default MainLayout
