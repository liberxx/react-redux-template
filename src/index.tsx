import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import configureStore from './store';
import { Routes } from './routes';
import testSaga from './pages/saga';


const {store, sagaMiddleware} = configureStore();

require('normalize.css');

sagaMiddleware.run(testSaga as any);

export const history = createHistory();

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <Routes/>
                </ConnectedRouter>
            </div>
        </Provider>,
        document.getElementById('root')
    );
render();
