import React from 'react'
import './tools.css';
const Tools = () => {
  return (
    <section className="toolsSection">
    <div id="tools" className="pt---60 ">
      <div className="benDiv">
        <div className="text-center mb-5">
          <h1 className="fontSize">
            <span className="colorText">Tools</span>
          </h1>
        </div>
        <div className="row1-container">
            <div className="box box-down mongo">
              <h2>Mongo DB</h2>
              <p>Non-relational document database that provides support for JSON-like storage.</p>
              <img
                className="f-right"
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                alt=""
              />
            </div>

            <div className="box express">
              <h2>Express</h2>
              <p>
              Express is a node js web application framework that provides broad features for building web and mobile applications.
              </p>
              <img
                className="f-right"
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt=""
              />
            </div>

            <div className="box box-down react">
              <h2>ReactJS</h2>
              <p>
              Free and open-source front-end JavaScript library for building user interfaces based on components.
              </p>
              <img
                className="f-right"
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt=""
              />
            </div>
          </div>
          <div className="row2-container">
            <div className="box node">
              <h2>NodeJS</h2>
              <p>open source, cross-platform runtime environment for executing JavaScript code.</p>
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
