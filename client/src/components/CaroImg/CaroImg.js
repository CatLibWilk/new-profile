import React from "react";


const CaroImg = ({status, img}) => (
    <div class={status}>
        <img class="d-block img-fluid" src={img} alt="Artwork example"></img>
    </div>

);
export default CaroImg;



