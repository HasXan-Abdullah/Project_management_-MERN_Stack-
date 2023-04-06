import React from 'react'
import './benefits.css'
import SchemaIcon from '@mui/icons-material/Schema';
import FlagIcon from '@mui/icons-material/Flag';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ConstructionIcon from '@mui/icons-material/Construction';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Paper } from '@mui/material';

const Benefits = () => {
  return (
    <section className="benefitSection">
      <div id="benefits" className="pt---60 ">
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
            <div className="oneBen">
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
              
            </div>
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
