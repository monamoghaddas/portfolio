
import React from 'react'
import PropTypes from 'prop-types'

class Portfolio extends React.Component {
  render () {
    return (

      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/demo-micron1.jpg"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/grupo-home-leaderboards.PNG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/netflix3.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/netflix4.PNG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/innovationgame.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/challenge-grupo.PNG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/Member-Tile.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/Message – conversation.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Planbox</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-09" title>
                    <img alt src="images/portfolio/reol.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Reol</h5>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/demo-micron1.jpg" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/grupo-home-leaderboards.PNG" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/netflix3.png" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/netflix4.PNG" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/innovationgame.png" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/challenge-grupo.PNG" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/Member-Tile.png" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/Message – conversation.png" alt />
            <div className="description-box">
              <h4>Planbox</h4>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-09" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/reol.png" alt />
            <div className="description-box">
              <h4>Reol</h4>
            </div>
          </div>
        </div> {/* row End */}
      </section>
    );
  }
}

export default Portfolio;
