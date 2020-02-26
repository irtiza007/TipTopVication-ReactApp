import React from 'react';
import TimeRemaining from './TimeTableOffer';
export default function PurchaseToday(){
 return(
    <div class="justify-content-center maxWidth-1200">
	<div class="container-fluid">
  <div class="row m-5 p-4">
    <div class="col-12 d-flex justify-content-center">
      <p class="h4 text-center" style={{letterSpacing:'.1em'}}>3 Days and 2 Nights - <strong>Orlando Getaway for 4</strong></p>
    </div>
    <div class="col-12 pt-3 d-flex justify-content-center">
      <p class="h4 text-center" style={{letterSpacing:'.1em'}}>Purchase <strong>TODAY</strong> and Receive a Free Complementary Cruise</p>
    </div>
  </div>
</div> 

<TimeRemaining />


	<a id="offer-features"></a>
    <div class="container-fluid py-4 mb-5">
        <div class="row d-flex align-items-start">
                          <div class="col-3 d-flex justify-content-center">
            <div class="align-self-center text-center">
              <i class="fab fa-adn fa-3x pb-2"> </i>              
              <p class="h6">Amazing Inside Rates </p>
            </div>
          </div>
                    <div class="col-3 d-flex justify-content-center">
            <div class="align-self-center text-center">
              <i class="fas fa-utensils fa-3x pb-2"> </i>              
              <p class="h6">Ultimate Dining Options </p>
            </div>
          </div>
                    <div class="col-3 d-flex justify-content-center">
            <div class="align-self-center text-center">
              <i class="fas fa-user-circle fa-3x pb-2"> </i>              
              <p class="h6">Luxury VIP Concierge Booking Host </p>
            </div>
          </div>
                    <div class="col-3 d-flex justify-content-center">
            <div class="align-self-center text-center">
              <i class="fas fa-bullhorn fa-3x pb-2"> </i>              
              <p class="h6">Friends and Family Booking Referral Program </p>
            </div>
          </div>
                </div>
    </div>
</div>
 )
}