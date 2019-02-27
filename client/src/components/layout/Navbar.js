import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: 'black' }}
        >
          <Link className="navbar-brand" to="/">
            Name of Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link disabled" to="/peoples">
                  Peoples
                </Link>
              </li>
            </ul>
            <form className="form-inline col-lg-6 justify-content-end">
              <Link
                className="btn btn-outline-success btn-md mr-3 col-lg-2"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline-success btn-md mr-3 col-lg-2"
                to="/register"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
