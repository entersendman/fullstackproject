import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser);
    //   axios
    //     .post('/api/users/register', newUser)
    //     .then(res => console.log(res.data))
    //     .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container mt-3">
        <h1 className="display-3 text-center">Sign Up</h1>
        <p className="lead text-center">
          Create your {'Name of Project'} account
        </p>
        <hr />
        <form noValidate onSubmit={this.onSubmitHandler}>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.name,
                })}
                placeholder="John Doe"
                value={this.state.name}
                onChange={this.onChangeHandler}
                name="name"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email,
                })}
                placeholder="johndoe@gmail.com"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password,
                })}
                placeholder="Password"
                name="password"
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                value={this.state.password2}
                onChange={this.onChangeHandler}
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password2,
                })}
                placeholder="Confirm Password"
                name="password2"
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.password2}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-lg-12">
              <button className="btn btn-outline-primary btn-lg col-lg-12">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { registerUser },
)(Register);
