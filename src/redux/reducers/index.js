import { combineReducers } from 'redux';

import recentSearchedAppartments from './recentSearchedAppartments';
import geolocationSearchedAppartments from './geolocationSearchedAppartments';

const rootReducer = combineReducers({
    recentSearchedAppartments,
    geolocationSearchedAppartments,
});

export default rootReducer;
