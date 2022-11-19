import React from 'react'
import { Link } from 'react-router-dom';

function slider() {
  return (
    <div>
      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <div className="countdown">
                  <span id="clock" />
                </div>
                <h1>Contracts Management System</h1>
                <p className="p-large">
                  to easily manage and monitor all contracts during the contract
                  life cycle. By doing so you will be able to reduce costs and
                  risks
                </p>
                <Link className="btn-solid-lg page-scroll" to="/Register">
                  REGISTER
                </Link>
                <Link className="btn-outline-lg page-scroll" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide mx-auto "
          data-bs-ride="carousel "
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/details-slide-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/details-slide-2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/details-slide-3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

       
      </header>
    </div>
  );
}

export default slider