import RComponent from './../../common/RComponent';
import React, { Fragment } from "react";
import Auth from '../../api/Auth';
import PagingArticleList from './PagingArticleList';
import TabsPanel from './TabsPanel/TabsPanel';
import ArticleApi from '../../api/ArticleApi';

export default class FeedPanel extends RComponent {
    constructor(props, context) {
        super(props, context);

        this.onUnmount(Auth.onChange(() => this.forceUpdate()));
    }
    render() {
        const {className, forcedTab, onChangedTab} = this.props;
        const tabs = [
            Auth.getUser() && ({
                tabLabel: "Your Feed",
                render: () => (
                    <PagingArticleList
                        api={(page) => ArticleApi.getMyFeedList(page)}
                    />
                ),
            }),
            {
                tabLabel: "Global Feed",
                render: () => (
                    <PagingArticleList
                        api={(page) => ArticleApi.getArticleList(page)}
                    />
                )
            },
            forcedTab && { ...forcedTab, forced: true }
        ];
        return (
            <TabsPanel
                className={className}
                tabs={tabs}
                onChange={() => onChangedTab()}
            />
        );
    }
}