import React from 'react';
import { Icon } from "antd";
export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-md shadow fixed-top bg-white">
          <div className="d-flex header-row justify-content-between flex-row container vcmax">
      <img alt="logo" className="logo-image" src="https://tiptopvacation.com/img/tiptopvacation_logo.png" />
      <div className="d-flex align-items-center">
    <img className="phone-icon" src="https://tiptopvacation.com/img/phone-call.png" />
      <div className="more-info width-200px">
      <div className="need-help">
      Need Help Booking?
      </div>
      <div className="ml-1">
        <span className="tel-num">
         1-877-633-9793
        </span>
      </div>
      </div>
      </div>
      <div>
      <Icon type="menu" className="h2 f-bold f-black" /> 
      </div>
      </div>
    </nav>
    )
}
