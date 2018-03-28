import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Auth from './../../api/Auth';

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        let user = Auth.getUser();
        return (
            <React.Fragment>
                <nav className="navbar navbar-light">
                    <div className="container">
                        <Link
                            className="navbar-brand"
                            to="/"
                        >
                            conduit
                        </Link>
                        <ul className="nav navbar-nav pull-xs-right">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                            {
                                user == null ? (
                                    <Fragment>
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                to="/login"
                                                activeClassName="active"
                                                className="nav-link"
                                            >
                                                Sign in
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                to="/register"
                                                activeClassName="active"
                                                className="nav-link"
                                            >
                                                Sign up
                                            </NavLink>
                                        </li>
                                    </Fragment>
                                ) : (
                                        <Fragment>
                                            <li className="nav-item">
                                                <NavLink
                                                    exact
                                                    to="/editor"
                                                    activeClassName="active"
                                                    className="nav-link"
                                                >
                                                    <i className="ion-compose"></i>&nbsp;New Post
                                            </NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink
                                                    exact
                                                    to="/setting"
                                                    activeClassName="active"
                                                    className="nav-link"
                                                >
                                                    Settings
                                            </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    exact
                                                    to={`/@${user.username}`}
                                                    activeClassName="active"
                                                    className="nav-link"
                                                >
                                                    {user.username}
                                                </NavLink>
                                            </li>
                                        </Fragment>
                                    )
                            }
                        </ul>
                    </div>
                </nav>
                {children}
                <footer>
                    <div className="container">
                        <Link to="/" className="logo-font">conduit</Link>
                        <span className="attribution">
                            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code & design licensed under MIT.
                        </span>
                    </div>
                </footer>
            </React.Fragment >
        );
    }
}

export default Layout;