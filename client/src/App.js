import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import ContentDiv from "./components/ContentDiv";
import Parallax from "./components/Parallax";
import ProjectCard from "./components/ProjectCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Parallax caption_spec={"top"} bg_image={"bg-image-1"} heading={"About Me"}/>
                <ContentDiv text_area_id={1}>
                  <p>Im a Library and information sciences professional with strong interests in cataloging, metadata, and information technology. My classroom and work experiences have given me the opportunity to perform cataloging work for a wide range of resource and material types, while utilizing a wide range of descriptive schemas and metadata standards. I am particularly interested in applying my cataloging knowledge to describe and provide access to cultural heritage collections, with an eye toward future concepts and technologies.</p>
                </ContentDiv>
                <Parallax bg_image={"bg-image-2"} heading={"Projects"}/>
                <ContentDiv text_area_id={2}>
                  <h3 className="mb-5">Click Below to check out some of the web development projects I've worked on over the past year.</h3>
                  <ProjectCard title={"Bookbag+"} desc={"React-based Scholarly research tool."} dep_url={"http://bookbagplus.herokuapp.com/"} git_url={"https://github.com/CatLibWilk/bookbag"}/>
                  <ProjectCard title={"SaveTheDate"} desc={"Application for setting up automated reminder-messaging using Twilio-API service."} dep_url={"http://savethedate.herokuapp.com/"} git_url={"https://github.com/CatLibWilk/savedateapp-local"}/>
                  <ProjectCard title={"NYTReact"} desc={"Returns articles from NYTimes API."} dep_url={"https://wownews.herokuapp.com/"} git_url={"https://github.com/CatLibWilk/nytreact"}/>
                  
                </ContentDiv>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;


