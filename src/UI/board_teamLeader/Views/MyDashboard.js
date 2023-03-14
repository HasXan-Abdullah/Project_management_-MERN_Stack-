
import { Container } from '@mui/system'
import React from 'react'
import SecHeader from '../../Components/SecHeader'
import MyCard from '../DASHBOARD/MyCard'
import InfoCards from '../leader_components/infocards/InfoCards'
import ProjectList from '../projects/ProjectList'
import Test from '../projects/ProjectData'
import ProjectData from '../projects/ProjectData'



const MyDashboard = () => {

 const projects = ProjectData().projects;
  return (
    <>
      <div
        className="mt-5"
        style={{
          overflow: "visible",
        }}
      >
        <h3>Dashboard</h3>
        <div>
          <InfoCards
            card_title="No of projects"
            card_content={projects.length}
          />
        </div>
       
        <ProjectList />
      </div>
    </>
  );
}

export default MyDashboard
