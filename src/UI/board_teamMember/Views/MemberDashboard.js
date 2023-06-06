import React from 'react'
import MyCard from '../../board_teamLeader/DASHBOARD/MyCard'
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StickyHeadTable from '../../board_teamLeader/leader_components/datatable/DataTable';
import { Bar } from 'react-chartjs-2';

import { useSelector } from 'react-redux';
import DataChart from '../../board_teamLeader/leader_components/datatable/DataChart';
import PChart from './PChart';
const MemberDashboard = () => {
    //  const todos = useSelector((state) => state.todos.todos);
    
 
    const projects = useSelector((state) => state.project.projects);

    let allTasks =[];
    projects.forEach(project => {
      if (project?.tasks) {
        allTasks = allTasks.concat(project.tasks);
      }
    });
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
    const ChartComponent = () => {
      const data = {
        labels: ['Projects', 'Members', 'Tasks'],
        datasets: [
          {
            label: 'Number',
            data: [10, 5, 15],
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      };
    
      return <Bar data={data} />;
    };
    

  return (
    <>
    <div
      className="mt-5 container"
      style={{
        overflow: "visible",
      }}
    >
      <h3 className='text-center m-5'>Dashboard</h3>
     <div className='row justify-content-evenly'>
      <MyCard logo={<AssignmentIcon/>} noOftasks={projects.length} title="number of projects"/>
      {/* <MyCard logo={<AssignmentIcon/>} noOftasks={task.length} title="number of tasks"/> */}
     <MyCard logo={<TaskIcon/>} 
      noOftasks={allTasks.length} 
     title="number of tasks"/>


<div className=' row mt-5 justify-content-evenly'>
  <div className='col' >
    <div className='row justify-content-center' style={{
      padding:'20%',
      width:'100%'
    }}>
      <h4> Tasks Graph</h4> <br>
      </br>
      <DataChart tasksStatus={tasksStatus} />  
    </div>
  
  </div>
  <div className='col '>
  <div className='row justify-content-center' style={{
      padding:'20%',
      width:'100%'
    }}>
 
    </div>
  </div>
      </div>
   
     </div>

  




    </div>
  </>
  )
}

export default MemberDashboard