import { path } from 'ramda';
import getLocation from '../../../services/getLocation';
import fetchApartments from '../../../services/fetchApartments';
import addGeolocationSearched from './addGeolocationSearched';

export default function fetchGeolocationApartmets() {
    return (dispatch) => {
        return getLocation().then(({ latitude, longitude }) => {
            return fetchApartments({
                page: 1,
                centre_point: `${latitude},${longitude}`,
            }).then((apartments) => {
                const totalPages = path(['total_pages'], apartments);

                dispatch(
                    addGeolocationSearched({
                        centre_point: `${latitude},${longitude}`,
                        totalPages,
                    })
                );
            });
        });
    };
}
