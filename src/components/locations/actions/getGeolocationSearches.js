import getByLocalStorage from '../../../services/getByLocalStorage';
import { GEOLOCATION_SEARCHES_LOCAL_STORAGE_KEY } from '../../../constants';

export default function getGeolocationSearches() {
    return (dispatch) => {
        return getByLocalStorage(GEOLOCATION_SEARCHES_LOCAL_STORAGE_KEY).then((geolocationSearches) => {
            return dispatch({
                type: 'ADD_GEOLOCATION_SEARCHED_APPARTMENTS',
                geolocationSearches,
            });
        });
    };
}
