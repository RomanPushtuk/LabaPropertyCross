import getByLocalStorage from '../../../services/getByLocalStorage';
import setByLocalStorage from '../../../services/saveByLocalStorage';
import { GEOLOCATION_SEARCHES_LOCAL_STORAGE_KEY } from '../../../constants';

export default function addRecentSearched(geolocationSearch) {
    return (dispatch) => {
        return getByLocalStorage(GEOLOCATION_SEARCHES_LOCAL_STORAGE_KEY).then((savedGeolocationSearches) => {
            const geolocationSearches = [...savedGeolocationSearches, geolocationSearch];

            setByLocalStorage(GEOLOCATION_SEARCHES_LOCAL_STORAGE_KEY, geolocationSearches);
            return dispatch({
                type: 'ADD_GEOLOCATION_SEARCHED_APPARTMENTS',
                geolocationSearches,
            });
        });
    };
}
