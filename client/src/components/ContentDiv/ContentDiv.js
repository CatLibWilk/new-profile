import React from "react";

const ContentDiv = (props) => (
    <div class="text-container clearfix" id={`text_area_${props.text_area_id}`}>
            <div class="text-area clearfix col-12">
                {props.children}
            </div>
    </div>
);

export default ContentDiv;



