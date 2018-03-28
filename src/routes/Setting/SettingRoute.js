import React from 'react';
import Layout from './../Layout/Layout';
import Auth from '../../api/Auth';

export default class SettingRoute extends React.Component {
    doLogout = (e) => {
        e.preventDefault();
        Auth.setUser(null);
    }
    render() {
        return (
            <Layout>
                <div className="settings-page">
                    <div className="container page">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-xs-12">
                                <h1 className="text-xs-center">Your Settings</h1>
                                <form>
                                    <fieldset className="form-group">
                                        <input className="form-control" type="text" placeholder="URL of profile picture" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea className="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg" type="text" placeholder="Email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg" type="password" placeholder="Password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <button className="btn btn-lg btn-primary pull-xs-right">
                                            Update Settings
                                        </button>
                                    </fieldset>
                                </form>
                                <hr />
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={this.doLogout}
                                >Or click here to logout.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}