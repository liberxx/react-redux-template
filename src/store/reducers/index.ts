import { combineReducers } from 'redux'
import messages from './messages';
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
    messages,
    router: routerReducer
})
