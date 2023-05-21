import React from 'react'
// import Footer from '../Components/Footer'
// import MyHeader from '../Components/MyHeader'
// import SecHeader from '../Components/SecHeader'
// import SideBar from '../../Components/SideBar'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import SideMenu from '../leader_components/sidebar/SideMenu'
import { useEffect } from 'react';
import Todo from '../Views/Todos';

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
