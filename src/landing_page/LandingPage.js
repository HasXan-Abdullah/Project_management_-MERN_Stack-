import React from 'react'
import './landing.css';
import managerPic from '../assets/images/Animation-PNG.png'
import devPic from '../assets/images/imgbin_the-boss-baby-brother-dreamworks-animation-film-png.png'
import taskPic from '../assets/images/Project-Task-PNG-Transparent-Image.png'
import { Button, Paper } from '@mui/material';
import Particle from '../Particle';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
    <Particle/>
        <div>
        <div className='container mainDiv mt--40'>
            <div className='row'>
                <div className='col headingText'>
                    <h1>
                        What is <span className='colorText'>Projectify</span>  ?
                    </h1>
                    <p className='paraText'>
                    A project management system is a combination of methodologies and technologies that assist you with the planning, organizing, and scheduling everything that contributes to the success of a project.                    </p>
                  <Link to='/login'>
                  <button className='startBtn'>Get Started</button>
                  </Link>
                  
                                  </div>
                <div className='col'>
                    <Paper  className='imagesBox' elevation={10}sx={{borderRadius:'20px'}} >
                        <div>
                        <img className='managerPic' src={managerPic} alt="pic"/>
                        <img className='taskPic' src={taskPic} alt="pic"/>
                        <img className='devPic' src={devPic} alt="pic"/>
                        </div>
                    </Paper>
                        
                </div>
            </div>
        </div>
        
    </div>
    </>

  )
}

export default LandingPage