import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';

const styles = require('./about.scss');

class About extends Component {
    render() {
        return (
            <div styleName='content'>
                You are using TS, React, Redux, React-router, React-CSS-Modules, Saga middleware boilerplate.
            </div>
        )
    }
}

export default CSSModules(About, styles);
