import React, { Component } from 'react';
import { PageSubtitle, PageTitle } from 'react-building-blocks';

class PageTitleDocs extends Component {
    render() {
        return (
            <div>
                <h1>PageTitle</h1>
                <h2>Demo</h2>

                <PageTitle>Most Earthquake Damage Is Caused By Shaking</PageTitle>
                <PageSubtitle>The shocking truth that will shake you to your core</PageSubtitle>

                <h2>Usage</h2>
                <h2>Example</h2>
            </div>
        );
    }
}

module.exports = PageTitleDocs;
