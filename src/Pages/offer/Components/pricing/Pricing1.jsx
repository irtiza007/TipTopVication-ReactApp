import React from "react";
import "./pricing1.css";

//sample data for propssssss
// const pricingData = [
//   {
//     imageUrl: "../../Images/bonus-cruise.jpg",
//     discountPercentage: 89,
//     destination: "ORLANDO, FL",
//     tripTitle: "Orlando Getaway for 4",
//     tripTitle2: "Orlando Adventure 3 Day 2 Night Deluxe Package",
//     price: "1599.99",
//     price2: "169"
//   },
//   {
//     imageUrl: "../../Images/bonus-cruise.jpg",
//     discountPercentage: 86,
//     destination: "BRANSON, MO",
//     tripTitle: "Experience Branson 3 Nights",
//     tripTitle2: "Branson Getaway for 4 VIP Upgrade",
//     price: "894.99",
//     price2: "129"
//   },
//   {
//     imageUrl: "../../Images/bonus-cruise.jpg",
//     discountPercentage: 80,
//     destination: "LAS VEGAS, NV",
//     tripTitle: "Las Vegas Getaway For 4",
//     tripTitle2: "Amazing Las Vegas 3 Day 2 Night Las Vegas Family Package",
//     price: "857.99",
//     price2: "169"
//   }
// ];
export default function Pricing() {
  return (
    <div className="container mt-4 justify-content-center">
      <div className="row d-flex flex-row align-items-stretch container-offers wrapper">
        {/* <div className=""> */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card rounded">
            <a
              className="img-card "
              href="https://tiptopvacation.com/offer/orlando-getaway-for-4"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/pages/4-day-orlando-theme-park-adventure-details.png"
                alt=" Orlando Getaway for 4 "
              />
            </a>
            <div className="card-content ">
              <h5 className="card-title text-left pt-2">
                <a href="https://tiptopvacation.com/offer/orlando-getaway-for-4">
                  Orlando Getaway for 4
                </a>
              </h5>
              <p className="h6 text-left pt-1">
                Orlando Adventure 3 Day 2 Night Deluxe Package
              </p>
              <hr />
              <div className="pack_price d-flex text-center align-self-center justify-content-around">
                <div className="align-self-center">
                  <p className="h6" style={{ letterspacing: ".05em" }}>
                    Compare From:
                  </p>
                  <p className="h2">
                    <strike>$1599.99</strike>
                  </p>
                </div>
                <div className="align-self-center">
                  <p
                    style={{
                      color: "#007bff",
                      fontSize: "55px",
                      fontWeight: "bolder"
                    }}
                  >
                    $169*
                  </p>
                </div>
              </div>
              <hr />
              <div className="pack_terms" style={{ paddingBottom: "40px" }}>
                <p>*Resort Preview Rate</p>
                <p>*Taxes &amp; Resort Fees Not Included</p>
              </div>
            </div>

            <div
              className="card-read-more"
              style={{
                bottom: "0",
                position: "absolute",
                width: "100%"
              }}
            >
              <a
                href="https://tiptopvacation.com/offer/orlando-getaway-for-4"
                className="btn btn-link btn-block"
              >
                VIEW OFFER DETAILS!
              </a>
            </div>
            <div className="percent-off-card rounded-right">89% OFF</div>
            <div className="location-card rounded-left">Orlando, FL</div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch ">
          <div className="card rounded ">
            <a
              className="img-card "
              href="https://tiptopvacation.com/offer/experience-branson-3-nights"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/pages/experience-branson-3-nights-details-1565044812.png"
                alt=" Experience Branson 3 Nights "
              />
            </a>
            <div className="card-content ">
              <h5 className="card-title text-left pt-2">
                <a href="https://tiptopvacation.com/offer/experience-branson-3-nights">
                  Experience Branson 3 Nights
                </a>
              </h5>
              <p className="h6 text-left pt-1">
                Branson Getaway for 4 VIP Upgrade
              </p>
              <hr />
              <div className="pack_price d-flex text-center align-self-center justify-content-around">
                <div className="align-self-center">
                  <p className="h6" style={{ letterSpacing: ".05em" }}>
                    Compare From:
                  </p>
                  <p className="h2">
                    <strike>$894.99</strike>
                  </p>
                </div>
                <div className="align-self-center">
                  <p
                    style={{
                      color: "#007bff",
                      fontSize: "55px",
                      fontWeight: "bolder"
                    }}
                  >
                    $129*
                  </p>
                </div>
              </div>
              <hr />
              <div className="pack_terms" style={{ paddingBottom: "40px" }}>
                <p>*Resort Preview Rate</p>
                <p>*Taxes &amp; Resort Fees Not Included</p>
              </div>
            </div>

            <div
              className="card-read-more"
              style={{
                bottom: "0",
                position: "absolute",
                width: "100%"
              }}
            >
              <a
                href="https://tiptopvacation.com/offer/experience-branson-3-nights"
                className="btn btn-link btn-block"
              >
                VIEW OFFER DETAILS!
              </a>
            </div>
            <div className="percent-off-card rounded-right">86% OFF</div>
            <div className="location-card rounded-left">Branson, MO</div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch ">
          <div className="card rounded ">
            <a
              className="img-card "
              href="https://tiptopvacation.com/offer/las-vegas-getaway-for-4"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/pages/las-vegas-getaway-for-2-details.jpg"
                alt=" Las Vegas Getaway For 4 "
              />
            </a>
            <div className="card-content ">
              <h5 className="card-title text-left pt-2">
                <a href="https://tiptopvacation.com/offer/las-vegas-getaway-for-4">
                  Las Vegas Getaway For 4
                </a>
              </h5>
              <p className="h6 text-left pt-1">
                Amazing Las Vegas 3 Day 2 Night Las Vegas Family Package
              </p>
              <hr />
              <div className="pack_price d-flex text-center align-self-center justify-content-around">
                <div className="align-self-center">
                  <p className="h6" style={{ letterSpacing: ".05em" }}>
                    Compare From:
                  </p>
                  <p className="h2">
                    <strike>$857.99</strike>
                  </p>
                </div>
                <div className="align-self-center">
                  <p
                    style={{
                      color: "#007bff",
                      fontSize: "55px",
                      fontWeight: "bolder"
                    }}
                  >
                    $169*
                  </p>
                </div>
              </div>
              <hr />
              <div className="pack_terms" style={{ paddingBottom: "40px" }}>
                <p>*Resort Preview Rate</p>
                <p>*Taxes &amp; Resort Fees Not Included</p>
              </div>
            </div>

            <div
              className="card-read-more"
              style={{
                bottom: "0",
                position: "absolute",
                width: "100%"
              }}
            >
              <a
                href="https://tiptopvacation.com/offer/las-vegas-getaway-for-4"
                className="btn btn-link btn-block"
              >
                VIEW OFFER DETAILS!
              </a>
            </div>
            <div className="percent-off-card rounded-right">80% OFF</div>
            <div className="location-card rounded-left">Las Vegas, NV</div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
