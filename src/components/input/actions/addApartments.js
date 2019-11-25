import getByLocalStorage from '../../../services/getByLocalStorage';
import setByLocalStorage from '../../../services/saveByLocalStorage';
import { APARTMENTS_LOCAL_STORAGE_KEY } from '../../../constants';

export default function addApartments(apartmentsCity) {
    return (dispatch) => {
        return getByLocalStorage(APARTMENTS_LOCAL_STORAGE_KEY).then((savedApartments) => {
            const apartments = { ...savedApartments, ...apartmentsCity };
            setByLocalStorage(APARTMENTS_LOCAL_STORAGE_KEY, apartments);
            return dispatch({
                type: 'ADD_ARARTMENTS',
                apartments,
            });
        });
    };
}
