import React from 'react'
import PropTypes from 'prop-types'

class Resume extends React.Component {
  render() {
    return (<section id="resume">
      {/* Education
      ----------------------------------------------- */
      }
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Azad University of IRAN</h3>
              <p className="info">Bachlor in Computer Engineering
                <span>•</span>
                <em className="date">July 2008</em>
              </p>
              <p>
                Headquartered in Tehran, Iran, the Islamic Azad University is the world's sixth-largest university.It has an enrollment of 1.3 million students. Since its inception in 1982, it has grown both physically and academically to become one of the largest higher education institutions globally. Over the years, IAU has promoted 'higher education for all' as its key objective. IAU has two independent and 31 state university branches across Iran, and four branches in other countries: the U.A.E., the United Kingdom, Lebanon and Afghanistan The certificates issued by this university are recognized by the Ministry of Science, Research and Technology. Azad University admits students through the National Wide Entrance Examination held by the National (Iranian) Organization of Educational Testing.
              </p>
            </div>
          </div>
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>School of Programming (FAD)</h3>
              <p className="info">Some Degrees in Programming
                <span>•</span>
                <em className="date">March 2013</em>
              </p>
              <p>
                The company is beyond the knowledge of the first specialized consulting center - Visual Studio .NET & SQL ,Programming,Server support and training in Iran. In August 2000, with the aim of expanding the knowledge of software and preparing software professionals for optimal use of Microsoft .Net environment. It was established and further, according to the need for the labor market, training courses for analyzing and designing software, Java and Android, and more recently the network were added to our training web courses.
              </p>
            </div>
          </div>
          {/* item end */}
        </div>
        {/* main-col end */}
      </div>
      {/* End Education */}
      {/* Work
      ----------------------------------------------- */
      }
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Kater(Monark Group), Vancouver, Canada</h3>
              <p className="info">Front end Developer
                <span>•</span>
                <em className="date">September 2019 - January 2020</em>
              </p>
              <p>Developing Front-End of a new application(Driver's onboarding) and adding features to existing applications.</p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Maternity and Parental leave, Vancouver, Canada</h3>
              <p className="info">Front end Developer and designer
                <span>•</span>
                <em className="date">February 2018 - August 2019</em>
              </p>
            </div>
          </div>
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Plan Box, Montreal, Canada</h3>
              <p className="info">Front end Developer and designer
                <span>•</span>
                <em className="date">October 2015 - February 2018</em>
              </p>
              <p>
                Design and Add new feature to applications(Using Javascripts,Html,Css,Sass,animations). Adding new features with ReactJS(Notification of events which happened to each idea related to that person,Profile page,A page of several ideals which the design looked like netflix movies lists,There were couple of rows of ideas and on hover of each tile it became larger and ability to do like,favorite,..) Converting the mocks to the codes. R&D, Test and develop new technologies. Test and debug applications. Some c# experience to access to db to show on the UI layer. Preparing Mock ups for different clients and start coding after approving.
              </p>
            </div>
          </div>
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>REOL,Montreal,Canada</h3>
              <p className="info">Front end Developer
                <span>•</span>
                <em className="date">May 2015 - September 2015</em>
              </p>
              <p>
                Converting the Mocks to the codes for couple of real states websites Updating or adding pages in wordpress for some clients. Work with Javascript libraries CSS,HTML,JavaScript,Photoshop,Wordpress,API,Responsive Design(using bootstrap or media queries)
              </p>
            </div>
          </div>
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Coginov,Montreal,Canada</h3>
              <p className="info">Front end Developer and designer
                <span>•</span>
                <em className="date">October 2014 - April 2015</em>
              </p>
              <p>
                Design and Add new features and pages to application. Work with Javascript libraries CSS,HTML,JavaScript,Photoshop,Wordpress,API,Responsive Design C#
              </p>
            </div>
          </div>
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Scania(Mammut Diesel),Tehran,Iran</h3>
              <p className="info">Front end Developer
                <span>•</span>
                <em className="date">Augest 2012 - April 2014</em>
              </p>
              <p>
                Design and Add new features and pages to entire ERP modules. Work with Javascript libraries CSS,HTML,JavaScript,Photoshop,Wordpress,Responsive Design,DevExpress

              </p>
            </div>
          </div>
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>More Companies</h3>
              <p className="info">Front end Developer
                <span>•</span>
                <em className="date">July 2008 - Augest 2012</em>
              </p>
            </div>
          </div>
          {/* item end */}
        </div>
        {/* main-col end */}
      </div>
      {/* End Work */}
      {/* Skills
      ----------------------------------------------- */
      }
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>My skills are as below and beside them I have skills in responsive design,working with API,Version Control,mySql,Adobe xd and Photoshop.
          </p>
          <div className="bars">
            <ul class="skills">
              <li>
                <span class="bar-expand reactJs"></span>
                <em>React</em>
              </li>
              <li>
                <span class="bar-expand restApi"></span>
                <em>Rest API</em>
              </li>
              <li>
                <span class="bar-expand styledComponent"></span>
                <em>Styled Component</em>
              </li>
              <li>
                <span class="bar-expand responsive"></span>
                <em>Responsive Design(Bootstrap,Media Queries)</em>
              </li>
              <li>
                <span class="bar-expand html5"></span>
                <em>HTML5</em>
              </li>
              <li>
                <span class="bar-expand css3"></span>
                <em>CSS3</em>
              </li>
              <li>
                <span class="bar-expand less-sass"></span>
                <em>Less/Sass</em>
              </li>
              <li>
                <span class="bar-expand html"></span>
                <em>Html</em>
              </li>
              <li>
                <span class="bar-expand css"></span>
                <em>CSS</em>
              </li>
              <li>
                <span class="bar-expand javaScript"></span>
                <em>JavaScript</em>
              </li>
              <li>
                <span class="bar-expand jquery"></span>
                <em>jQuery</em>
              </li>
              <li>
                <span class="bar-expand wordpress"></span>
                <em>Wordpress</em>
              </li>
            </ul>
          </div>{/* end skill-bars */}
        </div>
        {/* main-col end */}
      </div>
      {/* End skills */}
    </section>);
  }
}

export default Resume;
