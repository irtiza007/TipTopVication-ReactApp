import React, { useState } from "react";
import {
  Row,
  Col,
  Steps,
  Calendar,
  Switch,
  // Form,
  // Input,
  // Select,
  Button,
  Icon,
  Tooltip,
  Typography,
  message
} from "antd";
import * as Yup from "yup";
import "./style.css";
import { useMutation } from "@apollo/react-hooks";
import { Form, Input, Select, SubmitButton, Checkbox } from "formik-antd";
import { Formik, Field } from "formik";
import { CREATE_LEAD } from "../../graphql/mutations/createLeads.muations";
import { useHistory } from "react-router-dom";
import PhoneInput from "../Common/phoneInput";
import moment from "moment";
const { Step } = Steps;
const { Option } = Select;
const { Text } = Typography;

const stepStyle = {
  marginBottom: 60,
  boxShadow: "0px -1px 0 0 #e8e8e8 inset",
  marginTop: "5%"
};

const SelectDates = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    children: 0,
    adults: 0,
    policy: false
  };

  const [createLead] = useMutation(CREATE_LEAD);
  const [calenderState, setCalenderState] = useState(true);
  const [dates, setDates] = useState(moment());

  const history = useHistory();

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(3)
      .required("First name is required"),
    lastName: Yup.string()
      .min(3)
      .required("Last name is required"),
    phone: Yup.string().required("Phone is Required"),
    email: Yup.string()
      .email()
      .required("Email is requried"),
    children: Yup.number()
      .min(0)
      .required("No Of Children Required"),
    adults: Yup.number()
      .min(0)
      .required("No Of adults Required"),
    policy: Yup.boolean()
      .default(false)
      .required()
  });
  const onPanelChange = (value, mode) => {
    console.log("Value", value);
    console.log("Mode", mode);
  };

  const handleSubmit = async (values, actions) => {
    if (!values.policy) {
      actions.setSubmitting(false);
    }
    try {
      const { firstName, lastName, email, phone, children, adults } = values;
      localStorage.setItem("selectDates", JSON.stringify(values));

      let data = {
        firstName,
        lastName,
        phone,
        email,
        noOfChildren: String(children),
        noOfadults: String(adults)
      };

      if (calenderState) {
        data = {
          ...data
          // checkinDate,
          // checkoutDate
        };
      }

      const {
        data: {
          createLead: { id: leadId }
        }
      } = await createLead({
        variables: {
          ...data
        }
      });
      localStorage.setItem("leadId", leadId);
      message.success("Success :)");
      actions.setSubmitting(false);
      history.push("/checkout");
    } catch (error) {
      message.error("Opps! An Error Occured");
      console.log("Opps an error occurred", error);
    }
  };

  const ErrorIcon = err => (
    <div
      style={{
        display: "inline-block !important",
        marginTop: "5px !important"
      }}
    >
      <Tooltip title={err}>
        <Icon
          type="close-circle"
          style={{
            color: "#cf1322"
          }}
        />
      </Tooltip>
    </div>
  );
  return (
    <div>
      <div className="selectDates">
        <Row>
          <Col lg={8}>
            <h4 className="vacation-description">Cancun, MX</h4>
            <p className="listing-title">Cancun Dream Vacation for 2</p>
          </Col>
          <Col lg={8}>
            <div className="price-side-inner">
              <div className="my-rating"></div>
              <p style={{ fontSize: "16px" }} className="retail-price">
                Compare From: <span className="original-price">$1799.99</span>
              </p>
              <p style={{ fontSize: "16px", marginTop: "-10px" }}>
                <strong>Price per family</strong>
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="price-side-inner">
              <p
                style={{ fontSize: "35px", color: "rgb(144, 14, 89)" }}
                className="checkout-retail-price"
              >
                $249
              </p>
            </div>
          </Col>
          <Col lg={24}>
            <Steps type="navigation" size="small" current={0} style={stepStyle}>
              <Step title="Order Details" status="process" />
              <Step title="Payment Details" status="process" />
            </Steps>
          </Col>
          <Col style={{ backgroundColor: "white", padding: "10px" }} lg={11}>
            <div className="checkout-billing-info">
              Have your dates?
              <Switch
                style={{ float: "right" }}
                checkedChildren="YES"
                unCheckedChildren="NO"
                onChange={st => setCalenderState(st)}
                defaultChecked
              />
            </div>

            {calenderState ? (
              <span>
                <Calendar
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  onChange={date => {
                    setDates(date);
                    // console.log("Date", date);
                  }}
                  value={dates}
                  id="calander"
                />
              </span>
            ) : (
              <div className="image-box">
                <div className="image-box__background"></div>
                <div className="image-box__overlay"></div>
                <div className="image-box__content">
                  <center>
                    <h1
                      style={{
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        letterSpacing: "8px"
                      }}
                    >
                      BONUS CRUISE ACTIVATED
                    </h1>
                  </center>
                </div>
              </div>
            )}
            {calenderState && (
              <>
                <hr />
                <br />
                <Row>
                  <Col lg={12}>
                    <h2 className="booking-days-title">Checkin Date</h2>
                    <h2 className="booking-days-date">14 January</h2>
                  </Col>
                  <Col lg={12}>
                    <h2 className="booking-days-title">Checkout Date</h2>
                    <h2 className="booking-days-date">18 January</h2>
                  </Col>
                </Row>
                <Row>
                  <Col lg={24}>
                    <div className="booking-days-container">
                      5 Days 4 Nights
                    </div>
                  </Col>
                </Row>
              </>
            )}
            <hr />

            <br />
            <br />
            <Row>
              <Col lg={24}>
                <h3 className="booking-contact-text">
                  Need help? Contact us now{" "}
                </h3>
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
            <br />
            <br />
            <hr />
            <Row>
              <Col lg={24}>
                <div className="travel-now  d-flex justify-content-center">
                  All bookings have a 14 day money back guarantee and 12 months
                  to travel.
                </div>
              </Col>
            </Row>
            <br />
          </Col>
          <Col
            style={{
              backgroundColor: "white",
              marginLeft: "30px",
              padding: "10px"
            }}
            lg={12}
          >
            <div className="checkout-billing-info">Primary Traveller</div>
            <Formik
              validationSchema={schema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values }) => (
                <Form style={{ padding: "20px" }}>
                  <Row>
                    <Col lg={12}>
                      <span className="checkout-billing-title">First Name</span>
                      <Input
                        name="firstName"
                        style={{ width: "95%" }}
                        placeholder="Full Name"
                        suffix={
                          errors.firstName && touched.firstName ? (
                            ErrorIcon(errors.firstName)
                          ) : (
                            <span />
                          )
                        }
                      />
                    </Col>
                    <Col lg={12}>
                      <span className="checkout-billing-title">Last Name</span>
                      <Input
                        name="lastName"
                        style={{ width: "95%" }}
                        placeholder="Full Name"
                        suffix={
                          errors.lastName && touched.lastName ? (
                            ErrorIcon(errors.lastName)
                          ) : (
                            <span />
                          )
                        }
                      />
                    </Col>
                    <Col lg={24}>
                      <br />
                      <span className="checkout-billing-title">Phone</span>
                      <>
                        <Field name="phone" component={PhoneInput} />
                        {errors.phone && touched.phone ? (
                          <Text type="danger">{errors.phone}</Text>
                        ) : (
                          <span />
                        )}
                      </>
                    </Col>
                    <Col lg={24}>
                      <br />
                      <span className="checkout-billing-title">Email</span>
                      <Input
                        style={{ width: "97%" }}
                        placeholder="email"
                        name="email"
                        suffix={
                          errors.email && touched.email ? (
                            ErrorIcon(errors.email)
                          ) : (
                            <span />
                          )
                        }
                      />
                      <span style={{ fontSize: "12px" }}>
                        We'll never share your email with anyone else.
                      </span>
                      <hr style={{ marginTop: "10px" }} />
                    </Col>
                    <Col lg={24}>
                      <div className="checkout-billing-info">
                        Number of Travelers
                      </div>
                    </Col>
                    <Col style={{ padding: "20px" }} lg={12}>
                      <span style={{ fontSize: "18px" }}>Adults</span>
                      <br />
                      <Select name="adults">
                        <Option value={0}>0</Option>
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                      </Select>
                    </Col>
                    <Col style={{ padding: "20px" }} lg={12}>
                      <span style={{ fontSize: "18px" }}>Children</span>
                      <br />
                      <Select name="children">
                        <Option value={0}>0</Option>
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                      </Select>
                    </Col>
                    <Col lg={24}>
                      <center>
                        <p style={{ fontSize: "14px" }}>
                          <Checkbox
                            style={{ marginRight: "10px" }}
                            name="policy"
                          >
                            I have read and agree to the{" "}
                            <a>Terms and Conditions</a> and{" "}
                            <a>Privacy Policy</a>
                          </Checkbox>
                        </p>
                        {!values.policy && touched.policy && (
                          <Text
                            type="danger"
                            style={{ marginBottom: "5px", fontSize: "20px" }}
                          >
                            {" "}
                            Must Agree to the policy
                          </Text>
                        )}
                      </center>
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
                        Continue Booking
                      </SubmitButton>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SelectDates;
