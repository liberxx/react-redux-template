import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { routerMiddleware, push } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { history } from '..';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

export interface AppStore {
    page: any;
    messages: Array<string>;
}

export default function configureStore() {
    const middleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        (window as Window).__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(middleware, sagaMiddleware)
    );
    //
    // if (module.hot) {
    //   module.hot.accept('../reducers', () => {
    //     const nextRootReducer = require('../reducers')
    //     store.replaceReducer(nextRootReducer)
    //   })
    // }

    return {
        store,
        sagaMiddleware
    };
};