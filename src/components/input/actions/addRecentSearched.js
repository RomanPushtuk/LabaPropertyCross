import getByLocalStorage from '../../../services/getByLocalStorage';
import setByLocalStorage from '../../../services/saveByLocalStorage';
import { RECENT_SEARCHES_LOCAL_STORAGE_KEY } from '../../../constants';

export default function addRecentSearched(recentSearch) {
    return (dispatch) => {
        return getByLocalStorage(RECENT_SEARCHES_LOCAL_STORAGE_KEY).then((savedRecentSearches) => {
            const recentSearches = [...savedRecentSearches, recentSearch];

            setByLocalStorage(RECENT_SEARCHES_LOCAL_STORAGE_KEY, recentSearches);
            return dispatch({
                type: 'ADD_RECENT_SEARCHED_APPARTMENTS',
                recentSearches,
            });
        });
    };
}
