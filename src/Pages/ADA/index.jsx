import React from "react";
import { Row, Col } from "antd";
import "./ada.css";
export default () => (
  <div className="mainWrapper">
    <Row type="flex" justify="center" align="middle">
      <Col md={20} className="mainContent">
        <div class="privacy-titles">
          <h1 style={{marginBottom:"0px", color:"#13264c"}}>Americans with Disabilities Act (ADA) Notice</h1>
        </div>
        <Col xs={20} offset={2}>
        <div class="privacy-text one-column text-center">
          At VAVacations, we are committed to ensuring that individuals with
          disabilities enjoy full access to our websites. In recognition of this
          commitment, we are in the process of making modifications to increase
          the accessibility and usability of this website, using the relevant
          portions of the Web Content Accessibility Guidelines 2.0 (WCAG 2.0) as
          our standard. Please be aware that our efforts are ongoing. If at any
          time you have difficulty using this website or with a particular web
          page or function on this site, please contact us by phone at
          877-663-9793 and we will make all reasonable efforts to assist you.
        </div>
        </Col>
      </Col>
    </Row>
  </div>
);
