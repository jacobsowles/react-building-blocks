import React, { Component } from 'react';
import { Icon } from 'react-building-blocks';

class IconDocs extends Component {
    render() {
        return (
            <div>
                <h1>Icon</h1>

                <h2>Demo</h2>
                <Icon
                    glyph="bars"
                    onClick={() => alert('Icon activated.')}
                />
                Clickable icon

                <br />

                <Icon glyph="comment-o" />
                Non-clickable icon

                <h2>Usage</h2>

                <h2>Example</h2>
            </div>
        );
    }
}

module.exports = IconDocs;
