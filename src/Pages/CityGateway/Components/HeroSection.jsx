import React from 'react';
import Header from './Header';
export default function HeroSection(){
    return(
        <div className="hero-section">
  <div className="container-fluid overlay">
    <div className="justify-content-center maxWidth-1200">
      <div className="row py-5">
        <div className="col-md-8 text-center text-light">
          <span className="hero-day-night">3 - DAY / 2 - NIGHT</span>
          <h2 className="hero-title">Orlando Getaway for 4</h2>
          <p className="hero-subtitle">Orlando Adventure 3 Day 2 Night Deluxe Package</p>
          <div className="w-100 h-50px"></div>
          <h2 className="hero-price text-light">Now Only <br /><span>$169</span></h2>
          <p className="hero-compare">Compare From <del><strong>1599.99</strong></del></p>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <form className="reserveForm mt-2">
            <div className="hero-form-header">
              <h2>Family Vacation</h2>
            </div>
            <div className="hero-form-sub-header">
              <span className="span-only">only</span> <span className="span-price">$169</span> <span className="span-family">Per<br />Family</span>
            </div>
            <input type="hidden" name="_token" value="MxJpLVovHSLHTPGElR0dXgerDGmFLpTTJ8Jai83z"/>            <input type="hidden" name="offer" value="6" />
            <input type="hidden" name="offer_name" value="Orlando Getaway for 4" />
            <input type="hidden" name="days" value="3" />
            <input type="hidden" name="nights" value="2" />
            <input type="hidden" name="salesPrice" value="169.00" /> 
            <input type="hidden" name="location" value="Orlando, FL" />
            <input type="hidden" name="guest" value="1" />
            <input type="hidden" name="source" />
            <div className="form-field">
            <div className="form-group">
                <input type="text" className="form-control firstname" name="firstname" placeholder="Enter First Name*" />
                <span className="err-firstname err-message"></span>
            </div>
            <div className="form-group">
                <input type="text" className="form-control lastname" name="lastname" placeholder="Enter Last Name*" />
                <span className="err-lastname err-message"></span>
            </div>
            <div className="form-group">
                <input type="tel" className="form-control phone" name="phone" placeholder="Enter Phone*" />
                <span className="err-phone err-message"></span>
            </div>
            <div className="form-group">
                <input type="email" className="form-control email" name="email" placeholder="Enter Email*" />
                <span className="err-email err-message"></span>
            </div>
            <div className="form-check">
                <input type="checkbox" value="1" checked="" className="form-check-input agree" name="agree" />
                <label className="form-check-label text-white"> I Accept <a href="https://tiptopvacation.com/terms-and-conditions/orlando-getaway-for-4" target="_blank">Terms and Conditions</a> and <a href="https://tiptopvacation.com/privacy-policy" target="_blank">Privacy Policy</a></label>
                <span className="err-agree err-message"></span>
            </div>
    
            <button type="button" className="btn btn-primary button button-date-mod booking-button">Get More Info!</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}