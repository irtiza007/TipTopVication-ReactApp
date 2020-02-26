import React from 'react';
import TimeRemaining from './TimeTableOffer';
export default function CustomerReviews(){
    return(
        <div class="justify-content-center maxWidth-1200">
<div class="container-fluid">
<div class="row m-4 p-4">
    <div class="col-12 d-flex justify-content-center">
            <p class="h1 mt-2 mb-4 text-center font-weight-bold letterSpacing">Our Customers Love Us</p>
    </div>
    <div class="col-12 pt-3 d-flex justify-content-center flex-wrap">
        <figure class="snip1192">
                <blockquote style={{minHeight:'200px'}}>Branson has been a place our family has traveled for generation.  Vacation Center was one of the best experiences we have ever had.</blockquote>
                <div class="author">
                  <img src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/testimonials/martha-l-daytona-fl-1565074706.png" alt="sq-sample1" />
                  <h5>Martha L <span> Daytona, FL</span></h5>
                </div>
              </figure>

            </div>
</div>
</div>

<div style={{height:"60px"}}></div>
            <div class="container container-fluid">
    <div class="row">
        <div class="col-md-6 pb-4 d-flex justify-content-center ">
                <iframe width="560" height="300" class="bs" src="https://player.vimeo.com/video/351681728" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <div class="col-md-6 align-self-start">
                <div class="">
                <p class="h2 mt-2 mb-4 text-center font-weight-bold letterSpacing" style={{color: '#000000'}}>Book With TipTop Vacation</p>
                                <div style={{minHeight:"60px"}} class="align-self-center d-flex">
               <i class="fas fa-ship fa-3x" style={{color: "#424553"}}></i> <p class="pl-3 h5 font-weight-bold mb-4 d-flex align-self-center overflow-hidden" >
                Bonus Gift 4-Night Cruise for 2</p></div>
                                <div style={{minHeight:'60px;'}} class="align-self-center d-flex">
               <i class="far fa-smile fa-3x" style={{color: '#424553'}}></i> <p class="pl-3 h5 font-weight-bold mb-4 d-flex align-self-center overflow-hidden">
                2-Night Getaways from $99.99 - Exclusive Savings!</p></div>
                                <div style={{minHeight:'60px'}} class="align-self-center d-flex">
               <i class="fab fa-accusoft fa-3x" style={{color: '#424553'}}></i> <p class="pl-3 h5 font-weight-bold mb-4 d-flex align-self-center overflow-hidden">
                Vacation Guarantee - Book Today and Have 24 Months to Travel</p></div>
                                </div>
        </div>
    </div>
</div>
<div style={{height:'50px'}}></div>
<TimeRemaining />
</div>

    )
}