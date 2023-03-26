import React from 'react'
import './benefits.css'
import SchemaIcon from '@mui/icons-material/Schema';
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

            <div className="oneBen">
              <div className="num">1</div>
              <div className="benDes">hello</div>

            </div>
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
