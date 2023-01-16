import React from 'react'
import  './feature.css';
const Features = () => {
  return (
    <section className="featureSection">
      <div id="scrollspyHeading3" className="pt--60 ">
        <div className="boxesDiv">
          <div className="text-center mb-5">
            <h1 className="fontSize">
              <span className="colorText">Features</span>
            </h1>
          </div>
          <div className="row1-container">
            <div className="box box-down cyan">
              <h2>Supervisor</h2>
              <p>Monitors activity to identify project roadblocks</p>
              <img
                className="f-right"
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
            </div>

            <div className="box red">
              <h2>Team Builder</h2>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img
                className="f-right"
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
            </div>

            <div className="box box-down blue">
              <h2>Calculator</h2>
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
              <img
                className="f-right"
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
            </div>
          </div>
          <div className="row2-container">
            <div className="box orange">
              <h2>Karma</h2>
              <p>Regularly evaluates our talent to ensure quality</p>
              <img
                className="f-right"
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features