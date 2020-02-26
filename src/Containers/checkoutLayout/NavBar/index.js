import React from "react";
import { Row, Col, Affix } from "antd";
import "./style.css";

class NavBar extends React.Component {
  render() {
    return (
      // <div className="navWrapper">
      <Affix offsetTop={0}>
        <Row className="topBar navWrapper">
          <Col xl={6} lg={10} md={12} sm={6} xs={10}>
            <img
              className="logo-offer"
              src={require("../../../Images/tiptopvacation_logo.png")}
            />
          </Col>
          <Col className="navContact" xl={8} lg={0} md={0} sm={8} xs={0}>
            <div className="header-center ">
              <div className="call-now">
                <div className="contact-phone">
                  <img
                    alt="Call Now 1-702-707-6622"
                    src="https://tiptopvacation.com/img/phone-call.png"
                  />
                </div>
                <div className="more-info">
                  <div className="need-help">Need Help Booking?</div>
                  <br />
                  <br />
                  <div>
                    <a className="phone-link" href="tel:1-702-707-6622">
                      1-702-707-6622
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={10} lg={10} md={12} sm={10} xs={0}>
            <button className="bonus-gift-button">
              <img src={require("../../../Images/gift.png")} />
              Bonus Gift <br />
              <br />
              <br /> Activated!
            </button>
          </Col>
        </Row>
        {/* <Row>
          <Col lg={10}>
            <button
              style={{ fontSize: 11, height: 35 }}
              class="bonus-gift-button"
            >
              <img src={require("../../Images/gift.png")} />
              Bonus Gift <br />
              <br />
              <br /> Activated!
            </button>
          </Col>
        </Row> */}
      </Affix>
    );
  }
}

export default NavBar;
