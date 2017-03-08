import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Data Profiling</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Definitions</Link></li>
            <li><Link to="/method">Profiling Method</Link></li>
            <li><a href="#">Validation Rule</a></li>
            <li><Link to="/statisticGraph">Statistic Graph</Link></li>
          </ul>
        </div>
      </nav>
      );
  }
}
