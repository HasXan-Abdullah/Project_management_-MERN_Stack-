
import { Container } from '@mui/system'
import React from 'react'
import SecHeader from '../../Components/SecHeader'
import MyCard from '../DASHBOARD/MyCard'
import InfoCards from '../leader_components/infocards/InfoCards'
import ProjectList from '../projects/ProjectList'
import Test from '../projects/ProjectData'
import ProjectData from '../projects/ProjectData'
import AssignmentIcon from '@mui/icons-material/Assignment';
import StickyHeadTable from '../leader_components/datatable/DataTable'
import TaskIcon from '@mui/icons-material/Task';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const MyDashboard = () => {

const projects = ProjectData().projects;
let allMembers = [];

projects.forEach(project => {
  if (project.members) {
    const membersWithoutLeaders = project.members.filter(member => !member.isLeader);
    allMembers = allMembers.concat(membersWithoutLeaders);
  }
});
let allTasks =[];
projects.forEach(project => {
  if (project.tasks) {
    allTasks = allTasks.concat(project.tasks);
  }
});
console.log(allTasks)
  return (
    <>
      <div
        className="mt-5 container"
        style={{
          overflow: "visible",
        }}
      >
        <h3 className='text-center m-5'>Dashboard</h3>
       <div className='row justify-content-between'>
        <MyCard logo={<AssignmentIcon/>} noOftasks={projects.length} title="number of projects"/>
       <MyCard logo={<PeopleAltIcon/>} noOftasks={allMembers.length} title="number of members" />
       <MyCard logo={<TaskIcon/>} noOftasks={allTasks.length}  title="number of tasks"/>
       
     
       </div>

 <div className='mt-5'>
            <StickyHeadTable/>
        </div>


 

      </div>
    </>
  );
}

export default MyDashboard
