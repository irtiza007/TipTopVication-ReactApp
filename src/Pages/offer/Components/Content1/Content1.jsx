import React from "react";
import "./Content1.css";

export default function Hero() {
  return (
    <div className="container mt-2">
      <div className="row">
        <section className="sell-packages">
          <div className="container">
            <div className="row">
              <div className="col-md-7 coll center-sec center-sec-inverse">
                <div className="gateway-detail-box detail-box ">
                  <span className="low-titlee">
                    So How Can We Sell Our Packages So Low?
                  </span>
                  <p className="shadoww">
                    Simple! Our travellers agree to participate in a breakfast
                    or lunch Resort Preview showcasing all of the Amenities
                    &amp; Benefits of the resort they visit.
                  </p>
                  <p className="shadoww">
                    It’s fun, informative and something the entire family can
                    enjoy. In return, they never pay more then $499 for any of
                    our featured Resort Getaways. It’s that simple and the
                    savings are worth it!
                  </p>
                  <a
                    href="#all-offers"
                    className="gateway-detail-link button-primry"
                  >
                    YES! Show Me The Deals Now
                    <span className="link-sub">
                      Reserve Your Deal Today &amp; Book Anytime In The Next 12
                      Months!
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="gateway-image-box">
                  <img
                    src={require("../../../../Images/excited-low-deals.png")}
                    className="img-responsive"
                    alt="TipTop Vacation - Excited for Savings!"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
