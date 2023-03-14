import React from 'react'
// import Footer from '../Components/Footer'
// import MyHeader from '../Components/MyHeader'
// import SecHeader from '../Components/SecHeader'
// import SideBar from '../../Components/SideBar'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import MyDashboard from '../Views/MyDashboard'
import MyPost from '../Views/MyPost'
import MyOverview from '../Views/MyOverview'
import MyDiscussion from '../Views/MyDiscussion'
import MyTask from '../Views/MyTask'
import TimeTracking from '../Views/TimeTracking'
import Scheduling from '../Views/Scheduling'
import Reporting from '../Views/Reporting'
// import SideLink from '../../global_components/SideLinks/SideLink'
import SideMenu from '../leader_components/sidebar/SideMenu'
import { useEffect } from 'react';

const MainLayout = () => {
   let navigate = useNavigate();
 useEffect(() => {
   
   let user = window.localStorage.getItem("user");
   user = user ? JSON.parse(user) : navigate("/login");



   console.log(user);
 }, []);
  return (
    <div >
 
      <SideMenu />

    </div>
  );
}

export default MainLayout
