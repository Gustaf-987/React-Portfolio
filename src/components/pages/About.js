import React from "react";
import metie from "./meTie.png"

const About = () => (
  <div>
    <h1>About Me</h1>
    <p>
    My name is Gustaf, welcome to my About Me page! I am a full time coding student in UMN Bootcamp! I am exicted to be able to learn new skills and translate them into web design! I was born and raised in Minneapolis. In my free time
                        I enjoy listening to music and going to the gym.
    </p>
    <img width= "400px" src={metie} id="myimg" alt="Gustaf"></img>
  </div>
);

export default About;