import { ACTION } from '../../constants';
import { combineReducers } from 'redux';

function templateReducer(state = {}, action) {
    switch (action.type) {
        case ACTION:
            return {
                ...state,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({ template: templateReducer });

export default rootReducer;
