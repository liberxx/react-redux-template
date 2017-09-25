import * as React from 'react';
import {Component} from 'react';
import * as CSSModules from 'react-css-modules';
import {InjectedCSSModuleProps} from 'react-css-modules';
import { Link } from 'react-router-dom'

const styles = require('./navigation.scss');


interface Props extends InjectedCSSModuleProps {
    addText: any;
}

class Navigation extends Component<Props, null> {

    render() {
        return (
            <div styleName='navigation'>
                <div styleName='links'>
                    <div styleName='link'>
                        <Link to='/'>Go to Main Page</Link>
                    </div>
                    <div styleName='link'>
                        <Link to='/about'>Go to About Page</Link>
                    </div>
                    <div styleName='link'>
                        <Link to='/contacts'>Go to Contacts Page</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default CSSModules(Navigation, styles);
