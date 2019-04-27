import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render () {
    return (

      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
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
            <ul className="copyright">
              <li>© Copyright 2019 Mona</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
