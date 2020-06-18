import React from 'react';
import Navbar from './component/Navbar'
import Project from './component/addProject'
import Award from './component/award'
import Experience from './component/addExperience'
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/project" exact component={Project} />
      <Route path="/award" exact component={Award} />
      <Route path="/experience" exact component={Experience} />
    </Router>

  );
}

export default App;
