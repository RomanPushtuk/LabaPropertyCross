import { path } from 'ramda';
import fetchApartmentsService from '../../../services/fetchApartmentsService';
import addRecentSearched from './addRecentSearched';
import addApartments from './addApartments';

export default function fetchCityApartments(city) {
    return (dispatch) => {
        return fetchApartmentsService({
            page: 1,
            place_name: `${city}`,
        }).then((apartments) => {
            const totalPages = path(['total_pages'], apartments);

            dispatch(
                addApartments({
                    [city]: apartments,
                })
            );

            dispatch(
                addRecentSearched({
                    city,
                    totalPages,
                })
            );
        });
    };
}
