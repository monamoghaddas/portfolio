import React from 'react'
import PropTypes from 'prop-types'

class About extends React.Component {
  render () {
    return(
      <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>More than nine years of experience in front end and development in different environments
Strong understanding of responsive design/development techniques and principles.
Experience with React and another Javascript framework.
Experienced with GIT and related workflows
Efficiency working with teams and independently; self-motivated, task oriented and organized.
Ability of creation of mock ups, converting design into html and implementing apps and web solutions
Responsible person with good communication and collaboration capability.


              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Mona Moghaddas</span><br />
                    <span>2330 Shaughnessy str.<br />
                      Port Coquitlam,BC, CA V3C 0B5
                    </span><br />
                  <span>(604) 537 9757</span><br />
                    <span>moghaddas.mona@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
    )
  }
}

export default About;
