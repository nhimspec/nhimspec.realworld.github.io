import RComponent from './RComponent';
import React from 'react';

export default class LoadingPanel extends RComponent {
    render() {
        const { text } = this.props;
        return (
            <div className="loading-panel">
                {text || "Loading"}...
            </div>
        );
    }
}