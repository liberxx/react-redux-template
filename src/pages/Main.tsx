import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as CSSModules from 'react-css-modules';
import * as pageActions from './actions';
import { AppStore } from '../store';

const styles = require('./main.scss');

interface MainProps {
    pageActions?: any;
    addText: Function;
    page?: any;
    messages: Array<string>;
}

class MainComponent extends Component<MainProps, null> {
    render() {
        return <div styleName='app'>
                  <div styleName='title'> Some Random First Page Stuff</div>
                    {this.props.messages.map(
                        (message, i) =>
                            <div key={i}>{`${message}`}</div>
                        )
                    }
                    <button
                        styleName='button'
                        onClick={() => this.props.addText('RandomText')}
                    >
                        Dispatch Test
                    </button>
               </div>
    }
}

function mapStateToProps(state: AppStore, ownProps: MainProps): MainProps {
    return {
        ...ownProps,
        page: state.page,
        messages: state.messages
    }
}

function mapDispatchToProps(
    dispatch: Dispatch<AppStore>,
    ownProps: MainProps
): MainProps {
    return {
        ...ownProps,
        addText: bindActionCreators<any>(pageActions.addText, dispatch)
    }
}

const Main = CSSModules(MainComponent, styles);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

