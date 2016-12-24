import React, { Component } from 'react';
import { PageTitle } from 'react-building-blocks';

class PageTitleDocs extends Component {
    render() {
        return (
            <div>
                <h1>PageTitle</h1>
                <h2>Demo</h2>

                <PageTitle>Lorem Ipsum</PageTitle>

                <h2>Usage</h2>
                <h2>Example</h2>
            </div>
        );
    }
}

module.exports = PageTitleDocs;
