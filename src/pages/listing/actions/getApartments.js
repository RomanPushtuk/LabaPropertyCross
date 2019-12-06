import getByLocalStorage from '../../../services/getByLocalStorage';
import { APARTMENTS_LOCAL_STORAGE_KEY } from '../../../constants';

export default function getApartments() {
    return (dispatch) => {
        return getByLocalStorage(APARTMENTS_LOCAL_STORAGE_KEY).then((apartments) => {
            return dispatch({
                type: 'ADD_ARARTMENTS',
                apartments,
            });
        });
    };
}
