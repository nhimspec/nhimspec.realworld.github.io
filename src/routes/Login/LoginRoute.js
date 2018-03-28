import React from 'react';
import Layout from './../Layout/Layout';
import renderErrorMessages from './../Common/RenderErrorMessage';
import Auth from './../../api/Auth';
import UserApi from './../../api/UserApi';

export default class LoginRoute extends React.Component {
    state = {
        email: null,
        password: null,
        errors: null,
        submitting: false
    }

    doLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        this.setState({ submitting: true });

        UserApi.login({ email, password }).then(({ errors, user }) => {

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
            value: this.state[statePath] === null ? "" : this.state[statePath],
            onChange: (e) => this.setState({ [statePath]: e.target.value })
        });

        return (
            <Layout>
                <div className="auth-page">
                    <div className="container page">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12">
                                <h1 className="text-xs-center">Login</h1>
                                {renderErrorMessages(errors)}
                                <form
                                    onSubmit={this.doLogin}
                                >
                                    <fieldset className="form-group" disabled={submitting}>
                                        <input className="form-control form-control-lg" type="text" placeholder="Email" {...bind("email")} />
                                    </fieldset>
                                    <fieldset className="form-group" disabled={submitting}>
                                        <input className="form-control form-control-lg" type="password" placeholder="Password" {...bind("password")} />
                                    </fieldset>
                                    <button className="btn btn-lg btn-primary pull-xs-right">Login</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}