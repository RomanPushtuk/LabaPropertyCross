import getByLocalStorage from '../../../services/getByLocalStorage';
import { RECENT_SEARCHES_LOCAL_STORAGE_KEY } from '../../../constants';

export default function getRecentSearches() {
    return (dispatch) => {
        return getByLocalStorage(RECENT_SEARCHES_LOCAL_STORAGE_KEY).then((recentSearches) => {
            return dispatch({ type: 'ADD_RECENT_SEARCHED_APPARTMENTS', recentSearches });
        });
    };
}
