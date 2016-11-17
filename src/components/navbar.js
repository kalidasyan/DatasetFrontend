import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Data Profiling</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Definitions</Link></li>
            <li><Link to="/method">Profiling Method</Link></li>
            <li><a href="#">placeholder 1</a></li>
            <li><a href="#">placeholder 2</a></li>
          </ul>
        </div>
      </nav>
      );
  }
}
