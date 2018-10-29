import React from "react";

const NavBtn = (props) => (
    <li className={props.btn_type}>
        <a className="nav-link" href="#" onClick={() => props.click(props.btn_title)}>{props.btn_title}</a>
    </li>

);
export default NavBtn;



