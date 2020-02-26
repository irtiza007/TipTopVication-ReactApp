import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './slider.css';
const data=['https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/heroimages/4-day-orlando-theme-park-adventure-6-1.png','https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/heroimages/4-day-orlando-theme-park-adventure-6-1.png','https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/heroimages/4-day-orlando-theme-park-adventure-6-1.png']
export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const selected = (i) =>{
        setIndex(i);
    }
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

  
    return (
        <div className="container slider-container">
            <div className="col-sm-12 d-flex justify-content-center container-slider-bottom align-items-center">
                {data.map((value, i)=>(
                    <img
            className="slider-bottom-image mr-2"
            style={{opacity:index === i ? '1' : '', border:index === i ? '2px solid black' : ''}}
            src={value}
            alt="slide"
            onClick={()=>selected(i)}
          />
                ))}
            
          </div>
        <Carousel 
        nextIcon={(<i class="fas fa-chevron-right" style={{fontSize:35}}></i>)}
        prevIcon={(<i class="fas fa-chevron-left"  style={{fontSize:35}}></i>)}
        activeIndex={index} direction={direction} onSelect={handleSelect}>
        {data.map((value, i)=>(
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={value}
            alt="slide"
          />
         
        </Carousel.Item>
         ))}
      </Carousel>
      </div>
    );
  }
  
//   render(<ControlledCarousel />);

