import React from 'react';
export default function DontHaveDates (){
    return(
<div class="container-fluid py-2 mb-2" style={{background: "#e5349b"}}>
    <div class="justify-content-center maxWidth-1200">
            <div class="row py-1 justify-content-around">
                 <div class="col-md-4 d-flex justify-content-center ">
                    <div class="align-self-center text-center letterSpacing">
                        <div class="h3 font-weight-bold text-white">
                                Don’t have dates?
                        </div>
                        <div class="h6 pt-2 one-column text-white">
                                Click here to get this deal now! Call back anytime in the next 12 months to travel!
                        </div>
                        <div class="pt-3">
                        <button class="button-reserve button " style={{margin: 0, minHeight:'20px'}}>Get More Info!</button>
                        
                        </div>
                    </div>
                </div>
              <div class="col-md-6 d-flex">
                <div class="align-self-center my-3">
                    <img class="vc-badge" src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/best-price-badge.png" alt="Best Price Guarantee" />
                    <img class="vc-badge" src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/30-day-badge.png" alt="30 Day Money Back Guarantee" />
                    <img class="vc-badge" src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/ssl-badge.png" alt="SSL 100% Secure Transactions" />
                </div>

                
              </div>

          </div>
    </div>
</div>
)
}