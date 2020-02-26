import React from "react";
import { Row, Col, Steps, Statistic } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import OrderDetails from "./orderDetails";
import Form from "./form";

const { Step } = Steps;
const stepStyle = {
  marginBottom: 60,
  boxShadow: "0px -1px 0 0 #e8e8e8 inset",
  marginTop: "5%"
};

// const { Countdown } = Statistic;
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const Checkout = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  // componentDidMount = () => {
  //   this.countdown("countDown", 10, 0);
  // };

  // countdown = (elementName, minutes, seconds) => {
  //   var element, endTime, hours, mins, msLeft, time;

  //   function twoDigits(n) {
  //     return n <= 9 ? "0" + n : n;
  //   }

  //   function updateTimer() {
  //     msLeft = endTime - +new Date();
  //     if (msLeft < 1000) {
  //       element.innerHTML = "Time is up!";
  //     } else {
  //       time = new Date(msLeft);
  //       hours = time.getUTCHours();
  //       mins = time.getUTCMinutes();
  //       element.innerHTML =
  //         (hours ? hours + ":" + twoDigits(mins) : mins) +
  //         ":" +
  //         twoDigits(time.getUTCSeconds());
  //       setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
  //     }
  //   }

  //   element = document.getElementById(elementName);
  //   endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  //   updateTimer();
  // };

  const orderDetails = (
    <Link style={{ color: "black" }} to="/">
      Order Details
    </Link>
  );
  const paymentDetails = (
    <Link style={{ color: "black" }} to="/checkOut">
      Payment Details
    </Link>
  );

  return (
    <div>
      <div className="selectDates">
        <Row>
          <Col lg={24}>
            <Steps type="navigation" size="small" current={1} style={stepStyle}>
              <Step title={orderDetails} status="completed" />
              <Step title={paymentDetails} status="process" />
            </Steps>
          </Col>

          <Form />

          <OrderDetails />
        </Row>
      </div>
    </div>
  );
};

export default Checkout;
