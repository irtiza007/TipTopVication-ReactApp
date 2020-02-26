import React from 'react'
export default function TimetableOffer(){
    return(
        <div class="container-fluid mb-5">
  <div class="row">
    <div class="col-md-3 d-flex justify-content-center">
      <div class="price-side-inner align-self-center">
        <p class="retail-price text-center">Compare From: <br /><span class="original-price">$1599.99</span></p>
        <p class="checkout-retail-price text-center">$169</p>
        <p class="discount text-center"><strong>Price per family</strong></p>
      </div>
    </div>
    <div class="col-md-4 d-flex justify-content-center" style={{background: '#e5349b'}}>
        <div class="today-only-timer align-self-center pt-2" style={{color:'#fff !important'}}>Today only sale ends in <span class="today-sale-timer">
    <div class="text-center align-self-end">
        <p class="ltxt hr font-size-24">12</p>
        <p class="smtxt">HOURS</p>
    </div>
    <div class="text-center align-self-end">
        <p class="ltxt min font-size-24" >02</p>
        <p class="smtxt">MINUTES</p>
    </div>
    <div class="text-center align-self-end">
        <p class="ltxt sec font-size-24">24</p>
        <p class="smtxt">SECONDS</p>
    </div>
</span>
<div class="text-center align-self-end">
        <p class="smtxt">Travel upto 12 Months</p>
    </div>
</div>


    </div>
    <div class="col-md-5 d-flex justify-content-center py-2" style={{minHeight:'120px', background: "#e5349b"}}>
      
      <form class="reserveForm maxWidth-332px mt-2" method="post">
        <input type="hidden" name="_token" value="MxJpLVovHSLHTPGElR0dXgerDGmFLpTTJ8Jai83z" />        <input type="hidden" name="offer" value="6" />
        <input type="hidden" name="offer_name" value="Orlando Getaway for 4" />
        <input type="hidden" name="days" value="3" />
        <input type="hidden" name="nights" value="2" />
        <input type="hidden" name="salesPrice" value="169.00" />
        <input type="hidden" name="guest" value="1" />
        <input type="hidden" name="location" value="Orlando, FL" />

        <input type="hidden" name="source" value="https://tiptopvacation.com/offer/orlando-getaway-for-4" />
        <div class="form-group">
            <input type="text" class="form-control firstname" name="firstname" placeholder="Enter First Name*" />
            <span class="err-firstname err-message"></span>
        </div>
        <div class="form-group">
            <input type="text" class="form-control lastname" name="lastname" placeholder="Enter Last Name*" />
            <span class="err-lastname err-message"></span>
        </div>
        <div class="form-group">
            <input type="tel" class="form-control phone" name="phone" placeholder="Enter Phone*" />
            <span class="err-phone err-message"></span>
        </div>
        <div class="form-group">
            <input type="email" class="form-control email" name="email" placeholder="Enter Email*" />
            <span class="err-email err-message"></span>
        </div>
        <div class="form-check">
            <input type="checkbox" value="1" checked="" class="form-check-input agree" name="agree" />
            <label class="form-check-label text-white"> I Accept <a href="https://tiptopvacation.com/terms-and-conditions/orlando-getaway-for-4" target="_blank">Terms and Conditions</a> and <a href="https://tiptopvacation.com/privacy-policy" target="_blank">Privacy Policy</a></label>
            <span class="err-agree err-message"></span>
        </div>

        <button type="button" class="btn btn-primary button button-date-mod booking-button">Get More Info!</button>
    </form>
    </div>
  </div>
</div>
    )
}
