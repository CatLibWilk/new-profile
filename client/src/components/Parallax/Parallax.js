import React from "react";

const Parallax = (props) => (
    <div class={props.bg_image}>
        <div class="caption">
            <span class="border">{props.heading}</span>
        </div>
    </div>
);

export default Parallax;



