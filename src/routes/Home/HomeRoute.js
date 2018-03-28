import React from 'react';
// Layout
import Layout from './../Layout/Layout';
import PagingArticleList from './PagingArticleList';
import ArticleApi from './../../api/ArticleApi';
import TagApi from './../../api/TagApi';
import Auth from '../../api/Auth';
import RComponent from '../../common/RComponent';
import FeedPanel from './FeedPanel';
import LoadingPanel from './../../common/LoadingPanel';

export default class HomeRoute extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tags: null,
            showTag: null,
        };

        TagApi.getTags().then((tags) => this.setState({ tags }));
        this.onUnmount(Auth.onChange(() => this.forceUpdate()));

    }
    render() {
        const { tags, showTag } = this.state;
        return (
            <Layout>
                <div className="home-page">

                    <div className="banner">
                        <div className="container">
                            <h1 className="logo-font">conduit</h1>
                            <p>A place to share your knowledge.</p>
                        </div>
                    </div>

                    <div className="container page">
                        <div className="row">

                            <FeedPanel
                                className="col-md-9"
                                forcedTab={
                                    showTag && ({
                                        tabLabel: `# ${showTag}`,
                                        render: () => (
                                            <PagingArticleList
                                                key={showTag}
                                                api={(page) => ArticleApi.getArticleListByTag(page, showTag)}
                                            />
                                        )
                                    })
                                }
                                onChangedTab={() => showTag && this.setState({ showTag: null })}
                            />
                            <div className="col-md-3">
                                <div className="sidebar">
                                    <p>Popular Tags</p>

                                    <div className="tag-list">
                                        {tags == null ? (
                                            <LoadingPanel />
                                        ) : (
                                                tags.map((tag, i) => (
                                                    <a
                                                        href="" className="label label-pill label-default"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState({ showTag: tag });
                                                        }}
                                                        key={i}
                                                    >{tag}</a>
                                                ))
                                            )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}