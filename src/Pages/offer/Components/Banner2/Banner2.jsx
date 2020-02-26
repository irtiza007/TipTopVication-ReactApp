import React from "react";
import "./Banner2.css";

export default function Banner2() {
  return (
    <div className="hero-box">
      <div className="hero-box-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="gateway-detail-box detail-box"
              style={{ marginTop: "35vh" }}
            >
              <div className="steps-title-div">
                <span className="steps-title">
                  Luxurious Getaways In Just 4 Simple Steps
                </span>
              </div>
              <p className="steps-text">
                <i className="fa_prepended fa fa-binoculars"></i>
                <b>Step #1: </b>Find Your Perfect Destination Package
              </p>
              <p className="steps-text">
                <i className="fa_prepended fa fa-ticket"></i>
                <b>Step #2: </b>Reserve Your Amazing Price
              </p>
              <p className="steps-text">
                <i className="fa_prepended fa fa-calendar"></i>
                <b>Step #3: </b>Book Your Travel Dates
              </p>
              <p className="steps-text">
                <i className="fa_prepended fa fa-child"></i>
                <b>Step #4: </b>Sit Back &amp; Relax!
              </p>

              <div className="show-all-deals">
                {" "}
                <p>
                  <a href="" className="gateway-detail-link btton-primary">
                    YES! Show Me The Deals Now
                    <span className="link-sub">
                      Reserve Your Deal Today &amp; Book Anytime In The Next 12
                      Months!
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
