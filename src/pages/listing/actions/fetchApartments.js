import fetchApartmentsService from '../../../services/fetchApartmentsService';

export default function fetchApartments({ page, city }) {
    return (dispatch) => {
        return fetchApartmentsService({ page, city }).then((apartments) => {
            dispatch({
                type: 'ADD_TO_CURRENT_APARTMENTS',
                city,
                apartments,
            });
        });
    };
}
