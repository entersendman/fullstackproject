import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay" />
        <div className="container">
          <div className="row text-white">
            <div className="col-lg-12 text-center mt-5">
              <h1 className="display-3">Name of Project</h1>
              <p className="lead">
                Create your own profile and share feeds to your friends
              </p>
              <hr />
              <Link
                className="btn btn-outline-primary col-lg-2 mr-3"
                to="/register"
              >
                Sign Up
              </Link>
              <Link className="btn btn-outline-light col-lg-2" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
