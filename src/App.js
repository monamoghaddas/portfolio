import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="Portfolio">
        <header className="pf-header overlay">
          <div className="container">
            <div className="animate fullname">
			           <span>M</span><span>y</span>&nbsp;<span>N</span><span>a</span>
			           <span>m</span><span>e</span>&nbsp;<span>I</span><span>s</span>&nbsp;<span>M</span><span>O</span>
                 <span>N</span><span>A</span>
            </div>
            <div className="job-title">
              I'm a Front-end developer
            </div>
            <div className="my-links">
              Find me at <a href="https://www.linkedin.com/in/mona-moghaddas-0a05696b/">Linkedin</a>
            </div>
        </div>
        </header>
        <div className="main">
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default App;
