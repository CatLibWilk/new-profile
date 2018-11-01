import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class artCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel mx-auto" dynamicHeight="true" infiniteLoop="true" showStatus="false">
                <div>
                    <img className="caro-img" src="/images/bg-image-1.jpg" />
                </div>
                <div>
                    <img className="caro-img" src="/images/bg-image-2.jpg" />
                </div>
                <div>
                    <img className="caro-img" src="/images/bg-image-3.jpg" />
                </div>
                <div>
                    <img className="caro-img" src="/images/caro-1.jpg" />
                </div>
                <div>
                    <img className="caro-img" src="/images/caro-2.jpg" />
                </div>
                <div>
                    <img className="caro-img" src="/images/caro-3.jpg" />
                </div>
            </Carousel>
        )
    }
};
export default artCarousel;



