import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Navbar() {
  return (
    <nav className = "navbar navbar-dark bg-dark navbar-expand-ig">
            <Link to="/" className="navbar-brand">Resume Maker</Link>
            <div className="collpase navbar-collpase">
            <ul className="nav">
                <li className="nav-item">
                <Link to="/" className="nav-link">Resume</Link>
                </li>
                <li className="nav-item">
                <Link to="/project" className="nav-link">Add Project</Link>
                </li>
                <li className="nav-item">
                <Link to="/experience" className="nav-link">Add Experience</Link>
                </li>
                <li className="nav-item">
                <Link to="/award" className="nav-link">Add Award</Link>
                </li>
            </ul>
            </div>
        </nav>
  );
}