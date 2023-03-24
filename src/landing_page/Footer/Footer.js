import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footerDiv">
      <footer className="site-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Projectify provides structure and control of the project
                environment so that the agreed activities will produce the right
                services to meet the expectations. It enabling more accurate
                reporting and a more efficient, collaboration-based and
                data-driven work environment. It includes scheduling, reporting,
                submission, to do list, updates about projects, meetups to
                easily.
              </p>
            </div>

            {/* <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
              <li><a href="https://mui.com/material-ui/getting-started/overview/">Material UI</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Java Script</a></li>
              <li><a href="https://reactjs.org/">ReactJS</a></li>
              <li><a href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492&cq_cmp=14412646455&gclid=Cj0KCQiArsefBhCbARIsAP98hXSAjzHB6ltJcXa-lN9GgjynnlIVKKKRNPGsoe1rdZT4m2qILczfeeQaAuZPEALw_wcB">Mongo DB</a></li>
              <li><a href="https://nodejs.org/en/">Node JS</a></li>
            </ul>
          </div> */}

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li className="nav-item">
                  <a className="nav-link" href="#scrollspyHeading1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#scrollspyHeading3">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#scrollspyHeading3">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#scrollspyHeading3">
                    Tools
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <b> Projectify</b>
              </p>
            </div>


          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer