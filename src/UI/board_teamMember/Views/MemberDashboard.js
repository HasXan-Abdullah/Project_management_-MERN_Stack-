import React from 'react'
import MyCard from '../../board_teamLeader/DASHBOARD/MyCard'
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StickyHeadTable from '../../board_teamLeader/leader_components/datatable/DataTable';
import { useSelector } from 'react-redux';
const MemberDashboard = () => {
    //  const todos = useSelector((state) => state.todos.todos);

    const projects = useSelector((state) => state.project.projects);
    console.log(projects)
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
     {/* <MyCard logo={<TaskIcon/>} noOftasks={projects.members.length} title="number of tasks"/>
      */}
   
     </div>

<div className='mt-5'>
          
      </div>




    </div>
  </>
  )
}

export default MemberDashboard