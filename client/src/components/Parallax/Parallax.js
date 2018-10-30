import React from "react";

const Parallax = (props) => (
    <div class={props.bg_image}>
        <div caption_spec={props.caption_spec ? `${props.caption_spec}` : "none"} class="caption">
            <span class="border">{props.heading}</span>
        </div>
    </div>
);

export default Parallax;



