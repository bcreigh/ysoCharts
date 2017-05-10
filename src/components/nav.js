import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <a className="navbar-brand" href="#">Brand</a>
        <ul className="nav navbar-nav">
          <li className="active"><Link to={`/`}>Charts</Link></li>
          <li><Link to={`/charts/new`}>Gigs</Link></li>
          <li><Link to={`/charts/5`}>Set Lists</Link></li>
        </ul>
      </nav>
    );
  }
}
