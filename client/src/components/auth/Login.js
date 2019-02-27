import React, {Component} from 'react';

class Login extends Component {

    state = {
        email: '',
        password: '',
        errors: {},
    };

    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmitHandler = e => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(newUser);
    };

    render() {
        return (
            <div className="container mt-3">
                <h1 className="display-3 text-center">Sign In</h1>
                <p className="lead text-center">
                    Sign in to your {'Name of Project'} account
                </p>
                <hr />
                <form onSubmit={this.onSubmitHandler}>
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
                                className="form-control form-control-lg"
                                placeholder="johndoe@gmail.com"
                            />
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
                                className="form-control form-control-lg"
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-12">
                            <button className="btn btn-outline-success btn-lg col-lg-12">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;