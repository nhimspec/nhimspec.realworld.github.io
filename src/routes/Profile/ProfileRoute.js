import React from 'react';
import Layout from './../Layout/Layout';
import ProfileHeader from './ProfileHeader';

export default class ProfileRoute extends React.Component {
    render() {
        const { match, history } = this.props;
        let username = match.params.username;
        return (
            <Layout>
                <div className="profile-page">

                    <div className="user-info">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-10 col-md-offset-1">
                                    <ProfileHeader
                                        key={username}
                                        username={username}
                                        onInvalidProfile={() => history.push("/")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="col-md-10 col-md-offset-1">
                                <div className="posts-toggle">
                                    <ul className="nav nav-pills outline-active">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">My Posts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Favorited Posts</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="post-preview">
                                    <div className="post-meta">
                                        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
                                        <div className="info">
                                            <a href="profile.html" className="author">Eric Simons</a>
                                            <span className="date">January 20th</span>
                                        </div>
                                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                            <i className="ion-heart"></i> 29
          </button>
                                    </div>
                                    <a href="post.html" className="preview-link">
                                        <h1>How to build webapps that scale</h1>
                                        <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the className names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classNamees used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
                                        <span>Read more...</span>
                                    </a>
                                </div>

                                <div className="post-preview">
                                    <div className="post-meta">
                                        <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                                        <div className="info">
                                            <a href="profile.html" className="author">Albert Pai</a>
                                            <span className="date">January 20th</span>
                                        </div>
                                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                            <i className="ion-heart"></i> 32
          </button>
                                    </div>
                                    <a href="post.html" className="preview-link">
                                        <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                                        <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
                                        <span>Read more...</span>
                                    </a>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}