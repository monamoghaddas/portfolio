
import React from 'react'
import PropTypes from 'prop-types'

class Testimonials extends React.Component {
  render () {
    return (

      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>I worked with Mona for 2 years, and she is wonderful to work with.
                         Mona is passionate, motivated and very capable. She is very nice to work
                         with. I find her capable of adapting to new working environments with a
                         very positive attitude towards work. She is definitely a great asset for
                         any team she works with.
                      </p>
                      <cite><a href="https://www.linkedin.com/in/royakalbassi/" target="_blank">Roya Kalbasi</a></cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>Highly skilled front-end web developer. Mona is responsible and a pleasure to work with. Would hire Mona again in the future.
                      </p>
                      <cite><a href="https://www.linkedin.com/in/sasadjolic/" target="_blank">Sasa</a></cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>I worked with Mona for 2 years, and she is wonderful to work with. Mona is passionate, motivated and very capable. She is very nice to work with. I find her capable of adapting to new working environments with a very positive attitude towards work. She is definitely a great asset for any team she works with.
                      </p>
                      <cite><a href="https://www.linkedin.com/in/sdsgraves/" target="_blank">Steve</a></cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>Mona is a talented web developer, hard working and
                        always came to work with a positive attitude. She
                        was able to juggle multiple projects and tasks and
                        always deliver on time. Overall she was a delight
                        to work with, and would be a valuable asset to any team!
                      </p>
                      <cite><a href="https://www.linkedin.com/in/amir-bidva-854b7a75/" target="_blank">Amir</a></cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
    );
  }
}

export default Testimonials;
