import React from 'react';
import Layout from './../Layout/Layout';
import { Link } from 'react-router-dom';
import userApi from './../../api/UserApi';
import Auth from './../../api/Auth';
import renderErrorMessage from './../Common/RenderErrorMessage';

export default class RegisterRoute extends React.Component {
    state = {
        email: null,
        password: null,
        username: null,
        errors: null,
        submitting: false,
    };

    doRegister = (e) => {
        e.preventDefault();
        const { email, password, username } = this.state;

        this.setState({ submitting: true });

        userApi.register({ email, password, username }).then(({ errors, user }) => {
            if (errors) {
                this.setState({ submitting: false, errors });
            } else {
                Auth.setUser(user);
            }
        });
    }

    render() {
        const { submitting, errors } = this.state;

        const bind = (statePath) => ({
            value: this.state[statePath] == null ? "" : this.state[statePath],
            onChange: (e) => this.setState({ [statePath]: e.target.value }),
        });

        return (
            <Layout>
                <div className="auth-page">
                    <div className="container page">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12">
                                <h1 className="text-xs-center">Sign up</h1>
                                <p className="text-xs-center">
                                    <Link to='/login'>Have an account?</Link>
                                </p>
                                {renderErrorMessage(errors)}
                                <form onSubmit={this.doRegister}>
                                    <fieldset className="form-group" disabled={submitting}>
                                        <input className="form-control form-control-lg" type="text" placeholder="Your Name" {...bind("username")} />
                                    </fieldset>
                                    <fieldset className="form-group" disabled={submitting}>
                                        <input className="form-control form-control-lg" type="text" placeholder="Email" {...bind("email")} />
                                    </fieldset>
                                    <fieldset className="form-group" disabled={submitting}>
                                        <input className="form-control form-control-lg" type="password" placeholder="Password"  {...bind("password")} />
                                    </fieldset>
                                    <button className="btn btn-lg btn-primary pull-xs-right">
                                        Sign up
                                </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}