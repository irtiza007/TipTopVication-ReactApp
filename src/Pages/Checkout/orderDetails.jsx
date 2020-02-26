import React from "react";
import { Col, Row, Statistic } from "antd";

const { Countdown } = Statistic;

export default () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const onFinish = () => {
    console.log("time up");
  };

  const {firstName,lastName, children, adults, phone, email} = JSON.parse(localStorage.getItem("selectDates"))

  return (
    <Col
      style={{ backgroundColor: "white", marginLeft: "30px" }}
      lg={11}
      md={11}
      sm={10}
    >
      <div className="image-box">
        <div className="image-box__background"></div>
        <div className="image-box__overlay"></div>
        <div className="image-box__content">
          <center>
            <h1
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
              }}
            >
              4 DAY ORLANDO THEME PARK ADVENTURE
            </h1>
          </center>
        </div>
      </div>
      <div style={{ padding: "25px" }}>
        <h3 style={{ fontSize: "18px" }}>Limited Reservations</h3>
        <p style={{ fontSize: "16px" }}>Reserved For:</p>
        <Col span={12} sm={24} className="m-2">
          <Countdown
            style={{ justifyContent: "center", alignItems: "center" }}
            title="Countdown"
            value={deadline}
            onFinish={onFinish}
            className="mx-auto"
            valueRender={val => <h1 style={{ textAlign: "center" }}>{val}</h1>}
          />
        </Col>
        <center>
          <p style={{ fontSize: "16px" }}>
            The <strong>4 Day Orlando Theme Park</strong> is in high demand. No
            worries, we hae reserved booking for 10 minutes!{" "}
          </p>
        </center>
      </div>
      <hr />
      <br />
      <Row>
        <Col lg={24}>
          <h3 style={{ fontSize: "18px", marginLeft: "40px" }}>
            Booking Review
          </h3>
        </Col>
        <Col lg={24}>
          <ul className="pts">
            <li>
              <img src={require("../../Images/tick.png")} />
              <strong>Dates:</strong> 02/22/2019
            </li>
            <li>
              <img src={require("../../Images/tick.png")} />
              <strong>Days:</strong> 4 <strong>Night:</strong> 3{" "}
            </li>
            <li>
              <img src={require("../../Images/tick.png")} />
              <strong>Name: </strong>
              <span>{`${firstName} ${lastName}`}</span>
            </li>
            <li>
              <img src={require("../../Images/tick.png")} />
              <strong>Guests: </strong> 
              <span>{`${adults} Adult(s) ${children} Kid(s)`}</span>
            </li>
            <li>
              <img src={require("../../Images/tick.png")} />
              <strong>Phone: </strong> 
              <span>{phone}</span>
            </li>
            <li>
              <img src={require("../../Images/tick.png")} />
              <strong>Email: </strong> 
              <span>{email}</span>
            </li>
          </ul>
        </Col>
      </Row>
      <hr style={{ marginBottom: "5px" }} />
      <Row style={{ marginBottom: "5px" }}>
        <Col lg={24}>
          <h3 className="booking-contact-text">Need help? Contact us now </h3>
          <center>
            <a
              className="booking-mail-contact"
              href="mailto:booking@tiptopvacation.com"
            >
              booking@tiptopvacation.com
            </a>
          </center>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col style={{ padding: "10px" }} lg={24}>
          <img
            style={{ width: "100%" }}
            src={require("../../Images/cc-accepted.png")}
          />
        </Col>
      </Row>
    </Col>
  );
};
