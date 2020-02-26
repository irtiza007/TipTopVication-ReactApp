import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Navbar from "./NavBar";
import Footer from "./Footer";
import SelectDates from "../../Pages/SelectDates";
import Checkout from "../../Pages/Checkout";
import ThankYou from "../../Pages/ThankYou";
function CheckOutLayout() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/payment" exact component={SelectDates} />
        <Route path="/payment/checkout" exact component={Checkout} />
        <Route path="/payment/thank-you" exact component={ThankYou} />
        <Redirect to="/payment" />
      </Switch>
      <Footer />
    </div>
  );
}

export default CheckOutLayout;
