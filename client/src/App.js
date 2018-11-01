import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import ContentDiv from "./components/ContentDiv";
import Parallax from "./components/Parallax";
import ProjectCard from "./components/ProjectCard";
import Carousel from "./components/Carousel";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleUp)


const styles = {
  width: "64px",
  height: "64px",

}

class App extends Component {

  toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Parallax caption_spec={"top"} bg_image={"bg-image-1"} heading={"About Me"}/>
                <ContentDiv text_area_id={1}>
                  <img className="float-left mr-4" id="profile-pic" src="./images/profilepic.jpg"></img>
                  <p >Im a Library and information sciences professional with strong interests in cataloging, metadata, and information technology. My classroom and work experiences have given me the opportunity to perform cataloging work for a wide range of resource and material types, while utilizing a wide range of descriptive schemas and metadata standards. I am particularly interested in applying my cataloging knowledge to describe and provide access to cultural heritage collections, with an eye toward future concepts and technologies.</p>
                </ContentDiv>

                <Parallax bg_image={"bg-image-2"} heading={"Projects"}/>
                <ContentDiv text_area_id={2}>
                  <h3 className="mb-5">Click Below to check out some of the web development projects I've worked on over the past year.</h3>
                  <ProjectCard title={"Bookbag+"} desc={"React-based Scholarly research tool."} dep_url={"http://bookbagplus.herokuapp.com/"} git_url={"https://github.com/CatLibWilk/bookbag"}/>
                  <ProjectCard title={"SaveTheDate"} desc={"Application for setting up automated reminder-messaging using Twilio-API service."} dep_url={"http://savethedate.herokuapp.com/"} git_url={"https://github.com/CatLibWilk/savedateapp-local"}/>
                  <ProjectCard title={"NYTReact"} desc={"Returns articles from NYTimes API."} dep_url={"https://wownews.herokuapp.com/"} git_url={"https://github.com/CatLibWilk/nytreact"}/>
                </ContentDiv>

                <Parallax caption_spec={"artwork"} bg_image={"bg-image-3"} heading={"Artwork"}/>
                 <div id="carousel-wrapper">
                    <ContentDiv text_area_id={3}>
                      <h3>In addition the the artwork you see as the background to this site, click through the viewer below to see more examples of my work.</h3>
                        <Carousel className="carousel" />
                    </ContentDiv>
                 </div>

                <Parallax bg_image={"bg-image-4"} heading={"Contact Me"}/>
                <ContentDiv text_area_id={4}>
                  <div class="row justify-content-center">
                    <div class="col-3">
                      <a href="https://github.com/catlibwilk" target="_#"><img src="./images/GitHub-Mark-64px.png"></img></a>
                    </div>
                    <div class="col-3">
                      <a href="https://www.linkedin.com/in/andrew-wilk-839bab97" target="_#"><img src="./images/Logo-2C-66px-R.png"></img></a>
                    </div>
                    <div id="sc-div" class="col-3 pl-2">
                        <iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fswift-street-records&color=orange_white&size=64" style={styles}>
                        </iframe>
                    </div>
                    <div class="col-3">
                      <a href="mailto:andrewdwilk@gmail.com" target="_#"><img id="mail-img" src="./images/mail-icon.jpeg"></img></a>
                    </div>
                  </div>
                </ContentDiv>
                
              </div>
            </div>
            <FontAwesomeIcon id="return-to-top" icon="angle-double-up" onClick={this.toTop}/>
        </div>
      </div>
    );
  }
}

export default App;


