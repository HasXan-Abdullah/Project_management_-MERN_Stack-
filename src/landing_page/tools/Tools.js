import React from 'react'
import './tools.css';
const Tools = () => {
  return (
    <section className="toolsSection">
    <div id="tools" className="pt---60 ">
      <div className="benDiv container">
        <div className="text-center mb-5">
          <h1 className="fontSize">
            <span className="colorText">Tools</span>
          </h1>
        </div>
        <div className="row   justify-content-center" >
            <div className="box  mongo">
              <h2>Mongo DB</h2>
              <div className="divcon">
              <p >Non-relational document database that provides support for JSON-like storage.</p>
              </div>
              <div >
                 <img
                className="f-right"
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                alt=""
              />
              </div>
             
            </div>

            <div className="box express">
              <h2>Express</h2>
              <div className="divcon">
              <p>
              Express is a node js web application framework that provides broad features for building web and mobile applications.
              </p>
              </div>
              <img
                className="f-right"
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt=""
              />
            </div>

            <div className="box  react">
              <h2>ReactJS</h2>
                <div className="divcon">
                  <p>
                  Free and open-source front-end JavaScript library for building user interfaces based on components.
                  </p>
                </div>
                    <div className="divpic">
                      <img
                        className="f-right"
                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                        alt=""
                      />
                    </div>
            </div>
                        <div className="box node">
              <h2>NodeJS</h2>
              <div className="divcon">
              <p>open source, cross-platform runtime environment for executing JavaScript code.</p>
              </div>
              <img
                className="f-right"
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt=""
              />
            </div>
          </div>
       

          
      </div>
    </div>
  </section>
  )
}

export default Tools
