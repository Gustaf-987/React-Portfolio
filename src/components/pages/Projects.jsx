import React from "react";
import NationalParks from "./NationalParks.jpg"
import PasswordGen from "./passwordGen.jpg"
import CrimeAde from "./crimeAdeDemo.gif"
import WorkDay from "./workDayScheduler.jpg"

const Projects = () => (
  <div>
    <h1>Portfolio Sample</h1>
    <ul>
      <li>
      <img width="400px" src={NationalParks} alt="NationalParks"></img>
        <h5>National Park App</h5>
        <a class="nav-link" target="_blank" href="https://github.com/yermasog/Find-a-National-Park-app">GitHub</a>
        <a class="nav-link" target="_blank" href="https://yermasog.github.io/Find-a-National-Park-app/">Try It! </a>
      </li>
      <li>
      <img width="400px" src={PasswordGen} alt="passwordGen"></img>
        <h5>PassWord Generator</h5>
        <a class="nav-link" target="_blank" href="https://github.com/Gustaf-987/Homework3-Button-Generator">GitHub</a>
        <a class="nav-link" target="_blank" href="https://gustaf-987.github.io/Homework3-Button-Generator/">Try It! </a>
      </li>
      <li>
      <img width="400px" src={CrimeAde} alt="passwordGen"></img>
        <h5>CrimeAde</h5>
        <a class="nav-link" target="_blank" href="https://github.com/Gustaf-987/charmeleon">GitHub</a>
        <a class="nav-link" target="_blank" href="https://infinite-savannah-89804.herokuapp.com/">Try It! </a>
      </li>
    </ul>
    <li>
    <img width="400px" src={WorkDay} alt="workdayScheduler"></img>
      <h5>Work Day Scheduler</h5>
      <a class="nav-link" target="_blank" href="https://github.com/Gustaf-987/Homework5_CalendarApp">GitHub</a>
      <a class="nav-link" target="_blank" href=" https://gustaf-987.github.io/Homework5_CalendarApp/">Try It! </a>
    </li>

  </div>
);

export default Projects;