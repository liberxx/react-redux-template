import * as React from 'react';
import { Component } from 'react';
import * as CSSModules from 'react-css-modules';

const styles = require('./contacts.scss');

class Contacts extends Component {
    render() {
        return (
            <div styleName='content'>
                Here you can find our contacts:
            </div>
        )
    }
}

export default CSSModules(Contacts, styles);
