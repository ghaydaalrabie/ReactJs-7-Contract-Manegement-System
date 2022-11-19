import React from "react";
import Slider from './Slider.js' ; 


function Main() {
  return (
    
    <>
      <div>
      <Slider/>
        {/* Registration */}
        <div id="register" className="form-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">{/* end of text-container */}</div>{" "}
              {/* end of col */}
              <div className="col-lg-6">
                {/* Registration Form */}
                <div className="form-container">
                  <form
                    id="registrationForm"
                    data-toggle="validator"
                    data-focus="false"
                  >
                    <div className="form-message">
                      <div id="rmsgSubmit" className="h3 text-center hidden" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="instructor" className="basic-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="https://www.fwrv.com/wp-content/uploads/2021/03/IDA-Work-For-Hire.jpg"
                  alt="alternative"
                />
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h2>About contract management software</h2>
                  <p>
                    Contract management software is a program or series of
                    related programs for storing and managing legal agreements
                    such as contracts with vendors, leases and licensing
                    agreements.
                  </p>
                  <p>
                    Teaching students all about the beste SEO techniques is
                    something I love to do as a full-time job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="description" className="basic-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>A smart contract management system</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled li-space-lg first">
                  <li className="media">
                    <i className="bullet">1</i>
                    <div className="media-body">
                      <h4> affordable (low cost per user per month)</h4>
                      <p>
                        One of the keys of great SEO is having a mobile friendly
                        website which works smoothly on all devices
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="bullet">2</i>
                    <div className="media-body">
                      <h4>
                        very extensive task and email notification functionality
                      </h4>
                      <p>
                        It's not enough anymore to find relevant industry
                        keywords and write huge amounts of content{" "}
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="bullet">3</i>
                    <div className="media-body">
                      <h4>extensive reporting/export functionality</h4>
                      <p>
                        Write well structured and understandable articles not
                        just a mix of paragraphs that contain keywords
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled li-space-lg second">
                  <li className="media">
                    <i className="bullet">4</i>
                    <div className="media-body">
                      <h4>
                        very flexible and configurable (you can create your own
                        fields and templates)
                      </h4>
                      <p>
                        A good action plan comes out of understanding where your
                        current position is and the environment
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="bullet">5</i>
                    <div className="media-body">
                      <h4>Keep updated with the latest changes</h4>
                      <p>
                        Google changes it's search indexing algorithm twice a
                        year so it's important to stay updated with news
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="bullet">6</i>
                    <div className="media-body">
                      <h4>extensive reporting/export functionality</h4>
                      <p>
                        Learn which are the most important search engine ranking
                        factors and optimize your website accordnigly
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="details-lightbox"
          className="lightbox-basic zoom-anim-dialog mfp-hide"
        >
          <div className="container">
            <div className="row">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close x-button"
              >
                
              </button>
              <div className="col-lg-8">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="images/details-lightbox.jpg"
                    alt="alternative"
                  />
                </div>
                {/* end of image-container */}
              </div>
              {/* end of col */}
              <div className="col-lg-4">
                <h3>SEO Training Course</h3>
                <hr />
                <h5>For everybody</h5>
                <p>
                  The training course is dedicates to anyone passionate about
                  the web and in need of improving their current online
                  presence.
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Link building framework</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Know your current position</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Partnering with blogs</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Naming your images</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Creating good sitemaps</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">Writing for humans</div>
                  </li>
                </ul>
                <a
                  className="btn-solid-reg mfp-close page-scroll"
                  href="#register"
                >
                  SIGN UP
                </a>
                <a
                  className="btn-outline-reg mfp-close as-button"
                  href="#screenshots"
                >
                  BACK
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="basic-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2> Video Presentation</h2>
                {/* Video Preview */}
                <div className="image-container">
                  <div className="video-wrapper">
                    <video
                      width="{320}"
                      height="{240}"
                      poster="/images/video.jpg"
                      controls
                    >
                      <source src="images/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* end of video-wrapper */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Employees Member </h2>
                <h4 className="p-heading">
                  Meet Our Team 
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://trello.com/1/cards/63466852e1c29c012bd727a2/attachments/637603818bb2c2049b091a34/download/Ali-Kholani.png"
                      className="card-image"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Ali Kholani </h4>
                    <p>Computer Engineer</p>
                    <p>Director of the Department</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://trello.com/1/cards/6346681c4e2eca02bc7a0e4a/attachments/636ff2d607206501352a9ead/download/AlQassem_Oweida.jpg"
                      className="card-image"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">AlQaseem Oweida</h4>
                   
                    <p>Financial Manager</p>
                    <p>Director of the Department</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      className="card-image"
                      src="https://trello.com/1/cards/63466839efed1900e7e3b84c/attachments/637013cc03825404854d2bf6/download/index.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Hassan Abu Hashem </h4>
                    <p>Computer Engineer</p>
                    <p>Director of the Department</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://trello.com/1/cards/6346683b7ece2b02d8669c06/attachments/636fc0bc58711a00d09b03cd/download/IMG-20220213-WA0002.jpg"
                      className="card-image"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Hamza Juwaihan </h4>
                    <p>Computer Engineer</p>
                    <p>Director of the Department</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://trello.com/1/cards/63466832b03bab00b4d349bc/attachments/634a9c33ae845f05fc718a8b/download/fre.jpg"
                      className="card-image"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Mohammad Aldebei</h4>
                    <p>Civil Engineer</p>
                    
                    <p>Director of the Department</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://trello.com/1/cards/63466823c8554b152a2cc0b2/attachments/636fd7d3244d5200b3a9511f/download/4876.jpg"
                      className="card-image"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Ziad Abazeed </h4>
                    <p>Software Engineer</p>
                    <p>Director of the Department</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="date" className="basic-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="text-container">
                  <h2>Contract Management System</h2>
                  <p>
                    Contract management software allows users to track and
                    manage contracts through the various stages of their
                    lifecycles. Among other things, this type of software helps
                    businesses with renewal notifications, compliance
                    management, capturing digital signatures and managing
                    contract templates, as well as document storage and version
                    control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
