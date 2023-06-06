import React from 'react'
import TaskAccordion from './TaskAccordion'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostCards from '../../board_teamLeader/leader_components/postFormCards/PostCards';
import ChatComponent from '../../Components/ChatComponent';

const Submissions = () => {
  
    const { projects, loading } = useSelector((state) => state.project);


  
    if (loading) {
      return <div>Loading projects...</div>;
    }
  return (
    <div className='mt-5'>
      <ChatComponent/>
        <PostCards
        cardtitle="Submissions"
        content={<TaskAccordion project={projects}/>}
        />
        
    </div>
  )
}

export default Submissions