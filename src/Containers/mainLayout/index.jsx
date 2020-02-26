import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Offer from "./../../Pages/Offers";
import Ada from "./../../Pages/ADA";
import Privacy from "./../../Pages/PrivacyPolicy";
import ToC from "./../../Pages/ToC";

function MainLayout() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/kings-creek-offer/ada" exact component={Ada} />
        <Route
          path="/kings-creek-offer/terms-and-conditions"
          exact
          component={ToC}
        />
        <Route
          path="/kings-creek-offer/privacy-policy"
          exact
          component={Privacy}
        />
        <Route path="/kings-creek-offer" exact component={Offer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default MainLayout;
