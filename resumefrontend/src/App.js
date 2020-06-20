import React from 'react';
import Navbar from './component/Navbar'
import Project from './component/addProject'
import Award from './component/addAward'
import Experience from './component/addExperience'
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllProject from './component/allProjects';
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/addproject" exact component={Project} />
      <Route path="/addaward" exact component={Award} />
      <Route path="/addexperience" exact component={Experience} />
    <Route path="/project" exact component={AllProject}/>
    </Router>

  );
}

export default App;
