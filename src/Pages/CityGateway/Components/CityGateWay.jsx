import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import PurchaseToday from './PurchaseToday';
import DontHaveDate from './DontHaveDates';
import Accomandation from './Accomandation/Accomandation';
import Slider from './Accomandation/Slider';
import Attraction from './Attraction';
import CustomerReviews from './CustomerReviews';
export default function CityGateWayView(){
    return(
        <section className="container-fluid p-0">
         <Header />
         <HeroSection />
        <PurchaseToday />
       <DontHaveDate />
       <Accomandation />
       <Slider />
       <Attraction />
       <CustomerReviews />
                </section>
    )
}