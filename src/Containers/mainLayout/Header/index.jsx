import React from "react";
import { Col, Row, Affix } from "antd";
import "./index.css";
import { Typography } from "antd";

const { Paragraph } = Typography;

function Header() {
  return (
    // <Affix offsetTop={0} className="nav-wrapper">
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="h-100 nav-wrapper"
    >
      <Col md={24} lg={19} xs={20}>
        <Col lg={4} md={0} />
        <Col lg={20} md={24}>
          <div className="logo">
            <img src={require("./../../../Images/logo-white.png")} />
          </div>
        </Col>
      </Col>

      <Col
        lg={5}
        md={24}
        xs={24}
        style={{
          backgroundColor: "#13264C",
          color: "#fff"
        }}
        className="h-100"
      >
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{ height: "100%" }}
        >
          <Col>
            <span
              className="reserveText barlow-font d-block"
              style={{ fontWeight: "600", fontSize:"18px", }}
            >
              BOOK NOW:
            </span>
            <a href="tel:8776339793" className="reserve-btn barlow-font">
              877-633-9793
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    // </Affix>
  );
}

export default Header;
