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
import UpdateExperience from './component/updateExperience';
import UpdateAward from './component/updateAward';
import UpdateProject from './component/updateProject';
import Framework from './component/addFramework';
import Languages from './component/addLanguages';
import Resume from './component/ResumeViewer';
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/addproject" exact component={Project} />
      <Route path="/addframework" exact component={Framework} />
      <Route path="/addlanguages" exact component={Languages} />
      <Route path="/addaward" exact component={Award} />
      <Route path="/addexperience" exact component={Experience} />
      <Route path="/resume" exact component={Resume} />
    <Route path="/projects" exact component={AllProject}/>
        <Route path="/award" exact component ={AllAward}/>
        <Route path="/experience" exact component ={AllExperience}/>
	  <Route path= "/" exact component = {ResumePage}/>
	  <Route path = "/experience/:id" component = {UpdateExperience} />
    <Route path = "/award/:id" component = {UpdateAward} />
     <Route path = "/projects/:id" component = {UpdateProject} />
    </Router>

  );
}

export default App;
