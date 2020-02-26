import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Row, Col, Typography } from "antd";
import { Select, Input, SubmitButton, Form, DatePicker } from "formik-antd";
import Autocomplete from "react-google-autocomplete";
import Card from "react-credit-cards";
import * as Yup from "yup";
import moment from "moment";
const { MonthPicker } = DatePicker;
const { Option } = Select;
const { Text } = Typography;

export default () => {
  const [isFocused, setFoucs] = useState("name");

  const schema = Yup.object().shape({
    address: Yup.string().required("Address Required"),
    zip: Yup.string().required("Zip Required"),
    creditNumber: Yup.string().required("Credit Number Required").length(16,"number shouldn't be greater then 16"),
    cvv: Yup.string().required("CVV Required").length(4,"cvv must not be greater 4 digits"),
    expirationDate: Yup.string().required("Date Required")
  });
  const {firstName,lastName} = JSON.parse(localStorage.getItem("selectDates"))
  return (
    <Col
      style={{
        backgroundColor: "white",
        padding: "0px 5px"
      }}
      lg={12}
      md={11}
      sm={12}
    >
      <div className="checkout-billing-info">Billing Info</div>

      <Formik
        initialValues={{
          address: "",
          zip: "",
          creditNumber: "",
          expirationDate: "",
          cvv: ""
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log("Values", values);
          actions.setSubmitting(false);
          return;
        }}
      >
        {({ errors, touched, setFieldValue, values }) => {
          return (
            <Form style={{ padding: "20px" }}>
              <Row>
                <Col lg={24}>
                  <span className="checkout-billing-title">Your Address</span>

                  <Field
                    name="address"
                    render={() => (
                      <Autocomplete
                        style={{
                          width: "95%",
                          padding: "10px",
                          border: "1px solid #d9d9d9a8",
                          borderRadius: "3px"
                        }}
                        onPlaceSelected={place => {
                          setFieldValue("address", place.formatted_address);
                        }}
                        types={["(regions)"]}
                        componentRestrictions={{ country: "ru" }}
                      />
                    )}
                  />
                  {errors.address && touched.address ? (
                    <Text type="danger" style={{ margin: "5px auto" }}>{errors.address}</Text>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={24}>
                  <br />
                  <span className="checkout-billing-title">
                    Billing Zip Code
                  </span>
                  <Input
                    style={{ width: "95%" }}
                    placeholder="Zip Code"
                    name="zip"
                  />

                  {errors.zip && touched.zip ? (
                    <Text type="danger" style={{ margin: "5px auto", display:"block" }}>{errors.zip}</Text>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={24}>
                  <br />
                  <div className="checkout-billing-info">Payment Info</div>
                </Col>
                <Col lg={12}>
                  <br />
                  <span className="checkout-billing-title">Credit Number</span>
                  <Input
                    style={{ width: "97%" }}
                    placeholder="Credit Card Number"
                    name="creditNumber"
                    onFocus={() => {
                      setFoucs("number");
                    }}
                  />

                  {errors.creditNumber && touched.creditNumber ? (
                    <Text type="danger" style={{ margin: "5px auto" }}>
                      {errors.creditNumber}
                    </Text>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={12}>
                  <br />
                  <span className="checkout-billing-title">CVV</span>
                  <Input
                    style={{ width: "97%" }}
                    name="cvv"
                    placeholder="CVV"
                    onFocus={() => {
                      setFoucs("cvc");
                    }}
                    onBlur={()=>{
                      setFoucs("name")
                    }}
                  />
                  {errors.cvv && touched.cvv ? (
                    <Text type="danger" style={{ margin: "5px auto" }}>{errors.cvv}</Text>
                  ) : (
                    ""
                  )}
                </Col>
                <Col sm={24} style={{ marginTop: "5px" }}>
                  <div>Expiration Date</div>
                  <MonthPicker
                    name="expirationDate"
                    onFocus={() => {
                      setFoucs("expiry");
                    }}
                  />

                  {errors.expirationDate && touched.expirationDate ? (
                    <Text  type="danger" style={{ margin: "5px auto" }}>
                      {errors.expirationDate}
                    </Text>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={24} style={{ margin: "20px auto" }}>
                  <Card
                    cvc={values.cvv}
                    expiry={values.expirationDate ? moment(values.expirationDate).format("MM-YYYY"):""}
                    number={values.creditNumber}
                    name={`${firstName} ${lastName}`}
                    focused={isFocused}
                  />
                </Col>
                <Col lg={24}>
                  <SubmitButton
                    style={{
                      width: "100%",
                      backgroundColor: "#900e59",
                      color: "white",
                      height: "70px",
                      borderRadius: "10px",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  >
                    Complete Booking
                  </SubmitButton>
                </Col>
                <Col lg={24}>
                  <center>
                    <br />
                    <p style={{ fontSize: "12px" }}>
                      All Bookings have a 14 day money back guarantee and 24
                      months to travel
                    </p>
                  </center>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Col>
  );
};
