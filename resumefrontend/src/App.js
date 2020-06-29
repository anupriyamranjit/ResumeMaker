import React from 'react';
import Navbar from './component/Navbar'
import Project from './component/addProject'
import Award from './component/addAward'
import Experience from './component/addExperience'
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllProject from './component/allProjects';
import AllAward from './component/allAwards';
import AllExperience from './component/allExperiences';
import ResumePage from './component/ResumePage';
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/addproject" exact component={Project} />
      <Route path="/addaward" exact component={Award} />
      <Route path="/addexperience" exact component={Experience} />
    <Route path="/project" exact component={AllProject}/>
        <Route path="/award" exact component ={AllAward}/>
        <Route path="/experience" exact component ={AllExperience}/>
	  <Route path= "/" exact component = {ResumePage}/>
    </Router>

  );
}

export default App;
