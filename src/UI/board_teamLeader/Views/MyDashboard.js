
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
import DataChart from '../leader_components/datatable/DataChart'
const MyDashboard = () => {

const projects = ProjectData().projects;
let allMembers = [];

projects.forEach(project => {
  if (project?.members) {
    const membersWithoutLeaders = project.members.filter(member => !member.isLeader);
    allMembers = allMembers.concat(membersWithoutLeaders);
  }
});
let allTasks =[];
///
let active = 0;
let pending = 0;
let completed = 0;

projects.forEach(project => {
  if (project?.tasks) {
    project.tasks.forEach(task => {
      if (task.taskstatus === 'Active') {
        active++;
      } else if (task.taskstatus === 'Pending') {
        pending++;
      } else if (task.taskstatus === 'Completed') {
        completed++;
      }
    });
  }
});

const tasksStatus = {
  active,
  pending,
  completed
};

// 
projects.forEach(project => {
  if (project?.tasks) {
    allTasks = allTasks.concat(project.tasks);
  }
});

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
  <div className='row'>
    <div className=' col'><StickyHeadTable/></div>
    <div className='col-lg-4 d-flex justify-content-sm-center justify-content-center'>
      <DataChart tasksStatus={tasksStatus} />
    </div>
  </div>


           

            
        </div>


 

      </div>
    </>
  );
}

export default MyDashboard
