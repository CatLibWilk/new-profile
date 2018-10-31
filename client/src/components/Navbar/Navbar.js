import React, { Component } from "react";
import NavBtn from "../../components/NavBtn";

class Navbar extends Component {

    handleClick = (type) => {
        let tar = "";
        switch (type) {

            case "About Me":
                tar = document.getElementById("text_area_1").getBoundingClientRect();

                window.scrollTo({top: (tar.y - 300), behavior: 'smooth'});
                
                break;

            case "Projects":
                tar = document.getElementById("text_area_2").getBoundingClientRect();

                window.scrollTo({top: (tar.y - 225), behavior: 'smooth'});
                
                break;

            case "Artwork":
                tar = document.getElementById("text_area_3").getBoundingClientRect();
                
                window.scrollTo({top: (tar.y - 30), behavior: 'smooth'});
                break;

            case "Contact Me":
            tar = document.getElementById("text_area_4").getBoundingClientRect();
                
            window.scrollTo({top: (tar.y - 30), behavior: 'smooth'});
                break;

        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Andrew Wilk</a>
                
                <div className="navbar" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavBtn btn_type={"nav-item active"} btn_title={"About Me"} click={this.handleClick}/>
                        <NavBtn btn_type={"nav-item"} btn_title={"Projects"} click={this.handleClick}/>
                        <NavBtn btn_type={"nav-item"} btn_title={"Artwork"} click={this.handleClick}/>
                        <NavBtn btn_type={"nav-item"} btn_title={"Contact Me"} click={this.handleClick}/>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

