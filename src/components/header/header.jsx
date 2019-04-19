import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    return (<header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">Home</a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">About</a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">Resume</a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">Works</a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
              <div className="container">
                <h1 className="animate fullname responsive-headline">
                  <span>M</span>
                  <span>y</span>&nbsp;<span>N</span>
                  <span>a</span>
                  <span>m</span>
                  <span>e</span>&nbsp;<span>I</span>
                  <span>s</span>&nbsp;<span>M</span>
                  <span>O</span>
                  <span>N</span>
                  <span>A</span>
                </h1>
                <h3 className="job-title">
                  I'm a Front-end developer
                </h3>
                <h3 className="my-links">
                  Find me at
                  <a href="https://www.linkedin.com/in/mona-moghaddas-0a05696b/" target="_blank"> Linkedin </a>
                   or learn more  <a className="smoothscroll" href="#about"> about me</a>
                </h3>
              </div>
            <hr/>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/mona.moghaddas.7" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mona-moghaddas-0a05696b/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/monamoghaddas/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/monamoghaddas" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>

      </header>
      )
  }
}

export default Header;
