import React, { Fragment } from 'react';
import RComponent from './../../common/RComponent';
import { Link } from 'react-router-dom';
import profileApi from './../../api/Profile';
import Auth from '../../api/Auth';

import LoadingPanel from './../../common/LoadingPanel';

export default class ProfileHeader extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.state = {
            propfile: null
        };

        profileApi.getProfile(props.username).then((profile) => {
            console.log(profile);
            if (profile == null) {
                props.onInvalidProfile();
                return;
            }
            return this.setState({ profile });
        });
    }


    render() {
        const { username } = this.props;
        const { profile } = this.state;

        let user = Auth.getUser();
        return (
            <Fragment>
                {profile == null ? (
                    <LoadingPanel />
                ) : (
                        <Fragment>
                            <img src={profile.image} className="user-img" />
                            <h4>{profile.username}</h4>
                            <p>{profile.bio}</p>
                        </Fragment>
                    )}
                {user && username == user.username ? (
                    <Link to="/setting" className="btn btn-sm btn-outline-secondary action-btn">
                        <i className="ion-gear-a" /> Edit Profile Settings
                    </Link>
                ) : (
                        <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
                            <i className="ion-gear-a" /> Follow
                    </Link>
                    )}
            </Fragment>
        );
    }
}