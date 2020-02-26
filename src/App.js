import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./Containers/mainLayout";
import Offer from "./Pages/offer/offerView";
import CheckOutLayout from "./Containers/checkoutLayout";
import CityGateWay from './Pages/CityGateway/CityGatewayView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/kings-creek-offer" component={MainLayout} />
          <Route path="/payment" component={CheckOutLayout} />
          <Route path="/offer" exact component={Offer} />
          <Route path="/offer/:city" exact component={CityGateWay} />
          <Redirect from="/" to="/offer" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
