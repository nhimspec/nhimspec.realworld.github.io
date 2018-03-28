import React from 'react';
import RComponent from './common/RComponent';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import fetcherConfig from './api/Fetcher';
// Auth
import Auth from './api/Auth';
import apiAuthenConfig from "./api/ApiAuthen";
// Routes
import LoginRoute from './routes/Login/LoginRoute';
import RegisterRoute from './routes/Register/RegisterRoute';
import HomeRoute from './routes/Home/HomeRoute';
import EditorRoute from './routes/Editor/EditorRoute';
import ArticleRoute from './routes/Article/ArticleRoute';
import ProfileRoute from './routes/Profile/ProfileRoute';
import SettingRoute from './routes/Setting/SettingRoute';

class App extends RComponent {
    constructor(props, context) {
        super(props, context);
        this.onUnmount(Auth.onChange(() => this.forceUpdate()));
        fetcherConfig.setHeaders(() => {
            let user = Auth.getUser();
            if (user) {
                return {
                    "authorization": `Token ${user.token}`,
                };
            }
            return {};
        });

        apiAuthenConfig.setAuthen(() => {
            if (Auth.getUser()) {
                return true;
            }

            window.location.hash = "/register";
        });
    }
    render() {
        const user = Auth.getUser();
        const requireAuthen = (Component, props) => null == user ? (<Redirect to="/" />) : (<Component {...props} />);
        const requireUnauthen = (Component, props) => null != user ? (<Redirect to="/" />) : (<Component {...props} />);

        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={HomeRoute} />
                    <Route exact path='/@:username' component={ProfileRoute} />
                    <Route exact path='/article' component={ArticleRoute} />
                    <Route exact path='/login' render={(props) => requireUnauthen(LoginRoute, { ...props })} />
                    <Route exact path='/register' render={(props) => requireUnauthen(RegisterRoute, { ...props })} />
                    <Route exact path='/editor' render={(props) => requireAuthen(EditorRoute, { ...props })} />
                    <Route exact path='/setting' render={(props) => requireAuthen(SettingRoute, { ...props })} />
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
