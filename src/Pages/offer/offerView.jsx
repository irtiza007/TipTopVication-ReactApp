import React from "react";
import Navbar from "./Components/Navbar";
import Banner1 from "./Components/hero";
import PricingCards from "./Components/pricing/Pricing1";
import "./offer.css";
import BottomButton from "./Components/button-bottom";
import Banner2 from "./Components/Banner2/Banner2";
import Content1 from "./Components/Content1/Content1";
import Questions from "./Components/Questions/Questions";
export default function OfferView() {
  return (
    <div className="window-height">
      <Navbar />
      <BottomButton />
      <Banner1 />
      <PricingCards />
      <Banner2 />
      <Content1 />
      {/* <Questions /> */}
    </div>
  );
}
