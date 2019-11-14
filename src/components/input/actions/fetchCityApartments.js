import { path } from 'ramda';
import fetchApartments from '../../../services/fetchApartments';
import addRecentSearched from './addRecentSearched';

export default function fetchCityApartments(city) {
    return (dispatch) => {
        return fetchApartments({
            page: 1,
            place_name: `${city}`,
        }).then((apartments) => {
            const totalPages = path(['total_pages'], apartments);

            dispatch(
                addRecentSearched({
                    city,
                    totalPages,
                })
            );
        });
    };
}
