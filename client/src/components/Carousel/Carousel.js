import React from "react";
import CaroImg from "../CaroImg";

import caro1 from "../../images/caro-1.jpg";
import caro2 from "../../images/caro-2.jpg";
import caro3 from "../../images/caro-3.jpg";


const Carousel = (props) => (
    <div id="carouselControls" class="carousel slide mx-auto shadow" data-ride="carousel" >
        <div class="carousel-inner">
            <CaroImg status={"carousel-item active"} img={caro1}/>
            <CaroImg status={"carousel-item"} img={caro2}/>
            <CaroImg status={"carousel-item"} img={caro3}/>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

    </div>
);
export default Carousel;
