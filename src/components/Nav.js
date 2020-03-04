import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Nav () {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/"><i className="fas fa-dice-d20"></i> Youdzik</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active" to="/">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active" to="/media">MEDIA</NavLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>;
}