import React from 'react'
import './benefits.css'
import SchemaIcon from '@mui/icons-material/Schema';
import FlagIcon from '@mui/icons-material/Flag';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ConstructionIcon from '@mui/icons-material/Construction';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Paper } from '@mui/material';

import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const Benefits = () => {
  return (
    <section className="benefitSection">
      <div id="benefits" className="pt---60 contianer">
        <div className="benDiv">
          <div className="text-center mb-5">
            <h1 className="fontSize">
              <span className="colorText">Benefits</span>
            </h1>
          </div>

{/* <div className="paper"> */}
<Paper
                    className="main-cardss"
                    elevation={10}
                    sx={{ borderRadius: "20px", width:'97%', margin:'15px', padding:'3px'}}
                  >
      <div className="ben-div">
          <div className="one-row">
            <div className="one-col">
                  <FlagOutlinedIcon sx={{fontSize:'3rem', color:'#83d0c0'}}/>
                  <h5>Goal Oriented</h5>
                  <p>Keep work and goals organized in one place.<br/>Be able to easily plan projects while taking <br/>previous track record into account.</p>
            </div>

            <div className="one-col">
                  <ManageHistoryIcon sx={{fontSize:'3rem', color:'#83d0c0'}}/>
                  <h5>Efficieny</h5>
                  <p>Eliminate confusion and increase efficiency.<br/>Be able to easily register time on work items <br/>and take people's work schedule into account.</p>
            </div>
          </div>
          <div className="one-row">
            <div className="one-col">
                  <ConstructionIcon sx={{fontSize:'3rem', color:'#83d0c0'}}/>
                  <h5>Team Effectiveness</h5>
                  <p>people are working on the right things at the<br/> right time. Easily document requirements, <br/>specs, directly or via files.</p>
            </div>

            <div className="one-col">
                  <AlignHorizontalLeftIcon sx={{fontSize:'3rem', color:'#83d0c0'}}/>
                  <h5>Team Align</h5>
                  <p>Easily post comments and concerns and easily <br/>communicate with external stakeholders.</p>
            </div>
          </div>
      </div>
            {/* <div className="oneBen">
                <h1> <FlagIcon sx={{fontSize:'3rem'}}/> </h1>
                <p>Keep work and goals organized in one place.</p>
              
            </div>

            <div className="oneBen" id='rightBen'>
                <h1> <ManageHistoryIcon sx={{fontSize:'3rem'}}/> </h1>
                <p>Eliminate confusion and increase efficiency.</p>
              
            </div>

            <div className="oneBen">
                <h1> <ConstructionIcon sx={{fontSize:'3rem'}}/> </h1>
                <p>Improve team effectiveness.</p>
              
            </div>

            <div className="oneBen" id='rightBen'>
                <h1><AlignHorizontalLeftIcon sx={{fontSize:'3rem'}}/></h1>
                <p>Align communications.</p>
              
            </div> */}
            </Paper>
{/* </div>            */}
              {/* <div className='display'>
                <div className="benRow">
                  <div className="circle"><SchemaIcon/></div> 
                  <div className='ben'><h5>Move work forward</h5></div>
                </div>
                <div className="benRow">
                  <div className="circle">2</div> 
                  <div className='ben'><h5>Move work forward</h5></div>
                </div>
              </div>

              <div className='display'>
                <div className="benRow">
                  <div className="circle">3</div> 
                  <div className='ben'><h5>Move work forward</h5></div>
                </div>
                <div className="benRow">
                  <div className="circle">4</div> 
                  <div className='ben'><h5>Move work forward</h5></div>
                </div>
              </div> */}
            
        </div>
      </div>
    </section>
  )
}

export default Benefits
