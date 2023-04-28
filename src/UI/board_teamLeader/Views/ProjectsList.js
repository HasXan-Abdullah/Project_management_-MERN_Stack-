import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SecHeader from "../../Components/SecHeader";
import Projects from '../projects/Projects';
import PostCards from '../leader_components/postFormCards/PostCards';
const ProjectsList = () => {
    const theme= createTheme({
        typography:{
          fontFamily:[
            'Koulen', 'cursive'
          ]
        }
      });
  return (
    <>
   <PostCards
   cardtitle= "Projects"
   content={

  <div> <Projects/></div>
   }
   />
    </>
  )
}

export default ProjectsList
