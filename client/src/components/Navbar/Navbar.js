import React, { Component } from "react";
import NavBtn from "../../components/NavBtn";

class Navbar extends Component {

    handleClick = (type) => {
        switch (type) {
            case "About Me":
                console.log("about clicked");
                break;
            case "Projects":
                console.log("projects clicked");
                break;
            case "Artwork":
                console.log("Artwork clicked");
                break;
            case "Contact Me":
                console.log("Contact clicked");
                break;
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

