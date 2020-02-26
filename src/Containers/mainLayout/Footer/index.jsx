import React from "react";
import { Row, Col } from "antd";
import "./footer.css";
import { Link } from "react-router-dom";
import moment from "moment";

function Footer() {
  return (
    <div>
      <Row>
        <Col md={24} xs={24} className="footer-bg" />
        <Col xs={24} style={{ backgroundColor: "#1FCBD4" }}>
          <Row type="flex" align="middle" justify="center">
            <Col md={12} sm={24} xs={24}>
              <img
                src={require("./../../../Images/logo-footer.png")}
                style={{
                  height: "auto",
                  width: "100%",
                  paddingTop: "50px"
                }}
              />
            </Col>

            <Col lg={20} xs={24} className="footer-text ">
              <p className="text-center barlow-font text-dark footer-p">
                ©{moment().format("YYYY")} VAVacations.com a Division of Czar
                Marketing Group LLC <br /> COPYRIGHT ALL RIGHTS RESERVED ©
                {moment().format("YYYY")}.THIS ADVERTISING MATERIAL IS BEING
                USED FOR THE PURPOSE OF SOLICITING SALES OF <br />
                TIMESHARE INTERESTS OR PLANS. FL SELLER NUMBER IS ST42227.
              </p>

              <p className="text-center footer-p">
                <span
                  className="block"
                  style={{ marginBottom: "20px" }}
                >
                  View{" "}
                  <strong >
                    <Link to="/kings-creek-offer/ada" className="footer-ada">
                      Americans with Disabilities Act (ADA) Notice
                    </Link>
                  </strong>
                </span>
                <span className="text-uppercase block">
                  {/* <img
                //   src="assets/img/equal-housing-logo-black.png"
                  class="pull-right logo-eho"
                  alt="Equal Housing Opportunity"
                /> */}
                  <strong>
                    This advertising material is being used for the purpose of
                    soliciting the sale of timeshare interests.
                  </strong>
                  <br />
                  <strong>
                    This advertising material is being used for the purpose of
                    soliciting the sale of time-share property or interests in
                    time-share property.
                  </strong>
                </span>
              </p>
              <p className="footer-p text-center">
                <Link
                  to="/kings-creek-offer/terms-and-conditions"
                  style={{ color: "#13264c", textDecoration: "underline" }}
                >
                  Terms and Conditions
                </Link>{" "}
                |{" "}
                <Link
                  to="/kings-creek-offer/privacy-policy"
                  style={{ color: "#13264c", textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
