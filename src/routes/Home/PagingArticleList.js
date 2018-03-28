import RComponent from './../../common/RComponent';
import React, { Fragment } from "react";
import ArticleList from './ArticleList';

export default class PagingArticleList extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            page: 0,
            articlesCount: null,
        };
    }

    render() {
        const { api } = this.props;
        const { page, articlesCount } = this.state;
        return (
            <Fragment>
                <ArticleList
                    key={page}
                    api={() => api(page).then(({ articles, articlesCount }) => {
                        if (this.state.articlesCount == null) {
                            this.setState({ articlesCount });
                        }
                        return articles;
                    })}
                />
            </Fragment>
        );
    }
}