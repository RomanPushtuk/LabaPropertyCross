import { combineReducers } from 'redux';

import recentSearchedAppartments from './recentSearchedAppartments';
import geolocationSearchedAppartments from './geolocationSearchedAppartments';
import apartments from './apartments';

const rootReducer = combineReducers({
    recentSearchedAppartments,
    geolocationSearchedAppartments,
    apartments,
});

export default rootReducer;
