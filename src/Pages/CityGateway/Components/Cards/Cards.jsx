import React from 'react';
import './card.css';
export default function Cards(){
    return(
        <div class="justify-content-center">
                        <div class="row m-3 p-4">
                                <div class="col-12 d-flex justify-content-center">
                                        <p class="h1 text-center font-weight-bold" style="letter-spacing: .1em;">Hotel Details</p>
                                </div>
                            </div>
                        <div class="container-hotel d-flex  justify-content-center">
                               <div class="row justify-content-center" style="flex-wrap: wrap;">
                                                                <div class="column col-md-3 mb-4">
                                  {/* <!-- Post--> */}
                                  <div class="post-module">
                                    {/* <!-- Thumbnail--> */}
                                    <div class="thumbnail">
                                      <img src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/beach-resortcabana-bay-beach-resortorlandofl.png" />
                                    </div>
                                    {/* <!-- Post Content--> */}
                                    <div class="post-content">
                                    <div class="category">Orlando, FL</div>
                                      <h1 class="title">Beach Resort</h1>
                                      <h2 class="sub_title">Beach Resort can make dining in or ...
                                        </h2>
                                      <p class="description" style="display: none; height: 200px; opacity: 1;">Beach Resort can make dining in or take out easy for guests. The food court offers burgers, milk shakes, pizza, and sandwiches. A coffee shop is on-site in addition to lobby and pool bars. Guests can stay in traditional or poolside rooms as well as spacious family suites which include fully equipped kitchenettes.</p>

                                    </div>
                                  </div>
                                </div>
                                                                <div class="column col-md-3 mb-4">
                                  {/* <!-- Post--> */}
                                  <div class="post-module">
                                    {/* <!-- Thumbnail--> */}
                                    <div class="thumbnail">
                                      <img src="https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/sapphire-falls-resortsapphire-falls-resortorlandofl.png" />
                                    </div>
                                  
                                    <div class="post-content">
                                    <div class="category">Orlando, FL</div>
                                      <h1 class="title">Sapphire Falls Resort</h1>
                                      <h2 class="sub_title">The resort is located 10 minutes' d ...
                                        </h2>
                                      <p class="description" style="display: none; height: 150px; opacity: 1;">The resort is located 10 minutes' drive from SeaWorld Orlando and 8 minutes' drive from Orlando Premium Outlets ' International Drive. Orlando International Airport is 17 minutes' drive from the property.</p>

                                    </div>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                </div>
    )
}