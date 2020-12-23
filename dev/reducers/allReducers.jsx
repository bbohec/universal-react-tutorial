import { combineReducers } from 'redux';
import locales from './locales';
import initialState from './initialState'
import users from './users'
import jody from './jody'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */


const allReducers = combineReducers({
    locales: locales,
    initialState: initialState,
    users: users
});

export default allReducers